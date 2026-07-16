import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './ProjectModal.css';
import { X, ExternalLink, Globe, Layout, UserCircle2, ArrowRight } from 'lucide-react';
import { Github } from './BrandIcons';

export default function ProjectModal({ project, onClose }) {
  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    // Lock body scrolling when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  const displayMockup = project.mockups ? (project.mockups.laptop || project.mockups.main) : null;

  return createPortal(
    <div className="project-modal-overlay" onClick={onClose}>
      <div
        className="project-modal-content border-line"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Sticky Header */}
        <div className="modal-header border-line-x">
          <div className="modal-header-meta">
            <span className="modal-num">PROJECT LOG // {project.id.toUpperCase()}</span>
          </div>
          <button
            onClick={onClose}
            className="modal-close-btn"
            aria-label="Close Modal"
            data-cursor-text="CLOSE"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-body">
          {/* Banner Area */}
          <div className="modal-banner border-line">
            <div className="modal-banner-bg">
              <div className="modal-watermark-large">{project.id}</div>
              {displayMockup ? (
                <img
                  src={displayMockup}
                  alt={project.title}
                  className="modal-banner-img"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              ) : (
                <div className="modal-banner-placeholder" style={{display:'flex', alignItems:'center', justifyContent:'center', height:'100%', fontStyle:'italic', color:'var(--text-secondary)'}}>
                  <span>// Visual Mockup Archive Pending</span>
                </div>
              )}
            </div>
          </div>

          {/* Heading */}
          <div className="modal-heading-block">
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-tagline serif-italic">{project.tagline}</p>
            
            {/* Horizontal single line for tech stack and actions */}
            <div className="modal-meta-row-horizontal">
              <div className="modal-meta-tags-list">
                {(project.techStack || project.methodologies || []).map((tech) => (
                  <span key={tech} className="tech-badge-mini">{tech}</span>
                ))}
              </div>
              
              <div className="modal-meta-actions">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="modal-horizontal-action-btn border-line">
                    <Github size={14} />
                    <span>Repository</span>
                  </a>
                )}
                {project.liveDemo && (
                  <a href={project.liveDemo} target="_blank" rel="noreferrer" className="modal-horizontal-action-btn cta border-line">
                    <Globe size={14} />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.prototypeLink && (
                  <a href={project.prototypeLink} target="_blank" rel="noreferrer" className="modal-horizontal-action-btn cta border-line">
                    <Layout size={14} />
                    <span>Prototype Link</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* DEVELOPMENT DETAIL PAGE TEMPLATE */}
          {project.type === 'development' && (
            <div className="modal-details-fullwidth">
              <div className="detail-section">
                <h3 className="section-subheading">Project Overview</h3>
                <p>{project.description}</p>
              </div>

              <div className="detail-section">
                <h3 className="section-subheading">Problem Statement</h3>
                <p>{project.problemStatement}</p>
              </div>

              <div className="detail-section">
                <h3 className="section-subheading">Key Features</h3>
                <ul className="features-bullet-list">
                  {project.features.map((feat, idx) => (
                    <li key={idx}>
                      <ArrowRight size={14} className="bullet-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="detail-section">
                <h3 className="section-subheading">Challenges & Obstacles</h3>
                <p>{project.challenges}</p>
              </div>

              <div className="detail-section">
                <h3 className="section-subheading">Key Learnings</h3>
                <p>{project.learnings}</p>
              </div>
            </div>
          )}

          {/* UI/UX CASE STUDY TEMPLATE */}
          {project.type === 'uiux' && (
            <div className="modal-details-fullwidth">
              <div className="detail-section">
                <h3 className="section-subheading">Project Overview</h3>
                <p>{project.description}</p>
              </div>

              <div className="detail-section">
                <h3 className="section-subheading">The Challenge</h3>
                <p>{project.problemStatement}</p>
              </div>

              <div className="detail-section">
                <h3 className="section-subheading">User Research & Insights</h3>
                <p>{project.userResearch}</p>
              </div>

              {/* Personas Display */}
              {project.personas && (
                <div className="detail-section">
                  <h3 className="section-subheading">User Personas</h3>
                  <div className="personas-container">
                    {project.personas.map((persona, idx) => (
                      <div key={idx} className="persona-card-editorial border-line">
                        <div className="persona-header">
                          <UserCircle2 size={32} className="persona-avatar-icon" />
                          <div>
                            <h4 className="persona-name">{persona.name}</h4>
                            <span className="persona-role">{persona.role}</span>
                          </div>
                        </div>
                        <div className="persona-body">
                          <div className="persona-data-group">
                            <h5>User Needs</h5>
                            <p>{persona.needs}</p>
                          </div>
                          <div className="persona-data-group">
                            <h5>Pain Points</h5>
                            <p>{persona.frustrations}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="detail-section">
                <h3 className="section-subheading">User Flow</h3>
                <p>{project.userFlow}</p>
              </div>

              <div className="detail-section">
                <h3 className="section-subheading">Wireframes & Low-Fi Layouts</h3>
                <p>{project.wireframes}</p>
              </div>

              <div className="detail-section">
                <h3 className="section-subheading">High-Fidelity Interface Designs</h3>
                <p>{project.highFidelity}</p>
              </div>

              <div className="detail-section">
                <h3 className="section-subheading">Design Logic & Decisions</h3>
                <p>{project.designDecisions}</p>
              </div>

              <div className="detail-section">
                <h3 className="section-subheading">Final Outcome & Metrics</h3>
                <p>{project.outcome}</p>
              </div>

              <div className="detail-section">
                <h3 className="section-subheading">Case Study Reflections</h3>
                <p>{project.reflection}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
