import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { MyLearningPage } from './pages/MyLearningPage';
import { TeachPage } from './pages/TeachPage';
import { BusinessPage } from './pages/BusinessPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { CourseDetailModal } from './components/CourseDetailModal';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { TeachModal } from './components/TeachModal';
import { BusinessModal } from './components/BusinessModal';
import { Footer } from './components/Footer';
import { CheckCircle2, Info } from 'lucide-react';
import './index.css';

const ToastOverlay = () => {
  const { toasts } = useApp();
  if (toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className="toast-item animate-fade">
          {toast.type === 'success' ? (
            <CheckCircle2 size={18} color="#10B981" />
          ) : (
            <Info size={18} color="#3B82F6" />
          )}
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
};

const PageRenderer = () => {
  const { currentPage } = useApp();

  switch (currentPage) {
    case 'category':
      return <CategoryPage />;
    case 'my-learning':
      return <MyLearningPage />;
    case 'teach':
      return <TeachPage />;
    case 'business':
      return <BusinessPage />;
    case 'checkout':
      return <CheckoutPage />;
    case 'home':
    default:
      return <HomePage />;
  }
};

const MainContent = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <PageRenderer />
      </main>
      <Footer />

      {/* Global Overlays & Modals */}
      <CourseDetailModal />
      <VideoPlayerModal />
      <CartDrawer />
      <WishlistDrawer />
      <TeachModal />
      <BusinessModal />
      <ToastOverlay />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
