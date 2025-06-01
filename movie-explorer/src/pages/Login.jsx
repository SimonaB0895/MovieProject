import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (savedUser && savedUser.email === email && savedUser.password === password) {
      login(email, password);
      navigate("/");
    } else {
      alert("Невалиден имейл или парола. Опитайте отново.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <h2>Вход</h2>
    <input
      type="email"
      placeholder="Имейл"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
    <input
      type="password"
      placeholder="Парола"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <button type="submit">Влез</button>
    <p>Нямаш акаунт? <Link to="/register">Регистрирай се</Link></p>
  </form>
  );
}

export default Login;