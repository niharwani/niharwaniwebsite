'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateVisibility = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Hide if scrolled more than one viewport height or near bottom
      const shouldShow = scrollPosition < windowHeight &&
                        (documentHeight - scrollPosition - windowHeight) > 100;
      setIsVisible(shouldShow);
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
      className="hidden md:flex fixed bottom-8 right-8 z-50 items-center justify-center w-12 h-12 bg-gray-900/80 backdrop-blur-sm border border-gray-700 hover:border-gray-600 rounded-full cursor-pointer transition-all hover:scale-110 group"
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
      aria-label="Scroll down"
    >
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
      </motion.div>
    </motion.button>
  );
}
