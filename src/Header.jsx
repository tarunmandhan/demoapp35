import React from "react";
import logo1 from "./Images/logo1.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo1} alt="logo" width="60" height="60" className="logo" />
        <h1>Tarun Notes</h1>
      </div>
    </>
  );
};

export default Header;
