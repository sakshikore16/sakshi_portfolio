import React, { useEffect, useRef } from 'react';
import './Achievements.css';
import { portfolioData } from '../data/portfolioData';
import { Trophy, Calendar } from 'lucide-react';

export default function Achievements() {
  const achievements = portfolioData.achievements;
  const achRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      },
      { threshold: 0.1 }
    );

    if (achRef.current) {
      observer.observe(achRef.current);
    }

    return () => {
      if (achRef.current) {
        observer.unobserve(achRef.current);
      }
    };
  }, []);

  return (
    <section id="achievements" ref={achRef} className="achievements-section border-line-x fade-in-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="section-num">06 // LAURELS</div>
          <h2 className="section-title">milestones & <span className="serif-italic">recognition</span></h2>
        </div>

        <div className="achievements-grid">
          {achievements.map((ach, idx) => (
            <div key={ach.title} className="achievement-card border-line">
              <div className="ach-card-top">
                <div className="ach-icon-box">
                  <Trophy size={20} />
                </div>
                <span className="ach-num">0{idx + 1}</span>
              </div>
              
              <div className="ach-card-body">
                <h3 className="ach-title">{ach.title}</h3>
                <div className="ach-meta">
                  <span className="ach-org">{ach.organization}</span>
                  <div className="ach-date">
                    <Calendar size={12} />
                    <span>{ach.date}</span>
                  </div>
                </div>
                <p className="ach-desc">{ach.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
