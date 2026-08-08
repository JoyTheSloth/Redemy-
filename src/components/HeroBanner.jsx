import React from 'react';
import { Sparkles, Video, Award, Clock, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './HeroBanner.css';

export const HeroBanner = () => {
  const { setSelectedCategory } = useApp();

  return (
    <>
      <section className="hero-section">
        <div className="hero-bg-accent" />
        <div className="container">
          <div className="hero-grid">
            {/* Left Card content */}
            <div className="hero-card-box animate-fade">
              <div className="hero-badge-tag">
                <Sparkles size={14} /> Redemy 2026 Innovation Sale
              </div>
              <h1 className="hero-title">
                Skills that drive your <span>future forward</span>.
              </h1>
              <p className="hero-subtitle">
                Technology and business move fast. Master real-world skills in Web Development, Python, Cloud Computing, AI Prompting, and Graphic Design with expert guidance.
              </p>
              <div className="hero-cta-group">
                <button className="btn-primary" onClick={() => setSelectedCategory('Development')}>
                  Explore Top Courses (from ₹499) <ArrowRight size={18} />
                </button>
                <button className="btn-outline-red" onClick={() => setSelectedCategory('Data Science & AI')}>
                  Learn AI & ChatGPT
                </button>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="hero-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80" 
                alt="Students learning together online with Redemy" 
              />
              <div className="hero-float-badge">
                <div style={{ background: 'var(--primary-red)', color: 'white', padding: '10px', borderRadius: '8px' }}>
                  <Award size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: '800', fontSize: '16px', color: 'var(--text-dark)' }}>
                    210,000+ Video Courses
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle2 size={13} color="var(--primary-red)" /> Lifetime Access & Completion Certificates
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Bar */}
      <section className="value-props-bar">
        <div className="container">
          <div className="value-props-grid">
            <div className="prop-card">
              <div className="prop-icon">
                <Video size={24} />
              </div>
              <div className="prop-text">
                <h4>210,000+ Video Courses</h4>
                <p>Enjoy fresh topics added monthly</p>
              </div>
            </div>

            <div className="prop-card">
              <div className="prop-icon">
                <Award size={24} />
              </div>
              <div className="prop-text">
                <h4>Expert Instructors</h4>
                <p>Learn from industry practitioners</p>
              </div>
            </div>

            <div className="prop-card">
              <div className="prop-icon">
                <Clock size={24} />
              </div>
              <div className="prop-text">
                <h4>Lifetime Access</h4>
                <p>Learn at your own comfortable pace</p>
              </div>
            </div>

            <div className="prop-card">
              <div className="prop-icon">
                <Users size={24} />
              </div>
              <div className="prop-text">
                <h4>Global Community</h4>
                <p>67M+ learners worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
