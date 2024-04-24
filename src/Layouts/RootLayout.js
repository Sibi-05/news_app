import React, { NavLink, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Card.css";

const RootLayout = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md bg-body-tertiary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="d-flex align-items-center">
              <i className="bi bi-feather me-2 fs-2 text-success"></i>
              <h1 className="mb-0">L E A F</h1>
            </div>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
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
