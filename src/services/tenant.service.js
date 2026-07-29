import api from "./api";

const tenantService = {
  // ==========================
  // Tenant CRUD
  // ==========================

  getTenants(params = {}) {
    return api.get("/tenants", {
      params,
    });
  },

  getTenant(id) {
    return api.get(`/tenants/${id}`);
  },

  createTenant(data) {
    return api.post("/tenants", data);
  },

  updateTenant(id, data) {
    return api.put(`/tenants/${id}`, data);
  },

  deleteTenant(id) {
    return api.delete(`/tenants/${id}`);
  },

  // ==========================
  // Dashboard
  // ==========================

  getTenantStats() {
    return api.get("/tenants/stats");
  },

  // ==========================
  // Lease Management
  // ==========================

  renewLease(id, data) {
    return api.put(
      `/tenants/${id}/renew`,
      data
    );
  },

  terminateLease(id) {
    return api.put(
      `/tenants/${id}/terminate`
    );
  },

  // ==========================
  // Payments
  // ==========================

  getTenantPayments(id) {
    return api.get(
      `/tenants/${id}/payments`
    );
  },

  // ==========================
  // Maintenance
  // ==========================

  getMaintenanceRequests(id) {
    return api.get(
      `/tenants/${id}/maintenance`
    );
  },

  // ==========================
  // Messaging
  // ==========================

  sendMessage(id, data) {
    return api.post(
      `/tenants/${id}/message`,
      data
    );
  },
};

export default tenantService;