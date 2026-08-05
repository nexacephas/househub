/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import {
  login as loginService,
  logout as logoutService,
} from "../services/auth.service";
import api from "../services/api";

const readStoredUser = () => {
  try {
    const savedUser = localStorage.getItem("househub_user");
    return savedUser ? JSON.parse(savedUser) : null;
  } catch {
    return null;
  }
};

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => readStoredUser());
  const [loading, setLoading] = useState(true);

  const clearStoredAuth = () => {
    localStorage.removeItem("househub_token");
    localStorage.removeItem("househub_refresh_token");
    localStorage.removeItem("househub_user");
  };

  const syncUser = async (nextUser = null) => {
    if (nextUser) {
      setUser(nextUser);
      localStorage.setItem("househub_user", JSON.stringify(nextUser));
      return nextUser;
    }

    try {
      const { data } = await api.get("/users/me");
      const currentUser = data.user;
      setUser(currentUser);
      localStorage.setItem("househub_user", JSON.stringify(currentUser));
      return currentUser;
    } catch {
      clearStoredAuth();
      setUser(null);
      return null;
    }
  };

  useEffect(() => {
    async function hydrate() {
      await syncUser();
      setLoading(false);
    }

    hydrate();
  }, []);

  const login = async (credentials) => {
    const { data } = await loginService(credentials);

    localStorage.setItem(
      "househub_token",
      data.accessToken || data.token
    );

    if (data.refreshToken) {
      localStorage.setItem(
        "househub_refresh_token",
        data.refreshToken
      );
    }

    const nextUser = data.user;
    await syncUser(nextUser);

    return nextUser;
  };

  const logout = async () => {
    const refreshToken =
      localStorage.getItem("househub_refresh_token");

    try {
      await logoutService(refreshToken);
    } catch {
      // Local cleanup must still happen if the server session is gone.
    }

    clearStoredAuth();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
        refreshUser: syncUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
