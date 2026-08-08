import React from 'react';
import { useApp } from '../context/AppContext';
import { POPULAR_TOPICS } from '../data/mockData';
import './CategoryPills.css';

export const CategoryPills = () => {
  const { selectedTopic, setSelectedTopic, selectedCategory, setSelectedCategory } = useApp();

  return (
    <div className="category-pills-section">
      <div className="container">
        <h2 className="pills-heading">A broad selection of courses</h2>
        <p className="pills-subheading">
          Choose from 210,000 online video courses with new additions published every month
        </p>

        <div className="pills-container">
          <button 
            className={`pill-button ${selectedTopic === 'All' && selectedCategory === 'All' ? 'active' : ''}`}
            onClick={() => {
              setSelectedTopic('All');
              setSelectedCategory('All');
            }}
          >
            All Courses
          </button>
          {POPULAR_TOPICS.map((topic) => (
            <button 
              key={topic}
              className={`pill-button ${selectedTopic === topic ? 'active' : ''}`}
              onClick={() => setSelectedTopic(topic)}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
