import React from 'react';
import { useApp } from '../context/AppContext';
import { COURSES } from '../data/mockData';
import { CourseCard } from './CourseCard';

export const CourseGrid = () => {
  const { selectedCategory, selectedTopic, searchQuery } = useApp();

  const filteredCourses = COURSES.filter((course) => {
    // Search query filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = course.title.toLowerCase().includes(q);
      const matchTopic = course.topic.toLowerCase().includes(q);
      const matchInstructor = course.instructor.toLowerCase().includes(q);
      if (!matchTitle && !matchTopic && !matchInstructor) return false;
    }

    // Category filter
    if (selectedCategory !== 'All' && course.category !== selectedCategory) {
      return false;
    }

    // Topic filter
    if (selectedTopic !== 'All' && course.topic !== selectedTopic) {
      return false;
    }

    return true;
  });

  return (
    <section className="course-grid-section">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', fontWeight: '800', color: 'var(--text-dark)' }}>
              {selectedTopic !== 'All' 
                ? `${selectedTopic} Courses` 
                : selectedCategory !== 'All' 
                  ? `${selectedCategory} Courses` 
                  : 'Top Featured Courses'}
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '4px' }}>
              Showing {filteredCourses.length} top-rated learning paths
            </p>
          </div>
        </div>

        {filteredCourses.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-alt)', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '8px' }}>
              No courses found for your search criteria
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
              Try searching for "Web Development", "Python", "AWS", or clear your filter settings.
            </p>
          </div>
        ) : (
          <div className="course-grid-layout">
            {filteredCourses.map((course, idx) => (
              <CourseCard key={course.id} course={course} index={idx} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
