const fallbackApiUrl = import.meta.env.PROD
  ? "https://house-server-vgcv.onrender.com/api/v1"
  : "http://localhost:5000/api/v1";

const API_VERSION_PATH = "/api/v1";

const normalizeApiBaseUrl = (value) => {
  const rawUrl = (value || fallbackApiUrl).trim().replace(/\/+$/, "");
  const withoutDuplicateVersion = rawUrl.replace(/(\/api\/v1)+$/i, API_VERSION_PATH);

  if (/\/api\/v1$/i.test(withoutDuplicateVersion)) {
    return withoutDuplicateVersion;
  }

  return `${withoutDuplicateVersion}${API_VERSION_PATH}`;
};

const API_BASE_URL = normalizeApiBaseUrl(import.meta.env.VITE_API_URL);

export default API_BASE_URL;
