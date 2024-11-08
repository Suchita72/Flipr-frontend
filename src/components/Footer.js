import React from 'react'
import { Link } from 'react-router-dom'

import fb from '../fb.svg'
import insta from '../insta.svg'
import twitter from '../twitter.svg'
import linkdin from '../linkdin.svg'
const Footer = () => {
  return (
    <div style={{backgroundColor:"black"
    }} >
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
                <Link to="/privacy" className="nav-item">
                Privacy Policy
                </Link>
              </li>

          </ul>
        </nav>
      </header>
    </div>
    <div className="subscribe-container">
  <div className="subscribe-content">
    <p>Subscribe to our newsletter for the latest updates and offers!</p>
  </div>
  <div className="subscribe-form">
    <input type="email" placeholder="Enter your email" className="email-input" />
    <button className="subscribe-button">Subscribe</button>
  </div>
</div>

 <div className="footer-container"> 

  <div className="footer-left">
    <p>Finstreet 118, 2561 Fintown</p>
    <p>Email: info@finstreet.com</p>
  </div>
  

  <div className="footer-right">
   
      <img src={fb} />
  
      <img src={twitter} />
    
      <img src={insta}/>
      <img src={linkdin}/>
    
  </div>
</div>

</div>

    
  )
}

export default Footer
