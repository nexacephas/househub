import api from "./api";

const bookingService = {
  getBookings(params = {}) {
    return api.get("/bookings", {
      params,
    });
  },

  getBooking(id) {
    return api.get(`/bookings/${id}`);
  },

  createBooking(data) {
    return api.post("/bookings", data);
  },

  updateBooking(id, data) {
    return api.put(`/bookings/${id}`, data);
  },

  deleteBooking(id) {
    return api.delete(`/bookings/${id}`);
  },

  getStats() {
    return api.get("/bookings/stats");
  },
};

export default bookingService;