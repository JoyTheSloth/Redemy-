import React, { useState } from 'react';
import { 
  Search, ShoppingCart, Heart, Bell, ChevronDown, 
  Play, Code, Briefcase, Server, Palette, TrendingUp, Cpu, User, Music,
  X, ArrowRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CATEGORIES, COURSES } from '../data/mockData';
import './Header.css';

export const Header = () => {
  const { 
    currentPage,
    navigateTo,
    cart, 
    wishlist, 
    setIsCartOpen, 
    setIsWishlistOpen,
    searchQuery, 
    setSearchQuery,
    setSelectedCategory,
    setActiveCourseDetail,
    cartTotal
  } = useApp();

  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const matchingCourses = searchQuery.trim() === '' 
    ? [] 
    : COURSES.filter(c => 
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        c.topic.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code': return <Code size={16} />;
      case 'Briefcase': return <Briefcase size={16} />;
      case 'Server': return <Server size={16} />;
      case 'Palette': return <Palette size={16} />;
      case 'TrendingUp': return <TrendingUp size={16} />;
      case 'Cpu': return <Cpu size={16} />;
      case 'User': return <User size={16} />;
      case 'Music': return <Music size={16} />;
      default: return <Code size={16} />;
    }
  };

  return (
    <header className="navbar">
      {/* Top Flash Banner */}
      <div className="nav-top-banner">
        <span>⚡ <strong>FLASH SALE</strong> | Over 210,000 top video courses starting at <strong>₹499</strong>!</span>
        <span className="highlight">USE CODE: REDEMY2026</span>
      </div>

      <div className="nav-container">
        {/* Logo */}
        <a href="#" className="logo-link" onClick={(e) => { e.preventDefault(); navigateTo('home'); }}>
          <div className="logo-badge">
            <Play size={20} fill="white" />
          </div>
          <div className="logo-text">
            Red<span>emy</span>
          </div>
        </a>

        {/* Categories Mega Dropdown */}
        <div className="categories-container" style={{ position: 'relative' }}>
          <button className="categories-btn" onClick={() => navigateTo('category')}>
            Categories <ChevronDown size={14} />
          </button>
          <div className="categories-dropdown">
            {CATEGORIES.map((cat) => (
              <div 
                key={cat.id} 
                className="category-item"
                onClick={() => navigateTo('category', cat.name)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: 'var(--primary-red)' }}>{getCategoryIcon(cat.icon)}</span>
                  {cat.name}
                </div>
                <ChevronDown size={12} style={{ transform: 'rotate(-90deg)', color: '#9CA3AF' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="search-wrapper">
          <div className="search-input-container">
            <Search size={18} color="var(--primary-red)" />
            <input 
              type="text" 
              className="search-input"
              placeholder="Search for anything (e.g. Web Dev, Python, AWS, Figma)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')}>
                <X size={16} color="#6B7280" />
              </button>
            )}
          </div>

          {/* Autocomplete Search Dropdown */}
          {isSearchFocused && matchingCourses.length > 0 && (
            <div className="search-results-dropdown">
              <div style={{ padding: '8px 16px', fontSize: '12px', fontWeight: '700', color: '#6B7280', textTransform: 'uppercase' }}>
                Found Courses ({matchingCourses.length})
              </div>
              {matchingCourses.map((course) => (
                <div 
                  key={course.id} 
                  className="search-result-item"
                  onClick={() => {
                    setActiveCourseDetail(course);
                    setSearchQuery('');
                  }}
                >
                  <img src={course.image} alt={course.title} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '600', fontSize: '13px', color: 'var(--text-dark)' }}>
                      {course.title}
                    </div>
                    <div style={{ fontSize: '12px', color: '#6B7280' }}>
                      {course.instructor} • {course.topic}
                    </div>
                  </div>
                  <div style={{ fontWeight: '700', color: 'var(--primary-red)', fontSize: '14px' }}>
                    ₹{course.price}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Navigation Links */}
        <div className="nav-actions">
          <button 
            className={`nav-link-btn ${currentPage === 'business' ? 'active' : ''}`}
            onClick={() => navigateTo('business')}
          >
            Redemy Business
          </button>
          <button 
            className={`nav-link-btn ${currentPage === 'teach' ? 'active' : ''}`}
            onClick={() => navigateTo('teach')}
          >
            Teach on Redemy
          </button>
          <button 
            className={`nav-link-btn ${currentPage === 'my-learning' ? 'active' : ''}`}
            onClick={() => navigateTo('my-learning')}
          >
            My Learning
          </button>

          {/* Wishlist */}
          <button 
            className="icon-badge-btn" 
            title="Wishlist" 
            onClick={() => setIsWishlistOpen(true)}
          >
            <Heart size={20} />
            {wishlist.length > 0 && (
              <span className="count-badge">{wishlist.length}</span>
            )}
          </button>

          {/* Cart with Hover Popover */}
          <div className="cart-hover-wrapper">
            <button 
              className="icon-badge-btn" 
              title="Shopping Cart" 
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart size={20} />
              {cart.length > 0 && (
                <span className="count-badge">{cart.length}</span>
              )}
            </button>

            {/* Cart Hover Drawer */}
            <div className="cart-popover">
              <div style={{ fontWeight: '700', fontSize: '15px', marginBottom: '12px', color: 'var(--text-dark)' }}>
                Your Cart ({cart.length})
              </div>
              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '20px 0', color: '#6B7280', fontSize: '13px' }}>
                  Your cart is empty. Keep exploring!
                </div>
              ) : (
                <>
                  {cart.slice(0, 3).map((item) => (
                    <div key={item.id} className="cart-popover-item">
                      <img src={item.image} alt={item.title} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: '600', fontSize: '12px', lineHeight: '1.3' }}>
                          {item.title}
                        </div>
                        <div style={{ fontSize: '11px', color: '#6B7280' }}>
                          {item.instructor}
                        </div>
                        <div style={{ fontWeight: '700', color: 'var(--primary-red)', fontSize: '13px', marginTop: '2px' }}>
                          ₹{item.price}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '15px', marginTop: '8px', marginBottom: '12px' }}>
                    <span>Total:</span>
                    <span style={{ color: 'var(--primary-red)' }}>₹{cartTotal.toFixed(2)}</span>
                  </div>
                  <button className="btn-primary" style={{ width: '100%', padding: '10px' }} onClick={() => navigateTo('checkout')}>
                    Checkout Now <ArrowRight size={16} />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* User Auth CTAs */}
          <div style={{ display: 'flex', gap: '8px', marginLeft: '4px' }}>
            <button className="btn-outline" style={{ padding: '8px 16px', fontSize: '13px' }}>
              Log in
            </button>
            <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
