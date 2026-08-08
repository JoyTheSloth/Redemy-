import React, { useState } from 'react';
import { 
  X, Play, Pause, Volume2, Maximize, CheckCircle2, 
  Circle, Award, MessageSquare, Download, Share2, ArrowRight 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import './VideoPlayerModal.css';

export const VideoPlayerModal = () => {
  const { activeVideoCourse, setActiveVideoCourse, addToast } = useApp();
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([0]); // Default 1st lesson completed
  const [playbackSpeed, setPlaybackSpeed] = useState('1.0x');
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'qa' | 'resources' | 'certificate'

  if (!activeVideoCourse) return null;

  const course = activeVideoCourse;
  const currentLesson = course.syllabus[0]?.lessons[activeLessonIndex] || {
    title: '1. Welcome to the Course & Environment Setup',
    duration: '12:40'
  };

  const totalLessons = course.syllabus.reduce((acc, s) => acc + s.lessons.length, 0);
  const progressPercent = Math.round((completedLessons.length / totalLessons) * 100);

  const toggleLessonComplete = (idx) => {
    if (completedLessons.includes(idx)) {
      setCompletedLessons(completedLessons.filter((i) => i !== idx));
    } else {
      setCompletedLessons([...completedLessons, idx]);
      addToast(`Completed lesson: "${currentLesson.title}"!`, 'success');
    }
  };

  return (
    <div className="lms-modal-overlay">
      {/* Top Header Bar */}
      <div className="lms-top-bar">
        <div className="lms-title">
          <span style={{ color: 'var(--primary-red)', fontWeight: '800' }}>Redemy Studio</span>
          <span style={{ opacity: 0.4 }}>|</span>
          <span>{course.title}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div className="lms-progress-pill">
            {progressPercent}% Complete ({completedLessons.length}/{totalLessons})
          </div>
          <button onClick={() => setActiveVideoCourse(null)} style={{ color: 'white' }}>
            <X size={24} />
          </button>
        </div>
      </div>

      {/* LMS Layout Grid */}
      <div className="lms-layout">
        {/* Left Video Player Column */}
        <div className="lms-video-column">
          <div className="lms-screen-wrapper">
            <img 
              src={course.image} 
              alt={course.title} 
              className="lms-screen-placeholder"
            />
            
            <div 
              className="lms-play-overlay-button"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={36} fill="white" /> : <Play size={36} fill="white" style={{ marginLeft: '4px' }} />}
            </div>

            {/* Video Watermark Badge */}
            <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(0,0,0,0.6)', color: 'white', padding: '6px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: '700' }}>
              Lesson: {currentLesson.title}
            </div>
          </div>

          {/* Controls Bar */}
          <div className="lms-controls-bar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button onClick={() => setIsPlaying(!isPlaying)} style={{ color: 'white' }}>
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <Volume2 size={20} />
              <span style={{ fontSize: '13px', color: '#9CA3AF' }}>03:45 / {currentLesson.duration}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <button 
                style={{ fontSize: '13px', fontWeight: '700', color: 'white', background: '#374151', padding: '4px 10px', borderRadius: '4px' }}
                onClick={() => {
                  const speeds = ['0.75x', '1.0x', '1.25x', '1.5x', '2.0x'];
                  const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
                  setPlaybackSpeed(speeds[nextIdx]);
                }}
              >
                Speed: {playbackSpeed}
              </button>
              <Maximize size={20} />
            </div>
          </div>

          {/* Bottom Tabs */}
          <div style={{ padding: '24px', background: '#111827', flex: 1 }}>
            <div style={{ display: 'flex', gap: '20px', borderBottom: '1px solid #1F2937', paddingBottom: '12px', marginBottom: '20px' }}>
              <button 
                style={{ color: activeTab === 'overview' ? 'var(--primary-red)' : '#9CA3AF', fontWeight: '700', fontSize: '14px' }}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button 
                style={{ color: activeTab === 'qa' ? 'var(--primary-red)' : '#9CA3AF', fontWeight: '700', fontSize: '14px' }}
                onClick={() => setActiveTab('qa')}
              >
                Q&A Forum
              </button>
              <button 
                style={{ color: activeTab === 'certificate' ? 'var(--primary-red)' : '#9CA3AF', fontWeight: '700', fontSize: '14px' }}
                onClick={() => setActiveTab('certificate')}
              >
                Certificate
              </button>
            </div>

            {activeTab === 'overview' && (
              <div style={{ color: '#D1D5DB' }}>
                <h3 style={{ color: 'white', fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
                  About this Lecture
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
                  {course.subtitle} In this lesson, we cover hands-on implementation, modern patterns, and production deployment checklists.
                </p>
              </div>
            )}

            {activeTab === 'qa' && (
              <div style={{ color: '#D1D5DB' }}>
                <h4 style={{ color: 'white', fontSize: '16px', fontWeight: '700', marginBottom: '12px' }}>
                  Student Discussion Q&A
                </h4>
                <div style={{ background: '#1F2937', padding: '12px', borderRadius: '8px', marginBottom: '12px' }}>
                  <div style={{ fontWeight: '700', fontSize: '13px', color: 'var(--primary-red)' }}>David K. • 2 hours ago</div>
                  <div style={{ fontSize: '13px', marginTop: '4px' }}>How do we configure the API endpoint environment variable for production?</div>
                </div>
              </div>
            )}

            {activeTab === 'certificate' && (
              <div className="certificate-preview-box">
                <Award size={48} color="var(--primary-red)" style={{ marginBottom: '12px' }} />
                <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '6px' }}>Redemy Certificate of Completion</h3>
                <p style={{ fontSize: '14px', color: '#9CA3AF', marginBottom: '16px' }}>
                  Complete 100% of lectures to unlock your shareable PDF Certificate.
                </p>
                <button 
                  className="btn-primary"
                  onClick={() => addToast('🏆 Certificate generated! Ready for download & LinkedIn.', 'success')}
                >
                  Download Certificate (PDF)
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Syllabus Sidebar */}
        <div className="lms-sidebar-column">
          <div className="lms-sidebar-header">
            Course Outline
          </div>

          {course.syllabus[0]?.lessons.map((les, idx) => {
            const isCompleted = completedLessons.includes(idx);
            const isActive = activeLessonIndex === idx;

            return (
              <div 
                key={idx} 
                className={`lms-lesson-row ${isActive ? 'active' : ''}`}
                onClick={() => setActiveLessonIndex(idx)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLessonComplete(idx);
                    }}
                    style={{ color: isCompleted ? 'var(--primary-red)' : '#6B7280' }}
                  >
                    {isCompleted ? <CheckCircle2 size={18} fill="var(--primary-red)" color="white" /> : <Circle size={18} />}
                  </button>
                  <span>{les.title}</span>
                </div>
                <span style={{ fontSize: '12px', color: '#9CA3AF' }}>{les.duration}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
