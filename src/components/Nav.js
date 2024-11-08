import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="nav-logo">
            <Link to="/">Finsweet</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" className="nav-item ">
                Blog
              </Link>
            </li>

            
              <li>
                <Link to="/about" className="nav-item">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-item">
                  Contact Us
                </Link>
              </li>
        
        
            <li>
              <Link  className="nav-item cart-btn">
                Subscribe
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
