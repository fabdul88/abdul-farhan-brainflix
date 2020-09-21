import React from "react";
import "./header.scss";
import Logo from "../../assets/Logo/Logo-brainflix.svg";
import HeaderButton from "../HeaderButton/HeaderButton";
import "../../styles/partials/_mediaQuery.scss";
const Header = () => {
  return (
    <header>
      <nav className="nav">
        <div className="nav__logo-container">
          <a className="nav__logo-link" href="../../Index.js">
            <img
              className="nav__logo"
              src={Logo}
              alt="Navigation brainflix Logo"
            />
          </a>
        </div>
        <div className="nav__search-container">
          <input className="nav__search" type="search" placeholder="Search" />
        </div>
        <HeaderButton />
      </nav>
    </header>
  );
};

export default Header;
