import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  if (!user) return null; // Не показва navbar ако не е логнат

  return (
    <nav style={styles.nav}>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/movies" style={styles.link}>Movie Catalog</Link>
        <Link to="/profile" style={styles.link}>Profile</Link>
      </div>
      <div>
        <button onClick={logout} style={styles.button}>Logout</button>
        <span style={styles.user}>Welcome, {user.username}</span>
        
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    backgroundColor: "#222",
    color: "#fff"
  },
  link: {
    marginRight: "15px",
    textDecoration: "none",
    color: "#fff"
  },
  user: {
    marginRight: "10px"
  },
  button: {
    padding: "5px 10px",
    cursor: "pointer"
  }
};

export default Navbar;