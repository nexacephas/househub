import api from "./api";

const settingsService = {
  getSettings() {
    return api.get("/settings");
  },

  updateGeneral(data) {
    return api.put("/settings/general", data);
  },

  updateSecurity(data) {
    return api.put("/settings/security", data);
  },

  updateNotifications(data) {
    return api.put("/settings/notifications", data);
  },

  updatePayments(data) {
    return api.put("/settings/payments", data);
  },

  updateIntegrations(data) {
    return api.put("/settings/integrations", data);
  },
};

export default settingsService;