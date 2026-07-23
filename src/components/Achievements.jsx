import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './Achievements.css';
import { portfolioData } from '../data/portfolioData';
import { Trophy, Calendar, X } from 'lucide-react';

export default function Achievements() {
  const achievements = portfolioData.achievements;
  const achRef = useRef(null);
  const [selectedAch, setSelectedAch] = useState(null);

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

  // Escape key listener for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedAch(null);
      }
    };
    if (selectedAch) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedAch]);

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
            <div
              key={ach.title}
              className="achievement-card border-line clickable"
              onClick={() => setSelectedAch(ach)}
              data-cursor-text="VIEW"
            >
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

      {/* Dynamic Certificate Modal Portal */}
      {selectedAch && createPortal(
        <div className="certificate-modal-overlay" onClick={() => setSelectedAch(null)}>
          <div className="certificate-modal-content border-line" onClick={(e) => e.stopPropagation()}>
            <button
              className="cert-close-btn"
              onClick={() => setSelectedAch(null)}
              aria-label="Close Certificate"
              data-cursor-text="CLOSE"
            >
              <X size={20} />
            </button>

            {/* Certificate Print Frame */}
            <div className="certificate-frame border-line">
              <div className="certificate-inner-border border-line">
                {/* Monogram Seal background watermark */}
                <div className="cert-monogram-watermark">SK</div>
                
                {/* Header organization info */}
                <div className="cert-org-header">
                  <span>{selectedAch.organization}</span>
                </div>

                <div className="cert-title-seal">
                  <span className="cert-seal-text">OFFICIAL LOG</span>
                </div>

                <h3 className="cert-credential-banner">CERTIFICATE OF ACHIEVEMENT</h3>
                <p className="cert-present-text">This credential is proudly presented to</p>
                <h2 className="cert-recipient-name">Sakshi Kore</h2>

                <p className="cert-achievement-text">
                  in recognition of outstanding visual design, logic architectures, and prompt configurations successfully demonstrated in the achievement of
                </p>
                <h4 className="cert-achievement-title">"{selectedAch.title}"</h4>
                
                <p className="cert-achievement-desc">{selectedAch.description}</p>

                {/* Footer validation fields */}
                <div className="cert-footer-row">
                  <div className="cert-footer-col">
                    <span className="cert-footer-label">DATE OF ISSUANCE</span>
                    <span className="cert-footer-val">{selectedAch.date}</span>
                  </div>

                  <div className="cert-footer-col cert-sig-col">
                    <span className="cert-sig-line"></span>
                    <span className="cert-footer-label">AUTHORIZED VERIFICATION</span>
                    <span className="cert-footer-val-sig">Credential Records Office</span>
                  </div>
                </div>

                {/* Secure ID */}
                <div className="cert-security-hash">
                  VERIFICATION ID // SK-{selectedAch.date}-{(selectedAch.organization.substring(0, 4)).toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
