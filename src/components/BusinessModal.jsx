import React from 'react';
import { X, Building2, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Drawers.css';

export const BusinessModal = () => {
  const { isBusinessModalOpen, setIsBusinessModalOpen, addToast } = useApp();

  if (!isBusinessModalOpen) return null;

  return (
    <div className="drawer-backdrop" onClick={() => setIsBusinessModalOpen(false)}>
      <div className="portal-modal-card animate-fade" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={() => setIsBusinessModalOpen(false)}
          style={{ position: 'absolute', top: '16px', right: '16px', color: '#6B7280' }}
        >
          <X size={22} />
        </button>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--primary-red-light)', color: 'var(--primary-red)', padding: '6px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: '700', marginBottom: '12px' }}>
          <Building2 size={14} /> Redemy Business
        </div>

        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '8px' }}>
          Upskill your team with Redemy for Business
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>
          Get unlimited access to 25,000+ top Redemy courses for your engineering, design, marketing, and leadership teams.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-dark)' }}>
            <ShieldCheck size={18} color="var(--primary-red)" /> Single Sign-On (SSO) & LMS Integration (Okta, Azure AD)
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-dark)' }}>
            <Users size={18} color="var(--primary-red)" /> Dedicated Customer Success Manager & Analytics Dashboard
          </div>
        </div>

        <button 
          className="btn-primary" 
          style={{ width: '100%', padding: '14px' }}
          onClick={() => {
            setIsBusinessModalOpen(false);
            addToast('📩 Enterprise demo requested! Our business advisor will email you.', 'success');
          }}
        >
          Request Enterprise Demo <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
