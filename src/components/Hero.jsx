import React from 'react';
import './Hero.css';
import { ArrowDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import InteractiveCalligraphy from './InteractiveCalligraphy';

export default function Hero() {
  const { fullName, marathiName, title, tagline } = portfolioData.personalInfo;

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const element = document.querySelector('#projects');
    if (element) {
      const offset = 80;
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
    <section id="home" className="hero-section border-line-x">
      {/* Background Grid Lines representing old manuscript spacing */}
      <div className="hero-bg-lines">
        <div className="bg-col-line"></div>
        <div className="bg-col-line"></div>
        <div className="bg-col-line"></div>
      </div>

      {/* Tapering calligraphic lines canvas */}
      <InteractiveCalligraphy />

      <div className="hero-container container">
        <div className="hero-grid">
          {/* Left Column: Massive Editorial Typography */}
          <div className="hero-left-col">
            <div className="cultural-tag">
              <span className="devanagari-badge">CRAFT & CODE</span>
              <span className="cultural-slogan">Bridging Heritage & High Tech</span>
            </div>
            
            <h1 className="hero-main-title">
              <span className="hero-marathi-large">{marathiName}</span>
              <span className="hero-name-split">
                <span className="name-word font-sans">sakshi</span>
                <span className="name-word serif-italic">kore</span>
              </span>
            </h1>

            <div className="hero-title-bar">
              <span className="hero-role-title">{title}</span>
            </div>
          </div>

          {/* Right Column: Narrative Intro & Actions */}
          <div className="hero-right-col border-line-y">
            <div className="editorial-meta">
              <span>EDITION // 2026</span>
              <span>PUNE, IND</span>
            </div>

            <p className="hero-tagline">
              {tagline}
            </p>

            <p className="hero-desc">
              I specialize in frontend architecture and human-centered design. I treat interfaces as digital books—where layout structure, micro-animations, and clean typography combine to tell premium stories.
            </p>

            <div className="hero-actions">
              <a
                href="#projects"
                className="cta-btn border-line"
                onClick={handleScrollToProjects}
                data-cursor-text="EXPLORE"
              >
                <span>View My Work</span>
                <div className="cta-icon-holder">
                  <ArrowDown size={14} className="cta-icon" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
