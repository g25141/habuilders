import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>HA-Builders</h3>
            <p>
              Professional construction services with over 20 years of experience. 
              We deliver quality workmanship and exceptional customer service.
            </p>
            <div className="footer-contact">
              <p><strong>Phone:</strong> +44 7723058250</p>
              <p><strong>Email:</strong> info@ha-builders.co.uk</p>
              <p><strong>Address:</strong> 156 Cippenham Lane, Slough, England, SL1 5BA</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/house-extensions">House Extensions</Link></li>
              <li><Link to="/services/loft-conversions">Loft Conversions</Link></li>
              <li><Link to="/services/garage-conversions">Garage Conversions</Link></li>
              <li><Link to="/services/property-refurbishments">Property Refurbishments</Link></li>
              <li><Link to="/services/outdoor-living">Outdoor Living</Link></li>
              <li><Link to="/services/roof-renovation">Roof Renovation</Link></li>
              <li><Link to="/services/landscaping">Landscaping Services</Link></li>
              <li><Link to="/services/kitchens">Kitchens</Link></li>
              <li><Link to="/services/bathrooms">Bathrooms</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">All Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
            <div className="footer-hours">
              <h5>Business Hours</h5>
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 HA-Builders. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
