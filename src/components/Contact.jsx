import React, { useState } from 'react';
import './Contact.css';
import { Send, CheckCircle2, AlertCircle, Mail, ArrowRight, Loader2 } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { socials, fullName, marathiName } = portfolioData.personalInfo;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [statusMsg, setStatusMsg] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear validation error when typing
    if (formErrors[e.target.name]) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: ''
      });
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setStatus('sending');
    setStatusMsg('Delivering message to mailbox...');

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5003';
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setStatusMsg('Your message has been delivered. Check your inbox for confirmation!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setStatusMsg(data.message || 'An issue occurred. Please check your credentials or try again later.');
      }
    } catch (error) {
      setStatus('error');
      setStatusMsg('Could not establish connection to the backend server. Please verify it is running on port 5003.');
    }
  };

  return (
    <section id="contact" className="contact-section border-line-x">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="section-num">08 // INQUIRIES</div>
          <h2 className="section-title">connect & <span className="serif-italic">collaborate</span></h2>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Links */}
          <div className="contact-left-col">
            <h3 className="contact-pane-title">Direct Connections</h3>
            <p className="contact-pane-desc">
              Have an opening, an interesting project, or simply want to chat about UI/UX and AI? Drop a line here or reach out through social channels.
            </p>

            <div className="social-links-list">
              <a
                href={`mailto:${socials.email}`}
                className="social-item-row border-line"
                data-cursor-text="MAIL"
              >
                <div className="social-icon-circle">
                  <Mail size={18} />
                </div>
                <div className="social-item-text">
                  <span className="social-label">Email Inbox</span>
                  <span className="social-val">{socials.email}</span>
                </div>
                <ArrowRight size={16} className="social-arrow" />
              </a>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-item-row border-line"
                data-cursor-text="LINKEDIN"
              >
                <div className="social-icon-circle">
                  <Linkedin size={18} />
                </div>
                <div className="social-item-text">
                  <span className="social-label">LinkedIn</span>
                  <span className="social-val">linkedin.com/in/sakshikore</span>
                </div>
                <ArrowRight size={16} className="social-arrow" />
              </a>

              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="social-item-row border-line"
                data-cursor-text="GITHUB"
              >
                <div className="social-icon-circle">
                  <Github size={18} />
                </div>
                <div className="social-item-text">
                  <span className="social-label">GitHub Archive</span>
                  <span className="social-val">github.com/sakshikore</span>
                </div>
                <ArrowRight size={16} className="social-arrow" />
              </a>
            </div>

            {/* Cultural Devanagari signature */}
            <div className="cultural-signature border-line">
              <div className="signature-marathi">{marathiName}</div>
              <div className="signature-english">sakshi kore // 2026</div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-right-col border-line-y">
            <h3 className="contact-pane-title">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="contact-form-layout">
              {/* Field: Name */}
              <div className="form-group-field">
                <label htmlFor="name" className="form-field-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Aditi Sharma"
                  className={`form-field-input border-line ${formErrors.name ? 'error' : ''}`}
                />
                {formErrors.name && <span className="error-message-text">{formErrors.name}</span>}
              </div>

              {/* Field: Email */}
              <div className="form-group-field">
                <label htmlFor="email" className="form-field-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. aditi@company.com"
                  className={`form-field-input border-line ${formErrors.email ? 'error' : ''}`}
                />
                {formErrors.email && <span className="error-message-text">{formErrors.email}</span>}
              </div>

              {/* Field: Subject */}
              <div className="form-group-field">
                <label htmlFor="subject" className="form-field-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Collaboration Opportunity"
                  className={`form-field-input border-line ${formErrors.subject ? 'error' : ''}`}
                />
                {formErrors.subject && <span className="error-message-text">{formErrors.subject}</span>}
              </div>

              {/* Field: Message */}
              <div className="form-group-field">
                <label htmlFor="message" className="form-field-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your query details here..."
                  className={`form-field-textarea border-line ${formErrors.message ? 'error' : ''}`}
                ></textarea>
                {formErrors.message && <span className="error-message-text">{formErrors.message}</span>}
              </div>

              {/* Submit Action */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="form-submit-btn border-line"
                data-cursor-text="SUBMIT"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={18} className="spinner-icon-animate" />
                    <span>Delivering...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Status Message Overlays */}
              {status === 'success' && (
                <div className="status-indicator-box success border-line">
                  <CheckCircle2 size={20} className="indicator-icon" />
                  <p>{statusMsg}</p>
                </div>
              )}

              {status === 'error' && (
                <div className="status-indicator-box error border-line">
                  <AlertCircle size={20} className="indicator-icon" />
                  <p>{statusMsg}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
