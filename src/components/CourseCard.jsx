import React, { useState, useRef } from 'react';
import { Star, Heart, Play } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CoursePopover } from './CoursePopover';
import './CourseCard.css';

export const CourseCard = ({ course, index }) => {
  const { wishlist, toggleWishlist, setActiveCourseDetail } = useApp();
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeout = useRef(null);

  const isWishlisted = wishlist.some((item) => item.id === course.id);
  const popoverPosition = (index % 4 >= 2) ? 'left' : 'right';

  const handleMouseEnter = () => {
    hoverTimeout.current = setTimeout(() => {
      setIsHovered(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setIsHovered(false);
  };

  return (
    <div 
      className="course-card-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="course-card" onClick={() => setActiveCourseDetail(course)}>
        <div className="course-card-img-container">
          <img src={course.image} alt={course.title} />
          
          <div className="course-play-overlay">
            <div className="play-icon-circle">
              <Play size={22} fill="white" style={{ marginLeft: '2px' }} />
            </div>
          </div>

          <button 
            className={`wishlist-card-btn ${isWishlisted ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(course);
            }}
          >
            <Heart size={16} fill={isWishlisted ? "var(--primary-red)" : "none"} />
          </button>
        </div>

        <div className="course-card-body">
          <h3 className="course-card-title">{course.title}</h3>
          <p className="course-card-instructor">{course.instructor}</p>

          <div className="course-rating-row">
            <span className="rating-score">{course.rating.toFixed(1)}</span>
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={13} 
                  fill={i < Math.floor(course.rating) ? "var(--star-gold)" : "none"} 
                  color="var(--star-gold)" 
                />
              ))}
            </div>
            <span className="rating-count">({course.reviewsCount.toLocaleString()})</span>
          </div>

          <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
            {course.bestseller && (
              <span className="badge-bestseller">Bestseller</span>
            )}
            {course.hotAndNew && (
              <span className="badge-hot">Hot & New</span>
            )}
          </div>

          <div className="course-price-row">
            <span className="current-price">₹{course.price}</span>
            <span className="original-price">₹{course.originalPrice}</span>
          </div>
        </div>
      </div>

      {/* Udemy Signature Hover Popover */}
      {isHovered && <CoursePopover course={course} position={popoverPosition} />}
    </div>
  );
};
