import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Profile.css"; 


function Profile() {
  const { user } = useContext(AuthContext);

  if (!user) return <p>Няма активен потребител</p>;

  return (
     <div className="profile-container">
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
      <p>E-mail: {user.email}</p>
    </div>
  );
}

export default Profile;