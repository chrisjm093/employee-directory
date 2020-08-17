import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/style.css";

function Navbar(){

  return(
    <nav className="navbar navbar-expand-lg text-center strong font-weight-bold">
      <Link className="navbar-brand" to="/">
        Employee L<span role="img" aria-label="looking eyes">&#x1F440;</span>k Up
      </Link>
    </nav>
  );
}

export default Navbar;