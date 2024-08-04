import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        Stock Analysis Platform
      </div>
      <ul className="nav-links">
        <li><NavLink exact to="/" activeClassName="active-link">Home</NavLink></li>
        <li><NavLink to="/stock" activeClassName="active-link">Stock</NavLink></li>
        <li><NavLink to="/sector" activeClassName="active-link">Sector</NavLink></li>
        <li><NavLink to="/learn" activeClassName="active-link">Learn</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
