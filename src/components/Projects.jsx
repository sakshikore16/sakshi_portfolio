import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';
import { portfolioData } from '../data/portfolioData';
import { Laptop, Phone, Layout, ArrowUpRight } from 'lucide-react';
import { Github } from './BrandIcons';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('development');
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsRef = useRef(null);

  const devProjects = portfolioData.projects.development;
  const uiuxProjects = portfolioData.projects.uiux;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      },
      { threshold: 0.05 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" ref={projectsRef} className="projects-section border-line-x fade-in-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="section-num">04 // ARCHIVE</div>
          <h2 className="section-title">featured <span className="serif-italic">projects</span></h2>
        </div>

        {/* Tab Controls */}
        <div className="projects-tab-controls border-line">
          <button
            className={`tab-btn ${activeTab === 'development' ? 'active' : ''}`}
            onClick={() => setActiveTab('development')}
            data-cursor-text="DEV"
          >
            <span>Software Development</span>
            <span className="tab-count">{devProjects.length}</span>
          </button>
          
          <button
            className={`tab-btn ${activeTab === 'uiux' ? 'active' : ''}`}
            onClick={() => setActiveTab('uiux')}
            data-cursor-text="UI/UX"
          >
            <span>UI/UX Case Studies</span>
            <span className="tab-count">{uiuxProjects.length}</span>
          </button>
        </div>

        {/* Development Projects Grid */}
        {activeTab === 'development' && (
          <div className="projects-grid">
            {devProjects.map((project) => (
              <div
                key={project.id}
                className="project-card-editorial border-line clickable"
                onClick={() => setSelectedProject({ ...project, type: 'development' })}
                data-cursor-text="OPEN"
              >
                <div className="project-card-header">
                  <span className="project-category">DEV // {project.techStack.slice(0, 2).join(' & ')}</span>
                  <div className="project-open-icon">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <div className="project-card-content">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-tagline">{project.tagline}</p>

                  {/* Tech badges positioned above mockup */}
                  <div className="project-tech-badges-card">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-badge-mini">{tech}</span>
                    ))}
                  </div>

                  {/* Dynamic Device Mockup Box - Direct Presentation */}
                  <div className="project-mockup-display-direct">
                    {project.mockups.laptop ? (
                      <img 
                        src={project.mockups.laptop} 
                        alt={project.title} 
                        className="project-direct-mockup-img" 
                      />
                    ) : (
                      <div className="mockup-placeholder-screen-direct">
                        <span className="placeholder-tag">{project.title}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* UI/UX Projects Grid */}
        {activeTab === 'uiux' && (
          <div className="projects-grid">
            {uiuxProjects.map((project) => (
              <div
                key={project.id}
                className="project-card-editorial border-line clickable"
                onClick={() => setSelectedProject({ ...project, type: 'uiux' })}
                data-cursor-text="CASE STUDY"
              >
                <div className="project-card-header">
                  <span className="project-category">UI/UX CASE STUDY</span>
                  <div className="project-open-icon">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <div className="project-card-content">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-tagline">{project.tagline}</p>

                  {/* Tech badges positioned above mockup */}
                  <div className="project-tech-badges-card">
                    {(project.methodologies || []).map((tech) => (
                      <span key={tech} className="tech-badge-mini">{tech}</span>
                    ))}
                  </div>

                  {/* Dynamic Device Mockup Box - Direct Presentation */}
                  <div className="project-mockup-display-direct">
                    {project.mockups.main ? (
                      <img 
                        src={project.mockups.main} 
                        alt={project.title} 
                        className="project-direct-mockup-img" 
                      />
                    ) : (
                      <div className="mockup-placeholder-screen-direct">
                        <span className="placeholder-tag">{project.title}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Dynamic Detailed Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
