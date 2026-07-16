import React, { useEffect, useRef } from 'react';
import './Experience.css';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Award } from 'lucide-react';

export default function Experience() {
  const experiences = portfolioData.experience;
  const expRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      },
      { threshold: 0.1 }
    );

    if (expRef.current) {
      observer.observe(expRef.current);
    }

    return () => {
      if (expRef.current) {
        observer.unobserve(expRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" ref={expRef} className="experience-section border-line-x fade-in-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="section-num">02 // CHRONICLE</div>
          <h2 className="section-title">professional <span className="serif-italic">experiences</span></h2>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <div key={exp.company} className="timeline-item-editorial">
              {/* Left Column: Meta details (Duration, Role, Tech) */}
              <div className="timeline-meta-col">
                <div className="timeline-number">0{idx + 1}</div>
                <span className="timeline-duration">{exp.duration}</span>
                <div className="timeline-tech-list">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Right Column: Work description */}
              <div className="timeline-content-col border-line-y">
                <div className="timeline-role-group">
                  <h3 className="experience-company">{exp.company}</h3>
                  <h4 className="experience-role">{exp.role}</h4>
                </div>

                <ul className="responsibilities-list">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx}>{resp}</li>
                  ))}
                </ul>

                {/* Key Achievements */}
                {exp.achievements && (
                  <div className="exp-achievement border-line">
                    <div className="achievement-badge-holder">
                      <Award size={16} className="achievement-icon" />
                      <span className="achievement-label">Key Achievement</span>
                    </div>
                    <p className="achievement-text">{exp.achievements}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
