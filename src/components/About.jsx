import React, { useEffect, useRef } from 'react';
import './About.css';
import { Code2, Palette, BrainCircuit, Library, Laptop, Layout, Smartphone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Map icon strings to components
const iconMap = {
  Code2: Code2,
  Palette: Palette,
  BrainCircuit: BrainCircuit,
  Library: Library,
  Laptop: Laptop,
  Layout: Layout,
  Smartphone: Smartphone
};

export default function About() {
  const { biography } = portfolioData.about;
  const { careerObjective } = portfolioData.personalInfo;
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  // Consolidated interests grid
  const coreInterests = [
    { name: "Frontend Development", icon: "Code2" },
    { name: "Backend Integration", icon: "Laptop" },
    { name: "Mobile Applications", icon: "Smartphone" },
    { name: "UI/UX & Figma Systems", icon: "Palette" },
    { name: "AI/ML Specialization", icon: "BrainCircuit" },
    { name: "Cultural Digitization", icon: "Library" }
  ];

  return (
    <section id="about" ref={aboutRef} className="about-section border-line-x fade-in-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="section-num">01 // ABOUT</div>
          <h2 className="section-title">philosophies & <span className="serif-italic">background</span></h2>
        </div>

        <div className="about-grid">
          {/* Left Column: Biography & Objective */}
          <div className="about-left-col">
            <h3 className="about-subtitle">Objective</h3>
            <p className="about-objective-text serif-italic">
              "{careerObjective}"
            </p>

            <h3 className="about-subtitle">Narrative // The Cross-Disciplinary Architect</h3>
            <p className="about-bio-text">
              {biography}
            </p>
          </div>

          {/* Right Column: Capabilities Grid */}
          <div className="about-right-col border-line-y">
            {/* Core Areas / Capabilities & Domains */}
            <div className="about-capabilities-block-top">
              <h3 className="about-subtitle">Capabilities & Domains</h3>
              <div className="interests-grid">
                {coreInterests.map((interest) => {
                  const IconComponent = iconMap[interest.icon] || Code2;
                  return (
                    <div key={interest.name} className="interest-card border-line">
                      <div className="interest-icon-box">
                        <IconComponent size={20} className="interest-icon" />
                      </div>
                      <span className="interest-name">{interest.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Footer Card: Integrating Code, Design & AI */}
        <div className="about-full-width-container">
          <div className="cultural-card border-line">
            <div className="cultural-seal-watermark">SK</div>
            <h4 className="cultural-card-title">Integrating Code, Design & AI</h4>
            <p className="cultural-card-desc">
              My approach bridges frontend architecture, mobile applications, backend services, and human-centered UI/UX systems. Leveraging my specialization in AI/ML, I build robust full-stack applications that digitize processes and offer clean user-friendly interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
