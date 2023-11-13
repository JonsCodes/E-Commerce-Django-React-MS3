import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper";

const UserDashboard = () => {
  // Get the user object from authentication
  const { user } = isAuthenticated();

  return (
    <Base title="User Profile">
      <div className="Profile-container">
      <header className="welcome">Welcome <b>{user.name}</b></header>
      <h1>This is your personal dashboard page</h1>
      <div className="under-construction">
      "Whoa, whoa, whoa! This joint's under construction. The crew's hustlin', gears are grindin', and something big's cookin'. But heads up – the cops are close. Sit tight, we'll be back with the grand reveal. Thanks for your patience, wise guy!"
      </div>
      </div>
    </Base>
  );
};

export default UserDashboard;