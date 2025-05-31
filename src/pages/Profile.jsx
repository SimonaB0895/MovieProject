import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Profile.css";

function Profile() {
  const { user } = useContext(AuthContext);

  if (!user) return <p>No active user</p>;

  return (
    <div className="profile-container">
      <h2>Профил</h2>
      <p>User name: {user.username}</p>
      <p>E-mail: {user.email}</p>
    </div>
  );
}

export default Profile;
