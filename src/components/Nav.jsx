import React from 'react';
import { Link } from "react-router-dom";
import '../App.css'

const Nav = () => {
    const colorSyle = {
        color: 'white'
    }
    return (
      <nav>
        <ul className="nav-links">
          <Link style={colorSyle} to="/">
            <li>Home</li>
          </Link>
          <Link style={colorSyle} to="/about">
            <li>About</li>
          </Link>
          <Link style={colorSyle} to="/news">
            <li>News</li>
          </Link>
        </ul>
      </nav>
    );
}
 
export default Nav;
