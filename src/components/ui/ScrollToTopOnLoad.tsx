import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnLoad: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top immediately when component mounts (initial page load)
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Scroll to top whenever the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Handle page refresh/reload
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    // Add event listener for page unload
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // This component doesn't render anything
  return null;
};

export default ScrollToTopOnLoad;