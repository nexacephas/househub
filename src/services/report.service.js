import api from "./api";

const reportService = {
  getReports(params = {}) {
    return api.get("/reports", {
      params,
    });
  },

  getReport(id) {
    return api.get(`/reports/${id}`);
  },

  generateReport(data) {
    return api.post("/reports", data);
  },

  exportReport(id, format) {
    return api.get(`/reports/${id}/export`, {
      params: { format },
    });
  },

  deleteReport(id) {
    return api.delete(`/reports/${id}`);
  },

  getStats() {
    return api.get("/reports/stats");
  },
};

export default reportService;