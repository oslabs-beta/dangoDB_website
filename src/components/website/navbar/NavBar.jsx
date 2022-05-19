import React from 'react';
import { Link } from 'react-router-dom';
import dangoDeno from '../../../assets/dango_deno.png';


// Navbar container with linked routes
const NavBar = () => {
  return (
    <nav className="navBarContainer">
      <nav className="navbar">
        <div className="nav-title">
          <a href="#/">
            <img id="dangoDB-logo" src={dangoDeno} alt="dangoDB icon" />
          </a>
          <a href="#/">
            <h3 className="logo">dangoDB</h3>
          </a>
        </div>
        
        <ul className="nav-links">
          <li> 
            <Link to="/" className="home">
              Home
            </Link>
          </li>
          <li>
            <button className="schema_btn">
              <Link to="/schema" className="gen_schema">
              Generate Schema
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </nav>
  
  );
};

export default NavBar;
