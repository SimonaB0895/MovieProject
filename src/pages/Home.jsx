import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Home.css";


function Home() {
  const { user } = useContext(AuthContext);

  return (
     <div className="home-container">
      <h1>Hello, {user?.username|| user?.email}!</h1>
      <p>Use the Catalog to see the variety of movies.</p>
    </div>
  );
}

export default Home;