import React, { useState } from 'react';
import { ShieldCheck, CreditCard, Smartphone, Building, CheckCircle2, Lock, ArrowRight, Tag } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Pages.css';

export const CheckoutPage = () => {
  const { cart, rawSubtotal, discountAmount, cartTotal, appliedCoupon, couponInput, setCouponInput, couponError, applyCoupon, checkout, navigateTo } = useApp();
  const [paymentMethod, setPaymentMethod] = useState('upi'); // 'upi' | 'card' | 'netbanking'
  const [billingForm, setBillingForm] = useState({ name: 'Shivani Sharma', email: 'shivani@example.com', state: 'Maharashtra' });

  if (cart.length === 0) {
    return (
      <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-dark)' }}>Your cart is empty</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', margin: '10px 0 20px 0' }}>Add courses to your cart before proceeding to checkout.</p>
        <button className="btn-primary" onClick={() => navigateTo('category')}>
          Explore Courses
        </button>
      </div>
    );
  }

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    checkout();
  };

  return (
    <div style={{ background: 'var(--bg-alt)', minHeight: 'calc(100vh - 72px)', padding: '40px 0' }}>
      <div className="container">
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '8px' }}>
          Checkout & Complete Enrollment
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>
          Safe & Secure 256-Bit SSL Encrypted Payment in Indian Rupees (₹)
        </p>

        <div className="checkout-grid">
          {/* Left Billing & Payment Form */}
          <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '16px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '16px' }}>
              1. Billing Address
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
              <div>
                <label style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)', display: 'block', marginBottom: '6px' }}>Full Name</label>
                <input 
                  type="text" 
                  value={billingForm.name}
                  onChange={(e) => setBillingForm({ ...billingForm, name: e.target.value })}
                  style={{ width: '100%', padding: '12px', border: '1px solid var(--border-medium)', borderRadius: '6px', fontSize: '14px', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)', display: 'block', marginBottom: '6px' }}>Email Address</label>
                <input 
                  type="email" 
                  value={billingForm.email}
                  onChange={(e) => setBillingForm({ ...billingForm, email: e.target.value })}
                  style={{ width: '100%', padding: '12px', border: '1px solid var(--border-medium)', borderRadius: '6px', fontSize: '14px', outline: 'none' }}
                />
              </div>
            </div>

            <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-dark)', margin: '24px 0 16px 0', borderTop: '1px solid var(--border-light)', paddingTop: '24px' }}>
              2. Payment Method
            </h3>

            {/* Payment Method Selector */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
              <button 
                type="button"
                className={`btn-outline ${paymentMethod === 'upi' ? 'active' : ''}`}
                style={{ flex: 1, padding: '12px', borderColor: paymentMethod === 'upi' ? 'var(--primary-red)' : 'var(--border-medium)', background: paymentMethod === 'upi' ? 'var(--primary-red-light)' : 'white' }}
                onClick={() => setPaymentMethod('upi')}
              >
                <Smartphone size={18} color="var(--primary-red)" /> Instant UPI
              </button>

              <button 
                type="button"
                className={`btn-outline ${paymentMethod === 'card' ? 'active' : ''}`}
                style={{ flex: 1, padding: '12px', borderColor: paymentMethod === 'card' ? 'var(--primary-red)' : 'var(--border-medium)', background: paymentMethod === 'card' ? 'var(--primary-red-light)' : 'white' }}
                onClick={() => setPaymentMethod('card')}
              >
                <CreditCard size={18} color="var(--primary-red)" /> Credit/Debit Card
              </button>

              <button 
                type="button"
                className={`btn-outline ${paymentMethod === 'netbanking' ? 'active' : ''}`}
                style={{ flex: 1, padding: '12px', borderColor: paymentMethod === 'netbanking' ? 'var(--primary-red)' : 'var(--border-medium)', background: paymentMethod === 'netbanking' ? 'var(--primary-red-light)' : 'white' }}
                onClick={() => setPaymentMethod('netbanking')}
              >
                <Building size={18} color="var(--primary-red)" /> NetBanking
              </button>
            </div>

            {paymentMethod === 'upi' && (
              <div style={{ background: 'var(--bg-alt)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border-medium)', marginBottom: '24px' }}>
                <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px' }}>
                  Pay via Google Pay / PhonePe / Paytm / BHIM
                </div>
                <input 
                  type="text" 
                  placeholder="Enter UPI ID (e.g. name@okhdfcbank or 9876543210@ybl)"
                  style={{ width: '100%', padding: '12px', border: '1px solid var(--border-medium)', borderRadius: '6px', fontSize: '14px', outline: 'none' }}
                />
              </div>
            )}

            {paymentMethod === 'card' && (
              <div style={{ background: 'var(--bg-alt)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border-medium)', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <input type="text" placeholder="Card Number (4532 •••• •••• 8912)" style={{ padding: '12px', border: '1px solid var(--border-medium)', borderRadius: '6px', fontSize: '14px' }} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <input type="text" placeholder="MM/YY" style={{ padding: '12px', border: '1px solid var(--border-medium)', borderRadius: '6px', fontSize: '14px' }} />
                  <input type="text" placeholder="CVV" style={{ padding: '12px', border: '1px solid var(--border-medium)', borderRadius: '6px', fontSize: '14px' }} />
                </div>
              </div>
            )}

            <button 
              className="btn-primary" 
              style={{ width: '100%', padding: '16px', fontSize: '16px', fontWeight: '800' }}
              onClick={handleOrderSubmit}
            >
              Complete Order • ₹{cartTotal.toFixed(2)} <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Summary Panel */}
          <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '16px', border: '1px solid var(--border-light)', height: 'fit-content', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '16px' }}>
              Order Summary ({cart.length} items)
            </h3>

            {cart.map((item) => (
              <div key={item.id} style={{ display: 'flex', gap: '12px', marginBottom: '14px', paddingBottom: '14px', borderBottom: '1px solid var(--border-light)' }}>
                <img src={item.image} alt={item.title} style={{ width: '60px', height: '40px', objectFit: 'cover', borderRadius: '4px' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)', lineHeight: '1.3' }}>{item.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--primary-red)', fontWeight: '800', marginTop: '2px' }}>₹{item.price}</div>
                </div>
              </div>
            ))}

            {/* Coupon Box */}
            <div style={{ background: 'var(--bg-alt)', padding: '14px', borderRadius: '8px', margin: '16px 0' }}>
              <div className="coupon-input-group" style={{ marginBottom: 0 }}>
                <input 
                  type="text" 
                  placeholder="Coupon REDEMY2026"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                />
                <button className="btn-primary" style={{ padding: '6px 12px', fontSize: '12px' }} onClick={() => applyCoupon(couponInput)}>
                  Apply
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#6B7280', marginBottom: '6px' }}>
              <span>Original Price:</span>
              <span>₹{rawSubtotal.toFixed(2)}</span>
            </div>

            {discountAmount > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#059669', fontWeight: '700', marginBottom: '6px' }}>
                <span>Coupon Discount ({appliedCoupon.discountPercent}%):</span>
                <span>-₹{discountAmount.toFixed(2)}</span>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '20px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border-light)' }}>
              <span>Total Amount:</span>
              <span style={{ color: 'var(--primary-red)' }}>₹{cartTotal.toFixed(2)}</span>
            </div>

            <div style={{ fontSize: '12px', color: '#6B7280', textAlign: 'center', marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
              <ShieldCheck size={16} color="#059669" /> 30-Day Money-Back Guarantee
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
