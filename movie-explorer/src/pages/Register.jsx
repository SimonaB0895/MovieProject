import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const handleRegister = (e) => {
  //   e.preventDefault();

  //   // Можеш да добавиш fetch за запазване в JSON Server тук
  //   console.log("Регистрация:", email, password);

  //   navigate("/"); // Пренасочва към login
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { email, password };
    localStorage.setItem("registeredUser", JSON.stringify(newUser));
    navigate("/login");
  };

  return (//{handleRegister}>
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;