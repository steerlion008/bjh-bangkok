import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <section className="footer-info-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img 
              src={process.env.PUBLIC_URL + '/images/banners/bjh-logo-footer.png'}
              alt="BJH Bangkok"
            />
          </div>
          <div className="footer-details">
            <h3>BJH BANGKOK</h3>
            <p className="hours">Open daily from 10.00 AM - 8.00 PM</p>
            <p className="label">Call Center</p>
            <div className="phone-numbers">
              <a href="tel:020954799">02-095-4799</a>
              <a href="tel:0864114262">086-411-4262</a>
            </div>
            <p className="label">Follow us</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/bjhbangkok" className="social-icon" target="_blank" rel="noopener noreferrer">f</a>
              <a href="https://www.instagram.com/bjhbangkok" className="social-icon" target="_blank" rel="noopener noreferrer">in</a>
              <a href="https://www.youtube.com/@BJHBangkok" className="social-icon" target="_blank" rel="noopener noreferrer">▶</a>
            </div>
            <a href="/about" className="more-info-btn">MORE INFO ›</a>
            <p className="clinic-name">คลินิกบีเจเอช กรุงเทพ</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
