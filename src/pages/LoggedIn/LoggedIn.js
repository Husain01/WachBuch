import React from "react";
import Aside from "../../components/Aside/Aside";
import "./LoggedIn.css";

const LoggedIn = () => {
  return (
    <div className="content-container">
        <Aside></Aside>
      <main className="main-content">
        <h2 className="loggedIn-heading ">You are already Logged in</h2>
      </main>
    </div>
  );
};

export default LoggedIn;