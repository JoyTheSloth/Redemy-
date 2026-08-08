import React, { useState } from 'react';
import { 
  X, Star, Check, Play, Globe, Calendar, Award, 
  ChevronDown, ChevronUp, Lock, FileText, Heart, PlayCircle 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import './CourseDetailModal.css';

export const CourseDetailModal = () => {
  const { 
    activeCourseDetail, 
    setActiveCourseDetail, 
    setActiveVideoCourse,
    addToCart, 
    wishlist, 
    toggleWishlist,
    enrolledCourses
  } = useApp();

  const [expandedSections, setExpandedSections] = useState({ 0: true, 1: true });

  if (!activeCourseDetail) return null;

  const course = activeCourseDetail;
  const isEnrolled = enrolledCourses.includes(course.id);
  const isWishlisted = wishlist.some((item) => item.id === course.id);

  const toggleSection = (idx) => {
    setExpandedSections((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="detail-modal-overlay" onClick={() => setActiveCourseDetail(null)}>
      <div className="detail-modal-card animate-fade" onClick={(e) => e.stopPropagation()}>
        <button className="detail-modal-close-btn" onClick={() => setActiveCourseDetail(null)}>
          <X size={20} />
        </button>

        {/* Hero Section */}
        <div className="detail-hero-banner">
          <div className="detail-hero-content">
            <div style={{ display: 'flex', gap: '8px' }}>
              <span className="badge-red">{course.category}</span>
              {course.bestseller && <span className="badge-bestseller">Bestseller</span>}
            </div>

            <h1 className="detail-hero-title">{course.title}</h1>
            <p className="detail-hero-subtitle">{course.subtitle}</p>

            <div className="detail-meta-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--star-gold)' }}>
                <span style={{ fontWeight: '800', color: '#F59E0B' }}>{course.rating.toFixed(1)}</span>
                <Star size={14} fill="var(--star-gold)" />
                <span style={{ color: '#D1D5DB' }}>({course.reviewsCount.toLocaleString()} ratings)</span>
              </div>
              <div>• {course.studentsEnrolled.toLocaleString()} students</div>
            </div>

            <div className="detail-instructor-row">
              <img src={course.instructorAvatar} alt={course.instructor} />
              <div>
                <div style={{ fontSize: '12px', color: '#9CA3AF' }}>Created by</div>
                <div style={{ fontWeight: '700', fontSize: '14px' }}>{course.instructor}</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#D1D5DB', marginTop: '8px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Calendar size={14} /> Last updated {course.updatedDate}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Globe size={14} /> {course.language}
              </span>
            </div>
          </div>

          {/* Sticky Right Purchase Sidebar */}
          <div className="detail-purchase-box">
            <div className="detail-purchase-img" onClick={() => setActiveVideoCourse(course)}>
              <img src={course.image} alt={course.title} />
              <div className="course-play-overlay" style={{ opacity: 1 }}>
                <div className="play-icon-circle">
                  <Play size={24} fill="white" style={{ marginLeft: '3px' }} />
                </div>
              </div>
              <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(0,0,0,0.8)', color: 'white', fontSize: '12px', fontWeight: '700', padding: '4px 10px', borderRadius: '4px' }}>
                Preview Course
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
              <span style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-dark)' }}>₹{course.price}</span>
              <span style={{ fontSize: '16px', color: '#6B7280', textDecoration: 'line-through' }}>₹{course.originalPrice}</span>
              <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--primary-red)' }}>82% off</span>
            </div>

            {isEnrolled ? (
              <button 
                className="btn-primary" 
                style={{ width: '100%', padding: '14px' }}
                onClick={() => {
                  setActiveCourseDetail(null);
                  setActiveVideoCourse(course);
                }}
              >
                <PlayCircle size={18} /> Go to Course Player
              </button>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button 
                  className="btn-primary" 
                  style={{ width: '100%', padding: '14px' }}
                  onClick={() => addToCart(course)}
                >
                  Add to Cart
                </button>
                <button 
                  className="btn-outline" 
                  style={{ width: '100%', padding: '12px', display: 'flex', justifyContent: 'center', gap: '8px' }}
                  onClick={() => toggleWishlist(course)}
                >
                  <Heart size={18} fill={isWishlisted ? "var(--primary-red)" : "none"} color={isWishlisted ? "var(--primary-red)" : "currentColor"} />
                  {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                </button>
              </div>
            )}

            <div style={{ fontSize: '12px', color: '#6B7280', textAlign: 'center' }}>
              30-Day Money-Back Guarantee • Full Lifetime Access
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="detail-body-content">
          {/* What you'll learn */}
          <div className="learn-highlights-box">
            <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-dark)' }}>What you'll learn</h3>
            <div className="learn-highlights-grid">
              {course.highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: 'var(--text-dark)' }}>
                  <Check size={16} color="var(--primary-red)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum Accordion */}
          <div className="syllabus-accordion">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-dark)' }}>Course Content</h3>
              <div style={{ fontSize: '13px', color: '#6B7280' }}>
                {course.syllabus.length} sections • {course.lecturesCount} lectures • {course.hours}
              </div>
            </div>

            {course.syllabus.map((sec, secIdx) => (
              <div key={secIdx}>
                <div className="syllabus-section-header" onClick={() => toggleSection(secIdx)}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {expandedSections[secIdx] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    <span>{sec.sectionTitle}</span>
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: '500', color: '#6B7280' }}>
                    {sec.lessons.length} lectures • {sec.duration}
                  </span>
                </div>

                {expandedSections[secIdx] && (
                  <div className="syllabus-lessons-list">
                    {sec.lessons.map((les, lesIdx) => (
                      <div key={lesIdx} className="syllabus-lesson-item">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <FileText size={15} color="var(--primary-red)" />
                          <span>{les.title}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          {les.previewable ? (
                            <button 
                              style={{ color: 'var(--primary-red)', fontWeight: '700', fontSize: '12px', textDecoration: 'underline' }}
                              onClick={() => setActiveVideoCourse(course)}
                            >
                              Preview
                            </button>
                          ) : (
                            <Lock size={13} color="#9CA3AF" />
                          )}
                          <span style={{ fontSize: '13px', color: '#6B7280' }}>{les.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Instructor Profile */}
          <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '30px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '16px' }}>Instructor</h3>
            <div style={{ display: 'flex', gap: '20px' }}>
              <img src={course.instructorAvatar} alt={course.instructor} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--primary-red)' }}>{course.instructor}</h4>
                <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '8px' }}>{course.instructorTitle}</p>
                <p style={{ fontSize: '14px', color: 'var(--text-dark)', lineHeight: '1.6' }}>{course.instructorBio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
