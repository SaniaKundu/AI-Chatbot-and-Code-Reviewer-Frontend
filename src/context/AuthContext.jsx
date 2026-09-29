import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Restore login after page refresh
  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (token && savedUser) {
      try {
        const userData = JSON.parse(savedUser);

        setUser({
          ...userData,
          token,
        });
      } catch (error) {
        console.error("Error restoring user:", error);

        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
      }
    }
  }, []);

  // Login
  const login = (token, userData) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));

    setUser({
      ...userData,
      token,
    });
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isLoggedIn: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};