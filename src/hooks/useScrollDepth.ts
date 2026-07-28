"use client";

import { useState, useEffect } from "react";

export function useScrollDepth(maxDepth: number = 200) {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [currentDepth, setCurrentDepth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (docHeight <= 0) return;
      
      const percent = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
      setScrollPercent(percent);
      
      // Calculate depth based on scroll position
      const depth = Math.round((percent / 100) * maxDepth);
      setCurrentDepth(depth);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [maxDepth]);

  return { scrollPercent, currentDepth };
}
