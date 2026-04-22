"use client";
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa"

const FooterBottom = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full py-10">
      {showBackToTop && (
        <button
          className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full z-50 cursor-pointer hover:bg-blue-600 duration-300 flex items-center justify-center"
          onClick={handleScrollToTop}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
      <p className="text-center text-gray-500 text-base">
        © {new Date().getFullYear()}. All rights reserved by Fauzan Abdul Basith
      </p>
    </div>
  );
};

export default FooterBottom;
