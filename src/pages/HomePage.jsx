import React from 'react';
import { HeroBanner } from '../components/HeroBanner';
import { CategoryPills } from '../components/CategoryPills';
import { CourseGrid } from '../components/CourseGrid';
import { ReviewsSection } from '../components/ReviewsSection';

export const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <CategoryPills />
      <CourseGrid />
      <ReviewsSection />
    </>
  );
};
