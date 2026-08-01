import api from "./api";

const userService = {
  // Get all users
  getUsers(params = {}) {
    return api.get("/users", {
      params,
    });
  },

  // Get single user
  getUser(id) {
    return api.get(`/users/${id}`);
  },

  // Create user
  createUser(data) {
    return api.post("/users", data);
  },

  // Update user
  updateUser(id, data) {
    return api.put(`/users/${id}`, data);
  },

  // Delete user
  deleteUser(id) {
    return api.delete(`/users/${id}`);
  },

  // Suspend user
  suspendUser(id) {
    return api.patch(`/users/${id}/suspend`);
  },

  // Activate user
  activateUser(id) {
    return api.patch(`/users/${id}/activate`);
  },

  // Verify user
  verifyUser(id) {
    return api.patch(`/users/${id}/verify`);
  },

  // Dashboard statistics
  getStats() {
    return api.get("/users/stats");
  },
};

export default userService;