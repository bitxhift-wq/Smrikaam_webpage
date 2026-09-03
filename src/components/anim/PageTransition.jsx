import React, { useLayoutEffect, useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * Safe PageTransition component:
 * Centralized global route-change scroll manager.
 * Ensures every client-side route transition immediately starts at scroll position (0, 0).
 */
export default function PageTransition({ children }) {
  const location = useLocation();
  const navType = useNavigationType();

  // 1. Disable browser's native scroll restoration so it doesn't override SPA route scroll position
  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // 2. Reset scroll position synchronously on location change
  useLayoutEffect(() => {
    // If hash navigation (e.g. #overview), let element scroll handle it if target exists
    if (location.hash && location.hash !== '#top') {
      const targetId = location.hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'auto' });
        return;
      }
    }

    const performScrollReset = () => {
      // Standard window scroll reset
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });

      // Element fallbacks for cross-browser support
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      if (document.body) {
        document.body.scrollTop = 0;
      }
    };

    // Immediate synchronous reset before paint
    performScrollReset();

    // Secondary frame check in case of dynamic DOM layout shifts or async image loads
    const timer = setTimeout(() => {
      performScrollReset();
    }, 0);

    return () => clearTimeout(timer);
  }, [location.pathname, location.search, location.key, navType]);

  return <>{children}</>;
}

