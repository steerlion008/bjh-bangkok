"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import "./Header.css";

// Navigation items matching bjhbangkok.com
const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about-philosophy" },
  { 
    label: "OUR SERVICE", 
    href: "/our-services",
    submenu: [
      { label: "ศัลยกรรมตา", href: "/EyeSurgery" },
      { label: "ศัลยกรรมจมูก", href: "/Rhinoplasty" },
      { label: "ศัลยกรรมดึงหน้า", href: "/Facelift" },
      { label: "ศัลยกรรมต้อเนื้อ", href: "/Pterygium" },
    ]
  },
];

// Language options matching bjhbangkok.com
const languages = [
  { code: "th", label: "th" },
  { code: "zh-TW", label: "zh-TW" },
  { code: "en", label: "en" },
  { code: "lo", label: "lo" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("th");
  const pathname = usePathname();
  const langRef = useRef<HTMLDivElement>(null);
  const submenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleSubmenuEnter = (label: string) => {
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current);
    }
    setActiveSubmenu(label);
  };

  const handleSubmenuLeave = () => {
    submenuTimeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 150);
  };

  return (
    <>
      <header className={`bjh-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="bjh-header-container">
          {/* Left side - Hamburger menu */}
          <div className="header-left">
            <button 
              className="menu-toggle" 
              onClick={toggleMenu}
              aria-label="Open mobile menu"
            >
              <span className="menu-toggle-line"></span>
              <span className="menu-toggle-line"></span>
              <span className="menu-toggle-line"></span>
            </button>
          </div>

          {/* Center - Logo */}
          <div className="header-center">
            <Link href="/" className="logo-link" aria-label="Go to homepage">
              <Image
                src="/images/logo/bjh-logo.png"
                alt="BJH Bangkok"
                width={60}
                height={60}
                className="logo-image"
                priority
              />
            </Link>
          </div>

          {/* Right side - License number */}
          <div className="header-right">
            <span className="license-text">ฆสพ.สบส : ๔๖๒๗ / ๒๕๖๘</span>
          </div>
        </div>

        {/* Navigation bar */}
        <nav className="bjh-nav">
          <div className="bjh-nav-container">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li 
                  key={item.label} 
                  className={`nav-item ${item.submenu ? "has-submenu" : ""}`}
                  onMouseEnter={() => item.submenu && handleSubmenuEnter(item.label)}
                  onMouseLeave={handleSubmenuLeave}
                >
                  {item.submenu ? (
                    <>
                      <Link
                        href={item.href}
                        className={`nav-link ${pathname === item.href ? "active" : ""}`}
                      >
                        {item.label}
                        <Icon 
                          icon="mdi:chevron-down" 
                          className={`chevron ${activeSubmenu === item.label ? "rotate" : ""}`}
                        />
                      </Link>
                      <div 
                        className={`submenu ${activeSubmenu === item.label ? "open" : ""}`}
                        onMouseEnter={() => handleSubmenuEnter(item.label)}
                        onMouseLeave={handleSubmenuLeave}
                      >
                        {item.submenu.map((sub) => (
                          <Link 
                            key={sub.href} 
                            href={sub.href} 
                            className="submenu-link"
                            onClick={() => setActiveSubmenu(null)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link 
                      href={item.href} 
                      className={`nav-link ${pathname === item.href ? "active" : ""}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Language Switcher */}
            <div className="lang-switcher" ref={langRef}>
              <button 
                className="lang-toggle"
                onClick={() => setIsLangOpen(!isLangOpen)}
              >
                <span>{currentLang}</span>
                <Icon 
                  icon="mdi:chevron-down" 
                  className={`chevron ${isLangOpen ? "rotate" : ""}`}
                />
              </button>
              <div className={`lang-dropdown ${isLangOpen ? "open" : ""}`}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`lang-option ${currentLang === lang.code ? "active" : ""}`}
                    onClick={() => {
                      setCurrentLang(lang.code);
                      setIsLangOpen(false);
                    }}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Panel */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <Link href="/" className="mobile-logo" onClick={closeMenu}>
            <Image
              src="/images/logo/bjh-logo.png"
              alt="BJH Bangkok"
              width={50}
              height={50}
              className="logo-image"
            />
          </Link>
          <button 
            className="mobile-menu-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <Icon icon="mdi:close" fontSize={28} />
          </button>
        </div>

        <nav className="mobile-nav">
          {navItems.map((item) => (
            <div key={item.label} className="mobile-nav-item">
              {item.submenu ? (
                <details className="mobile-submenu-details">
                  <summary className="mobile-nav-link">
                    {item.label}
                    <Icon icon="mdi:chevron-down" className="mobile-chevron" />
                  </summary>
                  <div className="mobile-submenu">
                    {item.submenu.map((sub) => (
                      <Link 
                        key={sub.href} 
                        href={sub.href} 
                        className="mobile-submenu-link"
                        onClick={closeMenu}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link 
                  href={item.href} 
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Language Switcher */}
        <div className="mobile-lang-section">
          <span className="mobile-lang-label">Language</span>
          <div className="mobile-lang-options">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`mobile-lang-btn ${currentLang === lang.code ? "active" : ""}`}
                onClick={() => setCurrentLang(lang.code)}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Contact Info */}
        <div className="mobile-contact">
          <div className="mobile-contact-item">
            <Icon icon="mdi:phone" />
            <div>
              <span className="contact-label">Call Center</span>
              <a href="tel:020954799">02-095-4799</a>
              <a href="tel:0864114262">086-411-4262</a>
            </div>
          </div>
          <div className="mobile-contact-item">
            <Icon icon="mdi:clock-outline" />
            <div>
              <span className="contact-label">Open daily</span>
              <span>11:00 AM - 8:00 PM</span>
            </div>
          </div>
        </div>

        {/* Mobile Social Links */}
        <div className="mobile-social">
          <a
            href="https://www.facebook.com/bjhbangkok"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <Icon icon="ic:baseline-facebook" fontSize={24} />
          </a>
          <a
            href="https://www.instagram.com/bjh.bangkok"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <Icon icon="mdi:instagram" fontSize={24} />
          </a>
          <a
            href="https://www.tiktok.com/@bjhbangkok"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
          >
            <Icon icon="mdi:tiktok" fontSize={24} />
          </a>
          <a
            href="https://lin.ee/D9KIJyb"
            target="_blank"
            rel="noreferrer"
            aria-label="Line"
          >
            <Icon icon="simple-icons:line" fontSize={22} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
