import React from "react";
import AuthButton from "./AuthButton";
import ServerStatus from "./ServerStatus";
import "./Header.scss";
import peepo from "../../img/peepo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <div className="header__logo-img">
          <img src={peepo} alt="peepo" />
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
