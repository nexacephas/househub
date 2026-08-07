const fallbackApiUrl = import.meta.env.PROD
  ? "https://house-server-vgcv.onrender.com/api/v1"
  : "http://localhost:5000/api/v1";

const API_BASE_URL = import.meta.env.VITE_API_URL?.trim() || fallbackApiUrl;

export default API_BASE_URL;
