import React, { useState, useEffect } from 'react';
import './Hero.css';
import { ArrowDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import InteractiveCalligraphy from './InteractiveCalligraphy';

const nameLanguages = [
  "साक्षी कोरे",     // Devanagari (Marathi/Hindi/Sanskrit)
  "サクシ・コレ",    // Japanese (Katakana)
  "સાક્ષી કોરે",     // Gujarati
  "사쿠시 코레",     // Korean (Hangul)
  "சாக்ஷி கோரே",     // Tamil
  "萨克希·科雷",     // Chinese (Hanzi)
  "సాక్షి కోరె",     // Telugu
  "Сакши Коре",     // Russian (Cyrillic)
  "ಸಾಕ್ಷಿ ಕೋರೆ",     // Kannada
  "Σάκσι Κόρε",     // Greek
  "সাক্ষী কোরে",     // Bengali
  "ਸਾਕਸ਼ੀ ਕੋਰੇ",     // Punjabi (Gurmukhi)
  "ศักดิ์ศรี โคเร"   // Thai
];

export default function Hero() {
  const { fullName, title, tagline } = portfolioData.personalInfo;
  const [currentName, setCurrentName] = useState(nameLanguages[0]);
  const [nextName, setNextName] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % nameLanguages.length;
      setNextName(nameLanguages[nextIndex]);
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentName(nameLanguages[nextIndex]);
        setIsTransitioning(false);
        index = nextIndex;
      }, 800); // aligns with slide transition duration (800ms)
    }, 3500);

    return () => clearInterval(interval);
  }, []);

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
              <span className="cultural-slogan">Interfacing Code, Design & AI</span>
            </div>
            
            <h1 className="hero-main-title">
              <div className="name-roller-container">
                <span className={`name-script-roller ${isTransitioning ? 'slide-out' : ''}`}>
                  {currentName}
                </span>
                {isTransitioning && (
                  <span className="name-script-roller slide-in">
                    {nextName}
                  </span>
                )}
              </div>
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
              <span>MUMBAI, IND</span>
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
