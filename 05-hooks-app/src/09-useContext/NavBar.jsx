import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary rounded-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          useContext
        </Link>

        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "activeLink" : ""}`
              }
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "activeLink" : ""}`
              }
              to="about"
            >
              About
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "activeLink" : ""}`
              }
              to="login"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
