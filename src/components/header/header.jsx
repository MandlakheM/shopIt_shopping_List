import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Shop it</div>
      <div className="userInfo">
        <p>Name: </p>
        <p>Surname: </p>
      </div>
    </header>
  );
}

export default Header;
