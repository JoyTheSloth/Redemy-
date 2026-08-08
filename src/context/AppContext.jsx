import React, { createContext, useContext, useState, useEffect } from 'react';
import { COURSES } from '../data/mockData';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Page Routing state: 'home' | 'category' | 'my-learning' | 'teach' | 'business' | 'checkout'
  const [currentPage, setCurrentPage] = useState('home');

  // Cart state
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('redemy_cart');
    return saved ? JSON.parse(saved) : [COURSES[0]];
  });

  // Wishlist state
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('redemy_wishlist');
    return saved ? JSON.parse(saved) : [COURSES[1]];
  });

  // Enrolled courses state
  const [enrolledCourses, setEnrolledCourses] = useState(() => {
    const saved = localStorage.getItem('redemy_enrolled');
    return saved ? JSON.parse(saved) : [
      { courseId: 'course-1', progress: 45, lastLesson: 'Section 2: Flexbox Layouts' },
      { courseId: 'course-2', progress: 80, lastLesson: 'Day 15: GUI Automation with Tkinter' }
    ];
  });

  // Category & Search Explorer Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [selectedRating, setSelectedRating] = useState('0');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [sortBy, setSortBy] = useState('popular');

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [activeCourseDetail, setActiveCourseDetail] = useState(null);
  const [activeVideoCourse, setActiveVideoCourse] = useState(null);
  const [isTeachModalOpen, setIsTeachModalOpen] = useState(false);
  const [isBusinessModalOpen, setIsBusinessModalOpen] = useState(false);

  // Promo Coupon state
  const [appliedCoupon, setAppliedCoupon] = useState({ code: 'REDEMY2026', discountPercent: 20 });
  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');

  // Toast notifications
  const [toasts, setToasts] = useState([]);

  const navigateTo = (page, category = 'All', topic = 'All') => {
    setCurrentPage(page);
    setSelectedCategory(category);
    setSelectedTopic(topic);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  useEffect(() => {
    localStorage.setItem('redemy_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('redemy_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('redemy_enrolled', JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  const addToCart = (course) => {
    if (!cart.some((item) => item.id === course.id)) {
      setCart([...cart, course]);
      addToast(`Added "${course.title.slice(0, 30)}..." to your cart!`, 'success');
    } else {
      setIsCartOpen(true);
    }
  };

  const removeFromCart = (courseId) => {
    setCart(cart.filter((item) => item.id !== courseId));
    addToast('Removed item from cart', 'info');
  };

  const toggleWishlist = (course) => {
    const exists = wishlist.some((item) => item.id === course.id);
    if (exists) {
      setWishlist(wishlist.filter((item) => item.id !== course.id));
      addToast('Removed from Wishlist', 'info');
    } else {
      setWishlist([...wishlist, course]);
      addToast('Added to Wishlist!', 'success');
    }
  };

  const applyCoupon = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'REDEMY2026' || cleanCode === 'REDEMY20') {
      setAppliedCoupon({ code: cleanCode, discountPercent: 20 });
      setCouponError('');
      addToast('Coupon REDEMY2026 applied! 20% discount!', 'success');
    } else if (cleanCode === 'FLASH80' || cleanCode === 'RED80') {
      setAppliedCoupon({ code: cleanCode, discountPercent: 35 });
      setCouponError('');
      addToast('Super Flash Coupon applied! 35% discount!', 'success');
    } else {
      setCouponError('Invalid coupon code. Try "REDEMY2026" or "FLASH80".');
    }
  };

  const checkout = () => {
    const newItems = cart.map(c => ({
      courseId: c.id,
      progress: 0,
      lastLesson: 'Section 1: Introduction & Environment Setup'
    }));
    setEnrolledCourses((prev) => {
      const existingIds = new Set(prev.map(p => p.courseId));
      const added = newItems.filter(item => !existingIds.has(item.courseId));
      return [...prev, ...added];
    });
    setCart([]);
    setIsCartOpen(false);
    navigateTo('my-learning');
    addToast('🎉 Payment Successful! Your new courses are now available in My Learning.', 'success');
  };

  // Price calculations in INR (₹)
  const rawSubtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const discountAmount = (rawSubtotal * (appliedCoupon ? appliedCoupon.discountPercent : 0)) / 100;
  const cartTotal = Math.max(0, rawSubtotal - discountAmount);

  return (
    <AppContext.Provider
      value={{
        currentPage,
        navigateTo,
        cart,
        wishlist,
        enrolledCourses,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        selectedTopic,
        setSelectedTopic,
        selectedRating,
        setSelectedRating,
        selectedLevel,
        setSelectedLevel,
        sortBy,
        setSortBy,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        activeCourseDetail,
        setActiveCourseDetail,
        activeVideoCourse,
        setActiveVideoCourse,
        isTeachModalOpen,
        setIsTeachModalOpen,
        isBusinessModalOpen,
        setIsBusinessModalOpen,
        appliedCoupon,
        couponInput,
        setCouponInput,
        couponError,
        applyCoupon,
        addToCart,
        removeFromCart,
        toggleWishlist,
        checkout,
        rawSubtotal,
        discountAmount,
        cartTotal,
        toasts,
        addToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
