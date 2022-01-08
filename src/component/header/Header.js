import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Button from "../button/Button";

import "./header.css";

import logo from "../../assets/images/e-shop-logo.svg";

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  console.log(location);
  return (
    <div className="header bg-primary-1 ">
      <Link to="/" className="header__logo w-20 h-5">
        <img src={logo} alt="app logo" className="w-full h-full " />
      </Link>
      {location.pathname === "/" && (
        <div className="flex gap-3">
          <Button
            text="Create store"
            backgroundColor="bg-secondary-2"
            onClick={() => history.push("/create-store")}
          />
          <Button
            text="Stores table"
            backgroundColor="bg-secondary-2"
            onClick={() => history.push("/stores-table")}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
