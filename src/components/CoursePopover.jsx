import React from 'react';
import { Check, Heart, PlayCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const CoursePopover = ({ course, position = 'right' }) => {
  const { addToCart, wishlist, toggleWishlist, setActiveCourseDetail, setActiveVideoCourse } = useApp();
  const isWishlisted = wishlist.some((item) => item.id === course.id);

  return (
    <div className={`popover-card position-${position}`}>
      <h4 className="popover-title">{course.title}</h4>
      
      <div className="popover-meta-row">
        <span>Updated {course.updatedDate}</span>
        <span>• {course.hours}</span>
        <span>• {course.level}</span>
      </div>

      <p className="popover-subtitle">{course.subtitle}</p>

      <div className="popover-highlights">
        <h5>What you'll learn:</h5>
        {course.highlights.slice(0, 3).map((item, idx) => (
          <div key={idx} className="popover-highlight-item">
            <Check size={14} color="var(--primary-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="popover-actions">
        <button 
          className="btn-primary" 
          style={{ flex: 1, padding: '10px' }}
          onClick={(e) => {
            e.stopPropagation();
            addToCart(course);
          }}
        >
          Add to Cart
        </button>

        <button 
          className="btn-outline-red" 
          style={{ padding: '9px 12px' }}
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(course);
          }}
          title="Add to Wishlist"
        >
          <Heart size={18} fill={isWishlisted ? "var(--primary-red)" : "none"} />
        </button>
      </div>

      <button 
        style={{ 
          width: '100%', 
          marginTop: '10px', 
          fontSize: '13px', 
          fontWeight: '700', 
          color: 'var(--text-dark)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          padding: '6px'
        }}
        onClick={(e) => {
          e.stopPropagation();
          setActiveVideoCourse(course);
        }}
      >
        <PlayCircle size={16} color="var(--primary-red)" /> Preview Video Classroom
      </button>
    </div>
  );
};
