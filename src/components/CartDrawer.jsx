import React from 'react';
import { X, Trash2, Tag, ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Drawers.css';

export const CartDrawer = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    removeFromCart, 
    appliedCoupon, 
    couponInput, 
    setCouponInput, 
    couponError, 
    applyCoupon,
    rawSubtotal,
    discountAmount,
    cartTotal,
    navigateTo
  } = useApp();

  if (!isCartOpen) return null;

  return (
    <div className="drawer-backdrop" onClick={() => setIsCartOpen(false)}>
      <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShoppingBag size={20} color="var(--primary-red)" />
            <h3>Shopping Cart ({cart.length})</h3>
          </div>
          <button onClick={() => setIsCartOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="drawer-body">
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#6B7280' }}>
              <ShoppingBag size={48} color="#D1D5DB" style={{ marginBottom: '12px' }} />
              <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)' }}>Your cart is empty</h4>
              <p style={{ fontSize: '13px', marginTop: '6px' }}>Explore 210,000+ top video courses on Redemy!</p>
            </div>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item.id} className="cart-item-card">
                  <img src={item.image} alt={item.title} />
                  <div style={{ flex: 1 }}>
                    <div className="cart-item-title">{item.title}</div>
                    <div style={{ fontSize: '12px', color: '#6B7280' }}>By {item.instructor}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                      <span style={{ fontWeight: '800', color: 'var(--primary-red)', fontSize: '15px' }}>₹{item.price}</span>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        style={{ color: '#EF4444', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}
                      >
                        <Trash2 size={14} /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Coupon Box */}
              <div style={{ background: 'var(--bg-alt)', padding: '16px', borderRadius: '10px', marginTop: '20px' }}>
                <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Tag size={14} color="var(--primary-red)" /> Apply Promo Coupon
                </div>
                <div className="coupon-input-group">
                  <input 
                    type="text" 
                    placeholder="Enter REDEMY2026 or FLASH80"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                  />
                  <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '13px' }} onClick={() => applyCoupon(couponInput)}>
                    Apply
                  </button>
                </div>

                {appliedCoupon && (
                  <div style={{ fontSize: '12px', color: '#059669', fontWeight: '700' }}>
                    ✓ Applied {appliedCoupon.code} ({appliedCoupon.discountPercent}% OFF)
                  </div>
                )}
                {couponError && (
                  <div style={{ fontSize: '12px', color: '#DC2626', fontWeight: '600', marginTop: '4px' }}>
                    {couponError}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="drawer-footer">
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#6B7280', marginBottom: '4px' }}>
              <span>Subtotal:</span>
              <span>₹{rawSubtotal.toFixed(2)}</span>
            </div>
            {discountAmount > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#059669', fontWeight: '700', marginBottom: '4px' }}>
                <span>Coupon Discount ({appliedCoupon.discountPercent}%):</span>
                <span>-₹{discountAmount.toFixed(2)}</span>
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '20px', fontWeight: '800', color: 'var(--text-dark)', margin: '10px 0' }}>
              <span>Total:</span>
              <span style={{ color: 'var(--primary-red)' }}>₹{cartTotal.toFixed(2)}</span>
            </div>

            <button 
              className="btn-primary" 
              style={{ width: '100%', padding: '14px', fontSize: '15px' }} 
              onClick={() => {
                setIsCartOpen(false);
                navigateTo('checkout');
              }}
            >
              Proceed to Checkout <ArrowRight size={18} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '12px', color: '#6B7280', marginTop: '10px' }}>
              <ShieldCheck size={15} color="#059669" /> 30-Day Money Back Guarantee
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
