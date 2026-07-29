import api from "./api";

const maintenanceService = {
  getRequests(params = {}) {
    return api.get("/maintenance", {
      params,
    });
  },

  getRequest(id) {
    return api.get(`/maintenance/${id}`);
  },

  createRequest(data) {
    return api.post("/maintenance", data);
  },

  updateRequest(id, data) {
    return api.put(`/maintenance/${id}`, data);
  },

  deleteRequest(id) {
    return api.delete(`/maintenance/${id}`);
  },

  getStats() {
    return api.get("/maintenance/stats");
  },
};

export default maintenanceService;