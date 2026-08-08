import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS, TRUSTED_COMPANIES } from '../data/mockData';
import './ReviewsSection.css';

export const ReviewsSection = () => {
  return (
    <>
      {/* Corporate Trust Banner */}
      <section className="trust-section">
        <div className="container">
          <p className="trust-title">Trusted by over 16,000 companies and 67 million learners worldwide</p>
          <div className="trust-logos-grid">
            {TRUSTED_COMPANIES.map((company) => (
              <span key={company} className="company-logo-pill">
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="testimonials-section">
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '8px' }}>
            How learners like you achieve their goals
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>
            Read inspiring success stories from real Redemy students who leveled up their skills
          </p>

          <div className="testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="testimonial-card">
                <div>
                  <Quote size={28} color="var(--primary-red)" style={{ opacity: 0.3, marginBottom: '10px' }} />
                  <p className="testimonial-quote">"{t.quote}"</p>
                </div>
                <div className="testimonial-user">
                  <img src={t.avatar} alt={t.name} />
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '14px', color: 'var(--text-dark)' }}>{t.name}</div>
                    <div style={{ fontSize: '12px', color: 'var(--primary-red)', fontWeight: '600' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
