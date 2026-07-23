import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [vibe, setVibe] = useState(() => {
    const saved = localStorage.getItem('sakshi-vibe');
    if (saved) return saved;
    return 'editorial';
  });

  const { fullName, marathiName, monogram } = portfolioData.personalInfo;

  useEffect(() => {
    document.documentElement.setAttribute('data-vibe', vibe);
    document.documentElement.setAttribute('data-theme', vibe === 'obsidian' ? 'dark' : 'light');
    localStorage.setItem('sakshi-vibe', vibe);
  }, [vibe]);

  // Scroll to top helper
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Set up the generic IntersectionObserver for entrance reveal animations
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.05 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  return (
    <div className="app-layout">
      {/* Premium custom mouse trailing cursor */}
      <CustomCursor />

      {/* Editorial Sticky Header Navigation */}
      <Navbar currentVibe={vibe} setVibe={setVibe} />

      {/* Main Core Sections */}
      <main>
        <Hero />
        <About />
        <Experience />
        <EducationSplitPlaceholder />
        <Projects />
        <Skills />
        <Achievements />
        <Resume />
        <Contact />
      </main>

      {/* Editorial layout footer */}
      <footer className="footer-editorial border-line-x">
        <div className="container footer-container">
          <div className="footer-left">
            <div className="footer-monogram">{monogram}</div>
            <div className="footer-text">
              <span className="footer-name-english">Sakshi Kore</span>
              <span className="footer-copyright">
                © {new Date().getFullYear()} Sakshi Kore. All Rights Reserved.
              </span>
            </div>
          </div>

          <div className="footer-right">
            <button
              onClick={handleScrollToTop}
              className="back-to-top-btn border-line"
              aria-label="Scroll to top"
              data-cursor-text="UP"
            >
              <span>Back to Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Minimal placeholder component to bridge Education into App layout
function EducationSplitPlaceholder() {
  const [Education, setEducation] = useState(null);

  useEffect(() => {
    import('./components/Education').then((module) => {
      setEducation(() => module.default);
    });
  }, []);

  if (!Education) return null;
  return <Education />;
}
