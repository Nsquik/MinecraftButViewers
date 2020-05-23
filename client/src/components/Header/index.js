import React from "react";
import AuthButton from "./AuthButton";
import ServerStatus from "./ServerStatus";
import "./Header.scss";
import peepo from "../../img/peepo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <div className="header__logo-img">
          <Link to="/">
            <img src={peepo} alt="peepo" />
          </Link>
        </div>
        <div className="header__logo-text">widzowie kontrolują świat monkkaS</div>
      </div>
      <div className="header__status">
        <ServerStatus />
        <AuthButton />
      </div>
    </header>
  );
};

export default Header;
