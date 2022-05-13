import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
      
    <nav className="navbar">
        <h3 className="logo">Logo</h3>
        <ul className="nav-links">
            <li><Link to="/" className="home">Home</Link></li>
            <li><Link to="/docs" className="docs">Docs</Link></li>
            <li><Link to="/demo" className="demo">Demo</Link></li>
            <li><Link to="/schema" className="gen_schema">GUI</Link></li>
        </ul>
    </nav>
  );
};

export default NavBar;
