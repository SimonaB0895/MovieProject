import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";


function Navbar() {
  const { user, logout } = useContext(AuthContext);

  if (!user) return null; // Не показва navbar ако не е логнат

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">Home</Link>
        <Link to="/movies">Movie Catalog</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <div className="navbar-right">
        <span className="navbar-user">{user.username || user.email}</span>
        <button onClick={logout} className="navbar-button">Logout</button>
      </div>
    </nav>
  );
}


export default Navbar;