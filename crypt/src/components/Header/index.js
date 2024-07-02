import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Crypto Tracker</h1>
      <nav className="nav-bar">
        <Link className="link-text" to="/">
          Home
        </Link>
        <Link className="link-text" to="/converter">
          Converter
        </Link>
      </nav>
    </header>
  );
};

export default Header;
