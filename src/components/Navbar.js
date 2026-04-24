import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>My Portfolio</h2>
      <div>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/projects" className="nav-link">Projects</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;