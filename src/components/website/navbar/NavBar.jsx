import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
      
    <nav className="navbar">
        <h3 className="logo">Logo</h3>
        <ul className="nav-links">
            <Link to="/" className="home">
                <li>Home</li>
            </Link>
            <Link to="/docs" className="docs"> 
                <li>Docs</li> 
            </Link>
            <Link to="/demo" className="demo"> 
                <li>Demo</li> 
            </Link>
            <Link to="/generate" className="gen_schema"> 
                <li>Generate Schema</li> 
            </Link>
        </ul>
    </nav>
  );
};

export default NavBar;
