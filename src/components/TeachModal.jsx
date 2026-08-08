import React, { useState } from 'react';
import { X, Sparkles, DollarSign, Users, BookOpen, CheckCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Drawers.css';

export const TeachModal = () => {
  const { isTeachModalOpen, setIsTeachModalOpen, addToast } = useApp();
  const [students, setStudents] = useState(2500);
  const [coursePrice, setCoursePrice] = useState(29);

  if (!isTeachModalOpen) return null;

  // Earnings calculation formula (Instructor retains 70% of revenue)
  const monthlyEarnings = Math.round((students * coursePrice * 0.7) / 12);
  const annualEarnings = monthlyEarnings * 12;

  return (
    <div className="drawer-backdrop" onClick={() => setIsTeachModalOpen(false)}>
      <div className="portal-modal-card animate-fade" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={() => setIsTeachModalOpen(false)}
          style={{ position: 'absolute', top: '16px', right: '16px', color: '#6B7280' }}
        >
          <X size={22} />
        </button>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--primary-red-light)', color: 'var(--primary-red)', padding: '6px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: '700', marginBottom: '12px' }}>
          <Sparkles size={14} /> Teach on Redemy
        </div>

        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '8px' }}>
          Come teach with us & change lives globally
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>
          Become an instructor on Redemy and reach 67M+ students worldwide. Estimate your potential monthly revenue below:
        </p>

        {/* Dynamic Calculator Card */}
        <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--primary-red-border)', borderRadius: '12px', padding: '24px', marginBottom: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', textAlign: 'center', marginBottom: '20px' }}>
            <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '12px', color: '#6B7280', fontWeight: '600' }}>Estimated Monthly Income</div>
              <div style={{ fontSize: '28px', fontWeight: '800', color: 'var(--primary-red)', marginTop: '4px' }}>
                ${monthlyEarnings.toLocaleString()}
              </div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '12px', color: '#6B7280', fontWeight: '600' }}>Estimated Annual Revenue</div>
              <div style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '4px' }}>
                ${annualEarnings.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Sliders */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: '700', marginBottom: '6px' }}>
                <span>Expected Students: {students.toLocaleString()}</span>
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
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: '700', marginBottom: '6px' }}>
                <span>Course Price: ${coursePrice}</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="150" 
                step="5" 
                value={coursePrice}
                onChange={(e) => setCoursePrice(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--primary-red)' }}
              />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button 
            className="btn-primary" 
            style={{ flex: 1, padding: '14px' }}
            onClick={() => {
              setIsTeachModalOpen(false);
              addToast('🎉 Instructor Application submitted! Our team will contact you shortly.', 'success');
            }}
          >
            Apply to Become an Instructor
          </button>
        </div>
      </div>
    </div>
  );
};
