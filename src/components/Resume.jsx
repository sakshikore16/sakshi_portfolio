import React, { useEffect, useRef } from 'react';
import './Resume.css';
import { Download, Eye, FileText, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Resume() {
  const resumeRef = useRef(null);
  const { fullName, marathiName, title } = portfolioData.personalInfo;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      },
      { threshold: 0.1 }
    );

    if (resumeRef.current) {
      observer.observe(resumeRef.current);
    }

    return () => {
      if (resumeRef.current) {
        observer.unobserve(resumeRef.current);
      }
    };
  }, []);

  return (
    <section id="resume" ref={resumeRef} className="resume-section border-line-x fade-in-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="section-num">07 // DOCUMENT</div>
          <h2 className="section-title">curriculum <span className="serif-italic">vitae</span></h2>
        </div>

        <div className="resume-clean-container">
          <p className="resume-one-liner">
            You can read through my key qualifications on this portal, or download my full print-ready resume as a PDF for offline viewing.
          </p>

          <div className="resume-action-buttons-horizontal">
            <a
              href="/resume.pdf"
              download="Sakshi_Kore_Resume.pdf"
              className="resume-download-btn border-line"
              data-cursor-text="DOWNLOAD"
            >
              <Download size={18} />
              <span>Download PDF Resume</span>
            </a>
            
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="resume-view-btn border-line"
              data-cursor-text="VIEW"
            >
              <Eye size={18} />
              <span>View Full Screen</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
