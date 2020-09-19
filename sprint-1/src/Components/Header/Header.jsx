import React from "react";
import "./header.scss";
import Logo from "../../assets/Logo/Logo-brainflix.svg";
import HeaderButton from "../HeaderButton/HeaderButton";

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <div className="nav__logo-container">
          <img
            className="nav__logo"
            src={Logo}
            alt="Navigation brainflix Logo"
          />
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
