import api from "./api";

const propertyService = {
  getProperties(params = {}) {
    return api.get("/properties", {
      params,
    });
  },

  getProperty(id) {
    return api.get(`/properties/${id}`);
  },

  createProperty(data) {
    return api.post("/properties", data);
  },

  updateProperty(id, data) {
    return api.put(`/properties/${id}`, data);
  },

  deleteProperty(id) {
    return api.delete(`/properties/${id}`);
  },

  getStats() {
    return api.get("/properties/stats");
  },
};

export default propertyService;