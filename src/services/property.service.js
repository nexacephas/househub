import api from "./api";

const normalizeParams = (params = {}) => {
  const normalized = { ...params };

  if (normalized.type && !normalized.propertyType) {
    normalized.propertyType = normalized.type.toLowerCase();
    delete normalized.type;
  }

  if (typeof normalized.status === "string") {
    normalized.status = normalized.status.toLowerCase();
  }

  return Object.fromEntries(
    Object.entries(normalized).filter(([, value]) => value !== "" && value !== null && value !== undefined)
  );
};

const propertyService = {
  getAll(params = {}) {
    return this.getProperties(params);
  },

  getProperties(params = {}) {
    return api.get("/properties", { params: normalizeParams(params) });
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
