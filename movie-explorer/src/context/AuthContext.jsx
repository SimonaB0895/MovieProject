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
    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));
  if (savedUser && savedUser.email === email && savedUser.password === password) {
    localStorage.setItem("user", JSON.stringify(savedUser));
    setUser(savedUser);
    return true;
  } else {
    alert("Невалиден имейл или парола");
    return false;
  }
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