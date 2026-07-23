import React, { useState, useEffect } from 'react';
import { Menu, X, Feather, Sparkles, Type } from 'lucide-react';
import './Navbar.css';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ currentVibe, setVibe }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { monogram, marathiName, fullName } = portfolioData.personalInfo;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Connect", href: "#contact" }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo Monogram branding */}
        <a href="#home" className="nav-logo-group" onClick={(e) => handleLinkClick(e, '#home')}>
          <div className="logo-seal">
            <span className="logo-devanagari">{monogram}</span>
          </div>
          <div className="logo-text">
            <span className="logo-english">{fullName.toLowerCase()}</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="nav-menu-desktop">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}

          {/* Vibe Switcher Strip */}
          <div className="vibe-switcher-strip border-line">
            <button
              className={`vibe-btn ${currentVibe === 'editorial' ? 'active' : ''}`}
              onClick={() => setVibe('editorial')}
              title="Editorial Vibe"
              data-cursor-text="EDITORIAL"
            >
              <Feather size={14} />
              <span className="vibe-btn-text">Editorial</span>
            </button>
            
            <button
              className={`vibe-btn ${currentVibe === 'obsidian' ? 'active' : ''}`}
              onClick={() => setVibe('obsidian')}
              title="Modern Obsidian Vibe"
              data-cursor-text="OBSIDIAN"
            >
              <Sparkles size={14} />
              <span className="vibe-btn-text">Obsidian</span>
            </button>
            
            <button
              className={`vibe-btn ${currentVibe === 'minimal' ? 'active' : ''}`}
              onClick={() => setVibe('minimal')}
              title="Minimal Carbon Vibe"
              data-cursor-text="CARBON"
            >
              <Type size={14} />
              <span className="vibe-btn-text">Carbon</span>
            </button>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="nav-mobile-controls">
          <button
            onClick={() => {
              const vibes = ['editorial', 'obsidian', 'minimal'];
              const nextIdx = (vibes.indexOf(currentVibe) + 1) % vibes.length;
              setVibe(vibes[nextIdx]);
            }}
            className="theme-toggle-btn mobile-theme-btn"
            aria-label="Cycle Vibe"
            title="Cycle Active Vibe"
          >
            {currentVibe === 'editorial' && <Feather size={18} />}
            {currentVibe === 'obsidian' && <Sparkles size={18} />}
            {currentVibe === 'minimal' && <Type size={18} />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`nav-menu-mobile ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="mobile-nav-link"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          
          {/* Mobile Vibe Info Indicator */}
          <div className="mobile-vibe-info border-line">
            <span className="mobile-vibe-label">Active Vibe //</span>
            <span className="mobile-vibe-val">{currentVibe.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
