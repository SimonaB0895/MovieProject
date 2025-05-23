import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Здравей, {user?.email}!</h1>
      <p>Използвай менюто, за да разгледаш разнообразието от филми.</p>
    </div>
  );
}

export default Home;