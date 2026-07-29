import api from "./api";

const paymentService = {
  // ==========================
  // Payments
  // ==========================

  getPayments(params = {}) {
    return api.get("/payments", { params });
  },

  getPayment(id) {
    return api.get(`/payments/${id}`);
  },

  createPayment(data) {
    return api.post("/payments", data);
  },

  updatePayment(id, data) {
    return api.put(`/payments/${id}`, data);
  },

  deletePayment(id) {
    return api.delete(`/payments/${id}`);
  },

  // ==========================
  // Dashboard
  // ==========================

  getPaymentStats() {
    return api.get("/payments/stats");
  },

  getRevenueChart(params = {}) {
    return api.get("/payments/revenue", {
      params,
    });
  },

  getOverduePayments() {
    return api.get("/payments/overdue");
  },

  // ==========================
  // Receipts & Invoices
  // ==========================

  generateReceipt(id) {
    return api.get(`/payments/${id}/receipt`, {
      responseType: "blob",
    });
  },

  generateInvoice(id) {
    return api.get(`/payments/${id}/invoice`, {
      responseType: "blob",
    });
  },

  // ==========================
  // Paystack
  // ==========================

  initializePayment(data) {
    return api.post(
      "/payments/paystack/initialize",
      data
    );
  },

  verifyPayment(reference) {
    return api.get(
      `/payments/paystack/verify/${reference}`
    );
  },

  // ==========================
  // Export
  // ==========================

  exportPayments(params = {}) {
    return api.get("/payments/export", {
      params,
      responseType: "blob",
    });
  },
};

export default paymentService;