import React from "react";
import { NavLink, Outlet } from "react-router-dom";
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
            <div className="d-flex align-items-center">
              <h1 className="mb-0 me-auto fw-bolder">L E A F</h1>{" "}
              <i className="bi bi-feather me-2 fs-2 text-success"></i>
            </div>

            <button
              className="navbar-toggler ms-auto text-success"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
            >
              <span>
                <i className="bi bi-list-nested"></i>
              </span>
            </button>

            <div
              className="offcanvas offcanvas-end "
              tabIndex="-1"
              id="offcanvasNavbar"
            >
              <div className="offcanvas-header">
                <div className="d-flex align-items-center">
                  <h1 className="mb-0 me-auto">L E A F</h1>{" "}
                  <i className="bi bi-feather me-2 fs-2 text-success"></i>
                </div>
              </div>
              <div className="offcanvas-body ">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bolder">
                  <li className="nav-item ">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/"
                      exact
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/sports"
                    >
                      Sports
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/entertainment"
                    >
                      Entertainment
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active"
                      to="/health"
                    >
                      Health
                    </NavLink>
                  </li>
                </ul>
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
