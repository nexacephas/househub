import api from "./api";

const messageService = {
  // ==========================
  // Conversations
  // ==========================

  getConversations(params = {}) {
    return api.get("/messages/conversations", {
      params,
    });
  },

  getConversation(id) {
    return api.get(
      `/messages/conversations/${id}`
    );
  },

  createConversation(data) {
    return api.post(
      "/messages/conversations",
      data
    );
  },

  deleteConversation(id) {
    return api.delete(
      `/messages/conversations/${id}`
    );
  },

  // ==========================
  // Messages
  // ==========================

  getMessages(
    conversationId,
    params = {}
  ) {
    return api.get(
      `/messages/${conversationId}`,
      {
        params,
      }
    );
  },

  sendMessage(data) {
    return api.post(
      "/messages",
      data
    );
  },

  updateMessage(id, data) {
    return api.put(
      `/messages/${id}`,
      data
    );
  },

  deleteMessage(id) {
    return api.delete(
      `/messages/${id}`
    );
  },

  // ==========================
  // Read Receipts
  // ==========================

  markAsRead(id) {
    return api.put(
      `/messages/read/${id}`
    );
  },

  markConversationAsRead(
    conversationId
  ) {
    return api.put(
      `/messages/read/conversation/${conversationId}`
    );
  },

  // ==========================
  // Attachments
  // ==========================

  uploadAttachment(
    conversationId,
    formData,
    onUploadProgress
  ) {
    return api.post(
      `/messages/${conversationId}/attachments`,
      formData,
      {
        headers: {
          "Content-Type":
            "multipart/form-data",
        },
        onUploadProgress,
      }
    );
  },

  // ==========================
  // Search
  // ==========================

  searchMessages(query) {
    return api.get(
      "/messages/search",
      {
        params: {
          q: query,
        },
      }
    );
  },
};

export default messageService;