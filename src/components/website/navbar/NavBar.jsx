import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
      <div className="nav_img">
        <nav className="navBarContainer">
        <nav className="navbar">
          <h3 className="logo">Logo</h3>
          <ul className="nav-links">
            <li> 
              <Link to="/" className="home">
                Home
              </Link>
            </li>
            <li>
              <Link to="/docs" className="docs">
                Docs
              </Link>
            </li>
            <li>
              <Link to="/demo" className="demo">
                Demo
              </Link>
            </li>
            <li>
              <button className="button">
              <Link to="/schema" className="gen_schema">
                Generate Schema
              </Link>
              </button>
            </li>
          </ul>
        </nav>
      </nav>
    </div>
  );
};

export default NavBar;
