'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateVisibility = () => {
      // Check if Contact section is in view
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Hide arrow when Contact section is visible in viewport
        // Show when Contact section is below the viewport (not yet reached)
        const contactInView = rect.top < windowHeight && rect.bottom > 0;
        setIsVisible(!contactInView);
      }
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility);
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  const handleClick = () => {
    window.scrollBy({
      top: window.innerHeight * 0.8,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -20,
      }}
      transition={{ duration: 0.3 }}
      className="hidden md:block fixed bottom-8 right-8 z-50 cursor-pointer group"
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
      aria-label="Scroll down"
    >
      <motion.svg
        width="24"
        height="32"
        viewBox="0 0 24 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-gray-400 group-hover:text-white transition-colors"
      >
        {/* Arrow shaft */}
        <line x1="12" y1="0" x2="12" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        {/* Arrow head */}
        <path d="M5 17L12 24L19 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </motion.svg>
    </motion.button>
  );
}
