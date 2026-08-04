import api from "./api";

const propertyService = {
  getAll(params = {}) {
    return this.getProperties(params);
  },

  getProperties(params = {}) {
    return api.get("/properties", { params });
  },

  getMyProperties(params = {}) {
    return api.get("/properties/my/listings", { params });
  },

  getProperty(id) {
    return api.get(`/properties/${id}`);
  },

  createProperty(data, onUploadProgress) {
    return api.post("/properties", data, {
      onUploadProgress,
    });
  },

  updateProperty(id, data, onUploadProgress) {
    return api.put(`/properties/${id}`, data, {
      onUploadProgress,
    });
  },

  deleteProperty(id) {
    return api.delete(`/properties/${id}`);
  },

  remove(id) {
    return this.deleteProperty(id);
  },

  getStats() {
    return api.get("/properties/stats");
  },
};

export default propertyService;