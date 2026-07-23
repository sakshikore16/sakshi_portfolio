import React, { useEffect, useRef } from 'react';
import './Skills.css';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const skillsData = portfolioData.skills;
  const softSkills = portfolioData.softSkills || [];
  const languages = portfolioData.languages || [];
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const categories = [
    { key: 'programming', label: 'Programming Languages' },
    { key: 'frontend', label: 'Frontend Stack' },
    { key: 'backend_databases', label: 'Backend & Databases' },
    { key: 'uiux', label: 'UI/UX Design & Prototyping' },
    { key: 'aiml', label: 'AI / ML & Problem Solving' },
    { key: 'tools', label: 'Development & Tools' }
  ];

  return (
    <section id="skills" ref={skillsRef} className="skills-section border-line-x fade-in-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="section-num">05 // SKILLSET</div>
          <h2 className="section-title">skills & <span className="serif-italic">capabilities</span></h2>
        </div>

        {/* Section 1: Technical Proficiencies */}
        <div className="skills-sub-layout">
          <h3 className="skills-sub-title">Technical Proficiencies</h3>
          
          <div className="skills-category-grid">
            {categories.map((cat, idx) => {
              const skillsList = cat.key === 'backend_databases'
                ? [...(skillsData['backend'] || []), ...(skillsData['databases'] || [])]
                : (skillsData[cat.key] || []);

              return (
                <div key={cat.key} className="skills-category-block border-line">
                  <div className="skills-block-header">
                    <span className="skills-block-num">0{idx + 1} /</span>
                    <h4 className="skills-block-title">{cat.label}</h4>
                  </div>
                  <div className="skills-list">
                    {skillsList.map((skill) => (
                      <div key={skill} className="skill-item-tag border-line">
                        <span className="skill-dot">◇</span>
                        <span className="skill-name">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Soft Skills & Languages */}
        <div className="skills-secondary-section">
          <div className="skills-secondary-grid">
            {/* Soft Skills Block */}
            <div className="skills-secondary-block border-line">
              <div className="skills-block-header">
                <span className="skills-block-num">A /</span>
                <h4 className="skills-block-title">Soft Skills & Capabilities</h4>
              </div>
              <div className="skills-list">
                {softSkills.map((skill) => (
                  <div key={skill} className="skill-item-tag border-line">
                    <span className="skill-dot">✦</span>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Block */}
            <div className="skills-secondary-block border-line">
              <div className="skills-block-header">
                <span className="skills-block-num">B /</span>
                <h4 className="skills-block-title">Languages Spoken</h4>
              </div>
              <div className="skills-list">
                {languages.map((lang) => (
                  <div key={lang} className="skill-item-tag border-line">
                    <span className="skill-dot">✦</span>
                    <span className="skill-name">{lang}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
