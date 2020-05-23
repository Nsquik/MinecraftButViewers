import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <ul className="navbar__list">
      <li className="navbar__item">
        <Link className="link" to="/summon">
          MOBY
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="link" to="/effect">
          EFEKTY
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="link" to="/sound">
          DZWIĘKI
        </Link>
      </li>
      {/* <li className="navbar__item">
        <Link className="link" to="/misc">
          INNE
        </Link>
      </li> */}
    </ul>
  );
};

export default Navbar;
