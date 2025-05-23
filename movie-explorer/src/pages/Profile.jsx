import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { user } = useContext(AuthContext);

  if (!user) return <p>Няма активен потребител</p>;

  return (
    <div>
      <h2>Профил</h2>
      <p>Имейл: {user.email}</p>
    </div>
  );
}

export default Profile;