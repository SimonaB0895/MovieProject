import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; 

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { email, password, username };
    localStorage.setItem("registeredUser", JSON.stringify(newUser));
    navigate("/login");
  };

  return (
    <div
      className="register-page"
      style={{
        backgroundImage: `url('/avengers.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center left",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: "5%",
        
      }}
    >
    <div className="register-form-container">
        <div className="login-form">
          <h2 className="text">Sign up to Movie Explorer</h2>
          {<form onSubmit={handleSubmit}>
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
        <button type="submit">Sign Up</button>
      </form>}
        </div>
      </div>
    </div>
    
  );
}

export default Register;