import api from "./api";

const logService = {
  getLogs(params = {}) {
    return api.get("/logs", { params });
  },

  getLog(id) {
    return api.get(`/logs/${id}`);
  },

  clearLogs() {
    return api.delete("/logs");
  },

  getStats() {
    return api.get("/logs/stats");
  },
};

export default logService;