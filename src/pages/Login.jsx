import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "./Login.css";


function Login() {
  const [username, setUsername] = useState(""); /////////////
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    /*login(email, password);  // Извиква login от контекста
    navigate("/");*/
    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (savedUser && savedUser.email === email && savedUser.password === password) {
      login(email, password);
      navigate("/");
    } else {
      alert("Невалиден имейл или парола. Опитайте отново.");
    }
  };

  return (
  // <div className="login-form">
  //   <div className="login-image"></div>
  //     <div className="text">Login</div>
  //     <form onSubmit={handleSubmit}>
  //       <div className="field">
  //         <input
  //           type="email"
  //           placeholder="Email"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //           required
  //         />
  //       </div>
  //       <div className="field">
  //         <input
  //           type="password"
  //           placeholder="Password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //           required
  //         />
  //       </div>
  //       <button type="submit">Login</button>
  //       <div className="link">
  //         No account? <Link to="/register">Register here</Link>
  //       </div>
  //     </form>
  //   </div>
  <div className="login-page">
      <div className="login-form-container">
        <div className="login-form">
          <div className="text">Sign In to Movie Explorer</div>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="field">
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="field">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Sign In</button>
            <div className="link">
              No account? <Link to="/register">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;