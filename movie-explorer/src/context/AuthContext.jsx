import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Проверява дали има потребител в localStorage при първоначално зареждане
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (email, password) => {
    // Фалшив логин — тук можеш да замениш с реална проверка чрез API
    const demoUser = { email };
    localStorage.setItem("user", JSON.stringify(demoUser));
    setUser(demoUser);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};