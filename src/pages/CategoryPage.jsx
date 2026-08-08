import React from 'react';
import { Star, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { COURSES, CATEGORIES } from '../data/mockData';
import { CourseCard } from '../components/CourseCard';
import './Pages.css';

export const CategoryPage = () => {
  const { 
    selectedCategory, 
    setSelectedCategory, 
    selectedTopic, 
    selectedRating, 
    setSelectedRating,
    selectedLevel,
    setSelectedLevel,
    sortBy,
    setSortBy,
    searchQuery
  } = useApp();

  let filtered = COURSES.filter((c) => {
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      if (!c.title.toLowerCase().includes(q) && !c.topic.toLowerCase().includes(q)) return false;
    }
    if (selectedCategory !== 'All' && c.category !== selectedCategory) return false;
    if (selectedTopic !== 'All' && c.topic !== selectedTopic) return false;
    if (selectedRating !== '0' && c.rating < parseFloat(selectedRating)) return false;
    if (selectedLevel !== 'All' && c.level !== selectedLevel) return false;
    return true;
  });

  // Sorting
  if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="category-page-container">
      <div className="container">
        {/* Breadcrumb */}
        <div className="category-breadcrumb">
          <span>Home</span> <ChevronRight size={14} />
          <span>Courses</span> <ChevronRight size={14} />
          <span style={{ fontWeight: '700', color: 'var(--text-dark)' }}>
            {selectedTopic !== 'All' ? selectedTopic : selectedCategory}
          </span>
        </div>

        {/* Header */}
        <div className="category-page-header">
          <h1>
            {selectedTopic !== 'All' ? `${selectedTopic} Courses` : selectedCategory !== 'All' ? `${selectedCategory} Courses` : 'All Video Courses'}
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>
            Explore top-rated online courses in {selectedCategory !== 'All' ? selectedCategory : 'Software, Tech & Business'} from expert instructors.
          </p>
        </div>

        {/* Top Control Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px', paddingBottom: '16px', borderBottom: '1px solid var(--border-light)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: '700', color: 'var(--text-dark)' }}>
            <SlidersHorizontal size={18} color="var(--primary-red)" />
            <span>Showing {filtered.length} courses</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Sort by:</span>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              style={{ border: '1px solid var(--border-medium)', padding: '8px 14px', borderRadius: '6px', fontSize: '13px', outline: 'none', background: 'white' }}
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Layout Grid (Left Sidebar + Course Grid) */}
        <div className="category-page-layout">
          {/* Left Sidebar Filter Panel */}
          <aside className="filter-sidebar">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-dark)' }}>Filter Courses</h3>
              <button 
                style={{ fontSize: '12px', color: 'var(--primary-red)', fontWeight: '700' }}
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedTopic('All');
                  setSelectedRating('0');
                  setSelectedLevel('All');
                }}
              >
                Clear all
              </button>
            </div>

            {/* Category selection */}
            <div className="filter-group">
              <h4>Categories</h4>
              <label className="filter-option">
                <input 
                  type="radio" 
                  name="cat" 
                  checked={selectedCategory === 'All'}
                  onChange={() => setSelectedCategory('All')} 
                />
                All Categories
              </label>
              {CATEGORIES.map((cat) => (
                <label key={cat.id} className="filter-option">
                  <input 
                    type="radio" 
                    name="cat" 
                    checked={selectedCategory === cat.name}
                    onChange={() => setSelectedCategory(cat.name)} 
                  />
                  {cat.name}
                </label>
              ))}
            </div>

            {/* Ratings filter */}
            <div className="filter-group">
              <h4>Ratings</h4>
              {[
                { label: '4.5 & up', val: '4.5' },
                { label: '4.0 & up', val: '4.0' },
                { label: '3.5 & up', val: '3.5' }
              ].map((r) => (
                <label key={r.val} className="filter-option">
                  <input 
                    type="radio" 
                    name="rating" 
                    checked={selectedRating === r.val}
                    onChange={() => setSelectedRating(r.val)}
                  />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--star-gold)' }}>
                    <Star size={13} fill="var(--star-gold)" />
                    <span style={{ color: 'var(--text-dark)', fontWeight: '600' }}>{r.label}</span>
                  </div>
                </label>
              ))}
            </div>

            {/* Level filter */}
            <div className="filter-group">
              <h4>Skill Level</h4>
              {['All', 'All Levels', 'Beginner', 'Intermediate'].map((lvl) => (
                <label key={lvl} className="filter-option">
                  <input 
                    type="radio" 
                    name="lvl" 
                    checked={selectedLevel === lvl}
                    onChange={() => setSelectedLevel(lvl)}
                  />
                  {lvl}
                </label>
              ))}
            </div>
          </aside>

          {/* Right Main Course Grid */}
          <main>
            {filtered.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-alt)', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)' }}>No courses match your filter options</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '6px' }}>Try resetting your ratings or category filters.</p>
              </div>
            ) : (
              <div className="course-grid-layout">
                {filtered.map((course, idx) => (
                  <CourseCard key={course.id} course={course} index={idx} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
