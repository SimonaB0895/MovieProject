import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Home.css";


function Home() {
  const { user } = useContext(AuthContext);

  return (
     <div className="home-container">
      <h1>Здравей, {user?.username|| user?.email}!</h1>
      <p>Използвай менюто, за да разгледаш разнообразието от филми.</p>
    </div>
  );
}

export default Home;