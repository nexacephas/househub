import { createContext, useContext, useEffect, useState } from "react";
import { login as loginService } from "../services/auth.service";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("househub_token");
    const savedUser = localStorage.getItem("househub_user");

    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
    }

    setLoading(false);
  }, []);

  const login = async (credentials) => {
    const { data } = await loginService(credentials);

    localStorage.setItem("househub_token", data.token);
    localStorage.setItem(
      "househub_user",
      JSON.stringify(data.user)
    );

    setUser(data.user);

    return data.user;
  };

  const logout = () => {
    localStorage.removeItem("househub_token");
    localStorage.removeItem("househub_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);