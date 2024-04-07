import React from "react";

import "./Header.css";
import logo from "./assets/.gitignore.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar flex-row">
      <div className="flex-row">
        <Link to="/Main">
          <img src={logo} alt="logo"></img>
        </Link>
        <Link to="/History">History</Link>
        <Link to="/Help">Help</Link>
      </div>

      <Link to="/Login">Login</Link>
    </div>
  );
};

export default Header;
