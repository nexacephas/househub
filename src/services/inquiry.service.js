import api from "./api";

export const createInquiry = (propertyId, data) =>
  api.post(`/inquiries/${propertyId}`, data);

export const getMyInquiries = () =>
  api.get("/inquiries/my");

export const getLandlordInquiries = () =>
  api.get("/inquiries/landlord");

export const updateInquiryStatus = (id, status) =>
  api.patch(`/inquiries/${id}/status`, { status });