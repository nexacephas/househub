import axios from "axios";
import API_BASE_URL from "../config/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  timeout: 30000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
});

const getAuthToken = () => localStorage.getItem("househub_token");
const getRefreshToken = () => localStorage.getItem("househub_refresh_token");
const clearAuthStorage = () => {
  localStorage.removeItem("househub_token");
  localStorage.removeItem("househub_refresh_token");
  localStorage.removeItem("househub_user");
};

api.interceptors.request.use((config) => {
  config.headers = config.headers || {};

  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (config.data instanceof FormData) {
    delete config.headers["Content-Type"];
  } else if (!config.headers["Content-Type"]) {
    config.headers["Content-Type"] = "application/json";
  }

  config.headers.Accept = "application/json";
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const status = error.response?.status;

    if (
      status === 401 &&
      originalRequest &&
      !originalRequest._retry &&
      !originalRequest?.url?.includes("/auth/refresh")
    ) {
      const refreshToken = getRefreshToken();
      if (refreshToken) {
        originalRequest._retry = true;
        try {
          const { data } = await api.post("/auth/refresh", {
            refreshToken,
          });

          localStorage.setItem("househub_token", data.accessToken);
          if (data.refreshToken) {
            localStorage.setItem("househub_refresh_token", data.refreshToken);
          }
          originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
          return api(originalRequest);
        } catch (refreshError) {
          clearAuthStorage();
          return Promise.reject(formatError(refreshError));
        }
      }
    }

    if (status) {
      if ([401, 403, 404, 422, 429, 500].includes(status)) {
        return Promise.reject(formatError(error));
      }
    }

    if (error.code === "ECONNABORTED") {
      return Promise.reject({
        message: "The request timed out. Please try again.",
        status: 408,
        original: error,
      });
    }

    if (!error.response) {
      return Promise.reject({
        message: "Network error. Please check your internet connection.",
        original: error,
      });
    }

    return Promise.reject(formatError(error));
  }
);

function formatError(error) {
  const status = error.response?.status;
  const serverMessage = error.response?.data?.message;
  let message = serverMessage || error.message || "An unexpected error occurred.";

  if (status === 401) {
    message = serverMessage || "Unauthorized. Please log in again.";
  } else if (status === 403) {
    message = serverMessage || "Forbidden. You do not have access to this resource.";
  } else if (status === 404) {
    message = serverMessage || "Resource not found.";
  } else if (status === 422) {
    message = serverMessage || "Validation failed. Please check your input.";
  } else if (status === 429) {
    message = serverMessage || "Too many requests. Please wait and try again.";
  } else if (status === 500) {
    message = serverMessage || "Server error. Please try again later.";
  }

  return {
    message,
    status,
    data: error.response?.data || null,
    errors: error.response?.data?.errors || null,
    response: error.response,
    original: error,
  };
}

export default api;
