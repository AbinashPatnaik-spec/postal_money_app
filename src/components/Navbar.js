import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-danger" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <i class="bi bi-envelope-fill"></i> {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/transaction">
                Transaction
              </Link>
            </li>
          </ul>
          <span className="navbar-text text-light">
            Copyright &copy;MPostal 2025. By Abinash Patnaik
          </span>
        </div>
      </div>
    </nav>
  );
}
