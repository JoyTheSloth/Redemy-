import React, { useState } from 'react';
import { PlayCircle, Heart, Award, BookOpen, Clock } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { COURSES } from '../data/mockData';
import { CourseCard } from '../components/CourseCard';
import './Pages.css';

export const MyLearningPage = () => {
  const { enrolledCourses, wishlist, setActiveVideoCourse, navigateTo } = useApp();
  const [activeTab, setActiveTab] = useState('enrolled'); // 'enrolled' | 'wishlist'

  const enrolledDetailed = enrolledCourses.map((e) => {
    const full = COURSES.find((c) => c.id === e.courseId) || COURSES[0];
    return { ...full, progress: e.progress, lastLesson: e.lastLesson };
  });

  return (
    <div>
      {/* Header Banner */}
      <div className="mylearning-header">
        <div className="container">
          <h1 className="mylearning-title">My Learning</h1>

          <div className="mylearning-tabs">
            <button 
              className={`mylearning-tab-btn ${activeTab === 'enrolled' ? 'active' : ''}`}
              onClick={() => setActiveTab('enrolled')}
            >
              All Courses ({enrolledDetailed.length})
            </button>
            <button 
              className={`mylearning-tab-btn ${activeTab === 'wishlist' ? 'active' : ''}`}
              onClick={() => setActiveTab('wishlist')}
            >
              Wishlist ({wishlist.length})
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ padding: '40px 0 80px 0' }}>
        <div className="container">
          {activeTab === 'enrolled' && (
            <div>
              {enrolledDetailed.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-alt)', borderRadius: '12px' }}>
                  <BookOpen size={48} color="#9CA3AF" style={{ marginBottom: '12px' }} />
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)' }}>No enrolled courses yet</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', margin: '8px 0 20px 0' }}>Explore top video courses on Redemy and start learning today!</p>
                  <button className="btn-primary" onClick={() => navigateTo('category')}>
                    Browse Courses
                  </button>
                </div>
              ) : (
                <div className="course-grid-layout">
                  {enrolledDetailed.map((course) => (
                    <div key={course.id} className="mylearning-card">
                      <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                        <img src={course.image} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div className="course-play-overlay" style={{ opacity: 1 }}>
                          <button 
                            className="play-icon-circle"
                            onClick={() => setActiveVideoCourse(course)}
                          >
                            <PlayCircle size={28} fill="white" />
                          </button>
                        </div>
                      </div>

                      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <h4 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '4px', lineHeight: '1.3' }}>
                          {course.title}
                        </h4>
                        <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>
                          {course.instructor}
                        </div>

                        {/* Progress track */}
                        <div style={{ marginTop: 'auto' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '700' }}>
                            <span style={{ color: 'var(--primary-red)' }}>{course.progress}% complete</span>
                            <span style={{ color: '#6B7280' }}>Overall progress</span>
                          </div>
                          <div className="progress-bar-track">
                            <div className="progress-bar-fill" style={{ width: `${course.progress}%` }} />
                          </div>

                          <div style={{ fontSize: '11px', color: '#6B7280', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '12px' }}>
                            <Clock size={12} /> Last: {course.lastLesson}
                          </div>

                          <button 
                            className="btn-primary" 
                            style={{ width: '100%', padding: '10px', fontSize: '13px' }}
                            onClick={() => setActiveVideoCourse(course)}
                          >
                            Continue Learning
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'wishlist' && (
            <div>
              {wishlist.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-alt)', borderRadius: '12px' }}>
                  <Heart size={48} color="#9CA3AF" style={{ marginBottom: '12px' }} />
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)' }}>Your wishlist is empty</h3>
                </div>
              ) : (
                <div className="course-grid-layout">
                  {wishlist.map((course, idx) => (
                    <CourseCard key={course.id} course={course} index={idx} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
