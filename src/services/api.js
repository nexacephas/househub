import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api/v1",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("househub_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (config.data instanceof FormData) {
    delete config.headers["Content-Type"];
  } else if (!config.headers["Content-Type"]) {
    config.headers["Content-Type"] = "application/json";
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status !== 401 ||
      originalRequest?._retry ||
      originalRequest?.url?.includes("/auth/refresh")
    ) {
      return Promise.reject(error);
    }

    const refreshToken =
      localStorage.getItem("househub_refresh_token");

    if (!refreshToken) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      const { data } = await api.post("/auth/refresh", {
        refreshToken,
      });

      localStorage.setItem("househub_token", data.accessToken);

      if (data.refreshToken) {
        localStorage.setItem(
          "househub_refresh_token",
          data.refreshToken
        );
      }

      originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;

      return api(originalRequest);
    } catch (refreshError) {
      localStorage.removeItem("househub_token");
      localStorage.removeItem("househub_refresh_token");
      localStorage.removeItem("househub_user");

      return Promise.reject(refreshError);
    }
  }
);

export default api;
