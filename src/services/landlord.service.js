import api from "./api";

const landlordService = {
  getLandlords(params = {}) {
    return api.get("/landlords", {
      params,
    });
  },

  getLandlord(id) {
    return api.get(`/landlords/${id}`);
  },

  createLandlord(data) {
    return api.post("/landlords", data);
  },

  updateLandlord(id, data) {
    return api.put(`/landlords/${id}`, data);
  },

  verifyLandlord(id) {
    return api.patch(`/landlords/${id}/verify`);
  },

  suspendLandlord(id, reason) {
    return api.patch(`/landlords/${id}/suspend`, {
      reason,
    });
  },

  deleteLandlord(id) {
    return api.delete(`/landlords/${id}`);
  },

  getStats() {
    return api.get("/landlords/stats");
  },
};

export default landlordService;