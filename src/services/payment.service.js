import api from "./api";

const statusMap = {
  Pending: "pending",
  Successful: "paid",
  Paid: "paid",
  Failed: "failed",
  Refunded: "refunded",
  Overdue: "overdue",
};

const normalizePaymentParams = (params = {}) => {
  const normalized = { ...params };

  if (normalized.status) {
    normalized.status = statusMap[normalized.status] || normalized.status.toLowerCase?.() || normalized.status;
  }

  if (typeof normalized.method === "string") {
    normalized.method = normalized.method.toLowerCase().replace(/\s+/g, "_");
  }

  delete normalized.search;
  delete normalized.date;

  return Object.fromEntries(
    Object.entries(normalized).filter(([, value]) => value !== "" && value !== null && value !== undefined)
  );
};

const normalizePaymentPayload = (data = {}) => {
  const normalized = { ...data };

  if (normalized.status) {
    normalized.status = statusMap[normalized.status] || normalized.status.toLowerCase?.() || normalized.status;
  }

  if (typeof normalized.method === "string") {
    normalized.method = normalized.method.toLowerCase().replace(/\s+/g, "_");
  }

  return normalized;
};

const paymentService = {
  // ==========================
  // Payments
  // ==========================

  getPayments(params = {}) {
    return api.get("/payments", { params: normalizePaymentParams(params) });
  },

  getPayment(id) {
    return api.get(`/payments/${id}`);
  },

  createPayment(data) {
    return api.post("/payments", normalizePaymentPayload(data));
  },

  updatePayment(id, data) {
    return api.put(`/payments/${id}`, normalizePaymentPayload(data));
  },

  refundPayment(id, reason = "") {
    return api.patch(`/payments/${id}/refund`, { reason });
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
