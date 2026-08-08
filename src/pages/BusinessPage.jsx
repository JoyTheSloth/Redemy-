import React, { useState } from 'react';
import { Building2, ShieldCheck, Users, Check, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TRUSTED_COMPANIES } from '../data/mockData';
import './Pages.css';

export const BusinessPage = () => {
  const { addToast } = useApp();
  const [demoForm, setDemoForm] = useState({ company: '', email: '', teamSize: '21-50' });

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    addToast('📩 Enterprise demo requested! Our business advisor will contact you within 2 hours.', 'success');
    setDemoForm({ company: '', email: '', teamSize: '21-50' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="page-hero-banner" style={{ background: 'linear-gradient(135deg, #111827 0%, #1F2937 100%)', color: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '750px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(229, 9, 20, 0.2)', color: 'var(--primary-red)', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: '700', marginBottom: '16px', border: '1px solid var(--primary-red-border)' }}>
              <Building2 size={14} /> Redemy for Business
            </div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '42px', fontWeight: '800', lineHeight: '1.2', marginBottom: '16px' }}>
              Upskill your entire organization with Redemy Enterprise
            </h1>
            <p style={{ fontSize: '18px', color: '#D1D5DB', lineHeight: '1.6', marginBottom: '24px' }}>
              Get unlimited access to 25,000+ top-rated courses in Web Dev, Cloud Architecture, AI, CyberSecurity, and Data Science for your engineering teams.
            </p>
          </div>
        </div>
      </section>

      {/* Trust logos */}
      <section style={{ padding: '30px 0', background: 'var(--bg-alt)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '13px', fontWeight: '700', color: '#6B7280', marginBottom: '16px', textTransform: 'uppercase' }}>
            Trusted by top engineering teams across India
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', fontWeight: '800', color: '#4B5563', fontSize: '18px' }}>
            {TRUSTED_COMPANIES.map((company) => (
              <span key={company}>{company}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison Table in INR ₹ */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '30px', fontWeight: '800', textAlign: 'center', color: 'var(--text-dark)', marginBottom: '8px' }}>
            Flexible plans for teams of all sizes
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '15px', marginBottom: '36px' }}>
            All plans include 24/7 customer support and full mobile offline access.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table className="pricing-table">
              <thead>
                <tr>
                  <th style={{ width: '40%' }}>Plan Features</th>
                  <th style={{ width: '30%', textAlign: 'center' }}>
                    <div style={{ fontSize: '18px', fontWeight: '800', color: 'var(--primary-red)' }}>Team Plan</div>
                    <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>₹1,499 / user / month</div>
                  </th>
                  <th style={{ width: '30%', textAlign: 'center' }}>
                    <div style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-dark)' }}>Enterprise Plan</div>
                    <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Custom Billing (INR ₹)</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Team Size</td>
                  <td style={{ textAlign: 'center' }}>5 to 20 users</td>
                  <td style={{ textAlign: 'center' }}>21+ users</td>
                </tr>
                <tr>
                  <td>Course Library Access</td>
                  <td style={{ textAlign: 'center' }}>12,000+ curated courses</td>
                  <td style={{ textAlign: 'center' }}>25,000+ full catalog</td>
                </tr>
                <tr>
                  <td>Single Sign-On (Okta / Azure AD)</td>
                  <td style={{ textAlign: 'center' }}>-</td>
                  <td style={{ textAlign: 'center' }}><Check size={18} color="#059669" style={{ margin: '0 auto' }} /></td>
                </tr>
                <tr>
                  <td>Dedicated Customer Success Manager</td>
                  <td style={{ textAlign: 'center' }}>-</td>
                  <td style={{ textAlign: 'center' }}><Check size={18} color="#059669" style={{ margin: '0 auto' }} /></td>
                </tr>
                <tr>
                  <td>Custom Learning Paths & Cohorts</td>
                  <td style={{ textAlign: 'center' }}>Basic</td>
                  <td style={{ textAlign: 'center' }}><Check size={18} color="#059669" style={{ margin: '0 auto' }} /> Advanced</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section style={{ padding: '60px 0 80px 0', background: 'var(--bg-alt)' }}>
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto', background: '#FFFFFF', padding: '36px', borderRadius: '16px', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-light)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '8px' }}>
              Request a live Enterprise demo
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px' }}>
              Speak with a Redemy Business specialist to tailor a learning subscription for your team.
            </p>

            <form onSubmit={handleDemoSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)', display: 'block', marginBottom: '6px' }}>Company Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Swiggy / Infosys"
                  value={demoForm.company}
                  onChange={(e) => setDemoForm({ ...demoForm, company: e.target.value })}
                  style={{ width: '100%', padding: '12px', border: '1px solid var(--border-medium)', borderRadius: '6px', fontSize: '14px', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)', display: 'block', marginBottom: '6px' }}>Work Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="name@company.com"
                  value={demoForm.email}
                  onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                  style={{ width: '100%', padding: '12px', border: '1px solid var(--border-medium)', borderRadius: '6px', fontSize: '14px', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)', display: 'block', marginBottom: '6px' }}>Team Size</label>
                <select 
                  value={demoForm.teamSize}
                  onChange={(e) => setDemoForm({ ...demoForm, teamSize: e.target.value })}
                  style={{ width: '100%', padding: '12px', border: '1px solid var(--border-medium)', borderRadius: '6px', fontSize: '14px', outline: 'none', background: 'white' }}
                >
                  <option value="5-20">5 to 20 users</option>
                  <option value="21-50">21 to 50 users</option>
                  <option value="51-200">51 to 200 users</option>
                  <option value="200+">200+ users</option>
                </select>
              </div>

              <button type="submit" className="btn-primary" style={{ padding: '14px', marginTop: '10px' }}>
                Request Enterprise Demo <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
