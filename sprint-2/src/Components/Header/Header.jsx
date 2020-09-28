import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import Logo from "../../assets/Logo/Logo-brainflix.svg";
import HeaderButton from "../HeaderButton/HeaderButton";
import "../../styles/partials/_mediaQuery.scss";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="nav">
          <div className="nav__logo-container">
            <Link to="/">
              <img
                className="nav__logo"
                src={Logo}
                alt="Navigation brainflix Logo"
              />
            </Link>
          </div>
          <div className="nav__search-container">
            <input className="nav__search" type="search" placeholder="Search" />
          </div>
          <HeaderButton />
        </nav>
      </header>
    );
  }
}

export default Header;
