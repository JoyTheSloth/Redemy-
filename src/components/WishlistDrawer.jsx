import React from 'react';
import { X, Heart, Trash2, ShoppingCart } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Drawers.css';

export const WishlistDrawer = () => {
  const { isWishlistOpen, setIsWishlistOpen, wishlist, toggleWishlist, addToCart } = useApp();

  if (!isWishlistOpen) return null;

  return (
    <div className="drawer-backdrop" onClick={() => setIsWishlistOpen(false)}>
      <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Heart size={20} fill="var(--primary-red)" color="var(--primary-red)" />
            <h3>My Wishlist ({wishlist.length})</h3>
          </div>
          <button onClick={() => setIsWishlistOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="drawer-body">
          {wishlist.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#6B7280' }}>
              <Heart size={48} color="#D1D5DB" style={{ marginBottom: '12px' }} />
              <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-dark)' }}>Your wishlist is empty</h4>
              <p style={{ fontSize: '13px', marginTop: '6px' }}>Save courses you want to take later!</p>
            </div>
          ) : (
            <div>
              {wishlist.map((item) => (
                <div key={item.id} className="cart-item-card">
                  <img src={item.image} alt={item.title} />
                  <div style={{ flex: 1 }}>
                    <div className="cart-item-title">{item.title}</div>
                    <div style={{ fontSize: '12px', color: '#6B7280' }}>By {item.instructor}</div>
                    <div style={{ fontWeight: '800', color: 'var(--text-dark)', fontSize: '15px', marginTop: '4px' }}>
                      ₹{item.price}
                    </div>

                    <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                      <button 
                        className="btn-primary" 
                        style={{ padding: '6px 12px', fontSize: '12px' }}
                        onClick={() => addToCart(item)}
                      >
                        <ShoppingCart size={13} /> Add to Cart
                      </button>
                      <button 
                        style={{ color: '#6B7280', padding: '6px', fontSize: '12px' }}
                        onClick={() => toggleWishlist(item)}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
