import api from "./api";

const propertyService = {
  getProperties(params = {}) {
    return api.get("/properties", { params });
  },

  getProperty(id) {
    return api.get(`/properties/${id}`);
  },

  getMyProperties() {
    return api.get("/properties/my/listings");
  },

  createProperty(data, onUploadProgress) {
    return api.post("/properties", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },

      onUploadProgress,
    });
  },

  updateProperty(id, data, onUploadProgress) {
    return api.put(`/properties/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },

      onUploadProgress,
    });
  },

  deleteProperty(id) {
    return api.delete(`/properties/${id}`);
  },
};

export default propertyService;