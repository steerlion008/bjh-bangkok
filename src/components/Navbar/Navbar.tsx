import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  const services = [
    { name: 'Eye Surgery', nameTh: 'ศัลยกรรมตา', path: '/eye-surgery' },
    { name: 'Rhinoplasty', nameTh: 'ศัลยกรรมจมูก', path: '/rhinoplasty' },
    { name: 'Facelift', nameTh: 'ศัลยกรรมดึงหน้า', path: '/facelift' },
    { name: 'Pterygium', nameTh: 'ต้อเนื้อ', path: '/pterygium' },
  ];

  const languages = [
    { code: 'th', flag: '🇹🇭' },
    { code: 'en', flag: '🇬🇧' },
    { code: 'zh', flag: '🇨🇳' },
    { code: 'lo', flag: '🇱🇦' },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <img src={process.env.PUBLIC_URL + "/images/logo/bjh-logo.png"} alt="BJH Bangkok" className="logo-image" />
          </Link>

          {/* License Number */}
          <div className="nav-license desktop-only">
            <span>ฆสพ.สบส : ๔๖๒๗ / ๒๕๖๘</span>
          </div>

          {/* Desktop Navigation */}
          <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <div className="mobile-header">
              <Link to="/" className="mobile-logo">
                <span className="logo-bjh">BJH</span>
                <span className="logo-bangkok">Bangkok</span>
              </Link>
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <Link to="/" className="navbar-link">HOME</Link>
            <Link to="/about" className="navbar-link">ABOUT US</Link>
            
            <div 
              className="navbar-dropdown"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <span className="navbar-link dropdown-trigger" onClick={() => setServicesOpen(!servicesOpen)}>
                OUR SERVICE <ChevronDown size={16} />
              </span>
              <div className={`dropdown-menu ${servicesOpen ? 'show' : ''}`}>
                {services.map((service, index) => (
                  <Link key={index} to={service.path} className="dropdown-item">
                    <span className="service-en">{service.name}</span>
                    <span className="service-th">{service.nameTh}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Language Selector */}
            <div className="language-selector">
              {languages.map((lang) => (
                <button key={lang.code} className="lang-btn">
                  <span>{lang.flag}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && <div className="nav-overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default Navbar;
