import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Card.css";

const RootLayout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md bg-body-tertiary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNav}
              aria-expanded={isNavOpen ? "true" : "false"}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="d-flex align-items-center">
              <i className="bi bi-feather me-2 fs-2 text-success"></i>
              <h1 className="mb-0">L E A F</h1>
            </div>

            <div
              className={
                "collapse navbar-collapse" + (isNavOpen ? " show " : "")
              }
            >
              <div className="navbar-nav ms-4 fw-bolder nav-groups">
                <NavLink className="nav-link" activeclassname="active" to="/">
                  Home
                </NavLink>
                <NavLink
                  className="nav-link"
                  activeclassname="active"
                  to="/sports"
                >
                  Sports
                </NavLink>
                <NavLink
                  className="nav-link"
                  activeclassname="active"
                  to="/entertainment"
                >
                  Entertainment
                </NavLink>
                <NavLink
                  className="nav-link"
                  activeclassname="active"
                  to="/health"
                >
                  Health
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default RootLayout;
