import api from "./api";

const statusMap = {
  Pending: "pending",
  Confirmed: "confirmed",
  Completed: "completed",
  Cancelled: "cancelled",
};

const normalizeBookingParams = (params = {}) => {
  const normalized = { ...params };

  if (normalized.tenant && !normalized.user) {
    normalized.user = normalized.tenant;
    delete normalized.tenant;
  }

  if (normalized.status) {
    normalized.status = statusMap[normalized.status] || normalized.status.toLowerCase?.() || normalized.status;
  }

  delete normalized.paymentStatus;
  delete normalized.search;

  return Object.fromEntries(
    Object.entries(normalized).filter(([, value]) => value !== "" && value !== null && value !== undefined)
  );
};

const normalizeBookingPayload = (data = {}) => {
  const normalized = { ...data };

  if (normalized.tenant && !normalized.user) normalized.user = normalized.tenant;
  if (normalized.checkIn && !normalized.startDate) normalized.startDate = normalized.checkIn;
  if (normalized.checkOut && !normalized.endDate) normalized.endDate = normalized.checkOut;
  if (normalized.totalAmount !== undefined && normalized.amount === undefined) {
    normalized.amount = normalized.totalAmount;
  }
  if (normalized.status) {
    normalized.status = statusMap[normalized.status] || normalized.status.toLowerCase?.() || normalized.status;
  }

  delete normalized.tenant;
  delete normalized.checkIn;
  delete normalized.checkOut;
  delete normalized.totalAmount;
  delete normalized.paymentStatus;

  return normalized;
};

const bookingService = {
  getBookings(params = {}) {
    return api.get("/bookings", {
      params: normalizeBookingParams(params),
    });
  },

  getBooking(id) {
    return api.get(`/bookings/${id}`);
  },

  createBooking(data) {
    return api.post("/bookings", normalizeBookingPayload(data));
  },

  updateBooking(id, data) {
    return api.put(`/bookings/${id}`, normalizeBookingPayload(data));
  },

  deleteBooking(id) {
    return api.delete(`/bookings/${id}`);
  },

  getStats() {
    return api.get("/bookings/stats");
  },
};

export default bookingService;
