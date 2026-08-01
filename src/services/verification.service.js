import api from "./api";

const verificationService = {
  getVerifications(params = {}) {
    return api.get("/verifications", {
      params,
    });
  },

  getVerification(id) {
    return api.get(`/verifications/${id}`);
  },

  approveVerification(id) {
    return api.patch(
      `/verifications/${id}/approve`
    );
  },

  rejectVerification(id, reason) {
    return api.patch(
      `/verifications/${id}/reject`,
      { reason }
    );
  },

  getStats() {
    return api.get("/verifications/stats");
  },
};

export default verificationService;