import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: 'Calculator', text: 'Calculator' },
  { path: 'Quote', text: 'Quote' },
];

const Navbar = () => (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container">
      <a className="navbar-brand" href="/">
        Mathematicians
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {links.map((link) => (
            <li className="nav-item" key={link.text}>
              <NavLink className="nav-link" to={link.path}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
