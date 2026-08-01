import api from "./api";

const agentService = {
  getAgents(params = {}) {
    return api.get("/agents", {
      params,
    });
  },

  getAgent(id) {
    return api.get(`/agents/${id}`);
  },

  createAgent(data) {
    return api.post("/agents", data);
  },

  updateAgent(id, data) {
    return api.put(`/agents/${id}`, data);
  },

  verifyAgent(id) {
    return api.patch(`/agents/${id}/verify`);
  },

  suspendAgent(id, reason) {
    return api.patch(`/agents/${id}/suspend`, {
      reason,
    });
  },

  deleteAgent(id) {
    return api.delete(`/agents/${id}`);
  },

  getStats() {
    return api.get("/agents/stats");
  },
};

export default agentService;