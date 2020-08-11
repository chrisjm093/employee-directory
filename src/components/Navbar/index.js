import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/style.css";

function Navbar(){

  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Employee L<span role="img" alt="looking eyes">&#x1F440;</span>k Up
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to ="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/directory"
              ? "nav-link active"
              : "nav-link"
            }
          >
            Directory
          </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;