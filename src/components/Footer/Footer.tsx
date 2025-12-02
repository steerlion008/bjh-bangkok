import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/images/logo/bjh-logo.png" alt="BJH Bangkok" className="footer-logo-image" />
            </Link>
            <p className="footer-license">ฆสพ.สบส : ๔๖๒๗ / ๒๕๖๘</p>
            
            <div className="footer-hours">
              <h4>Open daily from 11:00 AM - 8:00 PM</h4>
            </div>

            <div className="footer-contact-info">
              <h4>Call Center</h4>
              <p><a href="tel:020954799">02-095-4799</a></p>
              <p><a href="tel:0864114262">086-411-4262</a></p>
            </div>

            <div className="footer-social">
              <span>Follow Us :</span>
              <a href="https://www.facebook.com/bjhbangkok" target="_blank" rel="noopener noreferrer" className="social-link">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/bjh.bangkok" target="_blank" rel="noopener noreferrer" className="social-link">
                <Instagram size={18} />
              </a>
              <a href="https://www.tiktok.com/@bjhbangkok" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Our Services</h4>
              <ul>
                <li><Link to="/eye-surgery">Eye Surgery</Link></li>
                <li><Link to="/rhinoplasty">Rhinoplasty</Link></li>
                <li><Link to="/facelift">Facelift</Link></li>
                <li><Link to="/pterygium">Pterygium</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>@2024 BJH BANGKOK</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
