import React, { useEffect, useRef } from 'react';
import './Education.css';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
  const education = portfolioData.education;
  const eduRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      },
      { threshold: 0.1 }
    );

    if (eduRef.current) {
      observer.observe(eduRef.current);
    }

    return () => {
      if (eduRef.current) {
        observer.unobserve(eduRef.current);
      }
    };
  }, []);

  return (
    <section id="education" ref={eduRef} className="education-section border-line-x fade-in-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="section-num">03 // FOUNDATIONS</div>
          <h2 className="section-title">academic <span className="serif-italic">background</span></h2>
        </div>

        {/* Compact Education Grid List */}
        <div className="edu-compact-grid">
          {education.map((edu) => (
            <div key={edu.institution} className="edu-card-simple border-line">
              <div className="edu-card-simple-header">
                <div className="edu-card-title-group">
                  <div className="edu-icon-circle">
                    <GraduationCap size={18} />
                  </div>
                  <div className="edu-text-group">
                    <h3 className="edu-college-name">{edu.institution}</h3>
                    <span className="edu-degree-text">{edu.degree}</span>
                  </div>
                </div>
                
                <div className="edu-time-badge border-line">
                  <Calendar size={12} />
                  <span>{edu.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
