

import api from "./api";

export const login = (credentials) => {
  return api.post("/auth/login", credentials);
};

export const register = (userData) => {
  return api.post("/auth/register", userData);
};

export const refreshToken = (refreshTokenValue) => {
  return api.post("/auth/refresh", {
    refreshToken: refreshTokenValue,
  });
};

export const logout = (refreshTokenValue) => {
  return api.post("/auth/logout", {
    refreshToken: refreshTokenValue,
  });
};

export const forgotPassword = (email) => {
  return api.post("/auth/forgot-password", { email });
};

export const resetPassword = ({ token, password }) => {
  return api.post(`/auth/reset-password/${token}`, { password });
};

export const verifyEmail = (token) => {
  return api.get(`/auth/verify-email/${token}`);
};

export const resendVerificationEmail = (email) => {
  return api.post("/auth/resend-verification", { email });
};
