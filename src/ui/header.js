import React from "react";
import { Link } from "react-router-dom";

import Login from "./header_login";

const Header = () => (
  <header>
    <div className="header-container">
      <div className="header-title">
        <Link to="/news" title="Перейти на главную">
          <i className="fas fa-home" />
          <b>Главная</b>
        </Link>
      </div>
      <Login />
    </div>
  </header>
);

export default Header;
