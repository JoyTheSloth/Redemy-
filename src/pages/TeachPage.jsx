import React, { useState } from 'react';
import { Sparkles, DollarSign, Users, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Pages.css';

export const TeachPage = () => {
  const { addToast } = useApp();
  const [students, setStudents] = useState(3500);
  const [coursePrice, setCoursePrice] = useState(499);

  // Instructor retains 70% of revenue in INR ₹
  const monthlyEarnings = Math.round((students * coursePrice * 0.7) / 12);
  const annualEarnings = monthlyEarnings * 12;

  const [formData, setFormData] = useState({ name: '', email: '', topic: 'Web Development' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addToast('🎉 Instructor Application submitted! Our team will contact you shortly.', 'success');
    setFormData({ name: '', email: '', topic: 'Web Development' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="page-hero-banner">
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--primary-red-light)', color: 'var(--primary-red)', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: '700', marginBottom: '16px' }}>
              <Sparkles size={14} /> Teach on Redemy
            </div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '42px', fontWeight: '800', color: 'var(--text-dark)', lineHeight: '1.2', marginBottom: '16px' }}>
              Come teach with us & change lives around the world
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '24px' }}>
              Become an instructor on Redemy and reach 67M+ learners. We provide the tools, support, and platform to help you share your knowledge and earn recurring income.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Revenue Calculator in INR ₹ */}
      <section style={{ padding: '60px 0', background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--bg-alt)', border: '1.5px solid var(--primary-red-border)', borderRadius: '16px', padding: '36px', boxShadow: 'var(--shadow-md)' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', fontWeight: '800', textAlign: 'center', color: 'var(--text-dark)', marginBottom: '8px' }}>
              Estimate your potential earnings
            </h2>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '14px', marginBottom: '28px' }}>
              Slide the parameters below to see your potential monthly income in Indian Rupees (₹)
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', textAlign: 'center', marginBottom: '28px' }}>
              <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-medium)' }}>
                <div style={{ fontSize: '13px', color: '#6B7280', fontWeight: '600' }}>Estimated Monthly Income</div>
                <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--primary-red)', marginTop: '4px' }}>
                  ₹{monthlyEarnings.toLocaleString('en-IN')}
                </div>
              </div>

              <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-medium)' }}>
                <div style={{ fontSize: '13px', color: '#6B7280', fontWeight: '600' }}>Estimated Annual Revenue</div>
                <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '4px' }}>
                  ₹{annualEarnings.toLocaleString('en-IN')}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: '700', marginBottom: '8px' }}>
                  <span>Expected Enrolled Students: {students.toLocaleString('en-IN')}</span>
                </div>
                <input 
                  type="range" 
                  min="500" 
                  max="50000" 
                  step="500" 
                  value={students}
                  onChange={(e) => setStudents(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--primary-red)' }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: '700', marginBottom: '8px' }}>
                  <span>Course Price: ₹{coursePrice}</span>
                </div>
                <input 
                  type="range" 
                  min="299" 
                  max="2999" 
                  step="50" 
                  value={coursePrice}
                  onChange={(e) => setCoursePrice(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--primary-red)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Application Form */}
      <section style={{ padding: '60px 0 80px 0', background: 'var(--bg-alt)' }}>
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto', background: '#FFFFFF', padding: '36px', borderRadius: '16px', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-light)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '8px' }}>
              Apply to become an instructor
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px' }}>
              Fill out your details below and our instructor success team will review your application within 24 hours.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)', display: 'block', marginBottom: '6px' }}>Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Dr. Angela Yu"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '12px', border: '1px solid var(--border-medium)', borderRadius: '6px', fontSize: '14px', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)', display: 'block', marginBottom: '6px' }}>Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="angela@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ width: '100%', padding: '12px', border: '1px solid var(--border-medium)', borderRadius: '6px', fontSize: '14px', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)', display: 'block', marginBottom: '6px' }}>What do you want to teach?</label>
                <select 
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  style={{ width: '100%', padding: '12px', border: '1px solid var(--border-medium)', borderRadius: '6px', fontSize: '14px', outline: 'none', background: 'white' }}
                >
                  <option value="Web Development">Web Development</option>
                  <option value="Python & Data Science">Python & Data Science</option>
                  <option value="AWS Cloud Architecture">AWS Cloud Architecture</option>
                  <option value="UI/UX Figma Design">UI/UX Figma Design</option>
                  <option value="Generative AI & ChatGPT">Generative AI & ChatGPT</option>
                </select>
              </div>

              <button type="submit" className="btn-primary" style={{ padding: '14px', marginTop: '10px' }}>
                Submit Instructor Application <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
