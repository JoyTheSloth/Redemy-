import React from 'react';
import { Globe, Play } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Footer.css';

export const Footer = () => {
  const { navigateTo } = useApp();

  return (
    <footer className="footer">
      <div className="container">
        {/* Top Banner */}
        <div className="footer-top-banner">
          <div className="footer-top-text">
            <h3>Teach the world online with Redemy</h3>
            <p>Create an online video course, reach millions of students across India & globally, and earn recurring revenue in INR (₹).</p>
          </div>
          <button className="btn-primary" onClick={() => navigateTo('teach')}>
            Teach on Redemy
          </button>
        </div>

        {/* Multi-column Navigation */}
        <div className="footer-grid">
          <div className="footer-col">
            <h5>Redemy Navigation</h5>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home'); }}>Home</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('category'); }}>Category Explorer</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('my-learning'); }}>My Learning Dashboard</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('teach'); }}>Teach on Redemy</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('business'); }}>Redemy Business</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Top Categories</h5>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('category', 'Development'); }}>Web Development</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('category', 'Development'); }}>Python & Automation</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('category', 'IT & Software'); }}>AWS Cloud Architecture</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('category', 'Design'); }}>UI/UX Figma Design</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Terms & Policies</h5>
            <ul>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Cookie settings</a></li>
              <li><a href="#">Sitemap</a></li>
              <li><a href="#">Accessibility statement</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Community</h5>
            <ul>
              <li><a href="#">Learner Stories</a></li>
              <li><a href="#">Affiliate Partner Program</a></li>
              <li><a href="#">Help and Support</a></li>
            </ul>
          </div>

          <div className="footer-col" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button className="lang-btn">
              <Globe size={16} color="var(--primary-red)" /> English (India - ₹)
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div className="logo-badge" style={{ width: '28px', height: '28px' }}>
              <Play size={14} fill="white" />
            </div>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: '800', color: 'white' }}>
              Red<span style={{ color: 'var(--primary-red)' }}>emy</span>
            </span>
          </div>

          <div>
            © 2026 Redemy, Inc. All rights reserved. Indian Rupee (₹) Pricing Enabled.
          </div>
        </div>
      </div>
    </footer>
  );
};
