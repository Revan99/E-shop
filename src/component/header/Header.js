import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

import logo from "../../assets/images/e-shop-logo.svg";

const Header = () => {
  return (
    <div className="header bg-primary-1 ">
      <Link to="/" className="header__logo">
        <img src={logo} alt="app logo" />
      </Link>
      <div>{true ? <userButton /> : <AuthButtons />}</div>
    </div>
  );
};

const AuthButtons = () => {};

const userButton = () => {};

export default Header;
