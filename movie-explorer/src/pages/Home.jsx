import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Добре дошъл, {user?.email}!</h1>
      <p>Използвай менюто, за да разгледаш филмите или профила си.</p>
    </div>
  );
}

export default Home;