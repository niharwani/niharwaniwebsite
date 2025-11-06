'use client';

import { motion, useScroll, useMotionValue, useAnimationFrame, useTransform } from 'framer-motion';
import { Globe, Briefcase } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

export default function Hero() {
  const ref = useRef(null);
  // Calculate segment width based on viewport - responsive for mobile and desktop
  const getSegmentWidth = () => {
    if (typeof window === 'undefined') return 700;
    const vw = window.innerWidth;
    if (vw < 640) return vw * 1.2; // Mobile: 20vw text × ~6 chars ≈ 120vw
    if (vw < 768) return vw * 1.0; // Small tablet: 16vw text
    if (vw < 1024) return vw * 0.7; // Tablet: 12vw text
    return vw * 0.6; // Desktop: 10vw text
  };

  const [segmentWidth, setSegmentWidth] = useState(getSegmentWidth());
  const baseX = useMotionValue(-25 * segmentWidth);
  const [direction, setDirection] = useState(-1); // -1 = right, 1 = left
  const prevScrollY = useRef(0);

  const { scrollY } = useScroll();

  // Update segmentWidth on resize
  useEffect(() => {
    const handleResize = () => {
      const newWidth = getSegmentWidth();
      setSegmentWidth(newWidth);
      baseX.set(-25 * newWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Icon rotation based on scroll
  const iconRotation = useTransform(scrollY, [0, 1000], [0, 360]);

  // Auto-scroll animation - continuous infinite loop
  useAnimationFrame((t, delta) => {
    const currentScrollY = scrollY.get();
    const diff = currentScrollY - prevScrollY.current;

    // Change direction based on scroll
    if (diff > 0) {
      // Scrolling down = move right
      setDirection(-1);
    } else if (diff < 0) {
      // Scrolling up = move left
      setDirection(1);
    }

    prevScrollY.current = currentScrollY;

    // Base speed - responsive to screen size
    const getSpeed = () => {
      if (typeof window === 'undefined') return 1.5;
      const vw = window.innerWidth;
      if (vw < 640) return 0.5; // Much slower on mobile
      if (vw < 768) return 0.8; // Slower on small tablets
      if (vw < 1024) return 1.2; // Moderate on tablets
      return 1.5; // Normal on desktop
    };

    const baseSpeed = getSpeed();
    const moveBy = direction * baseSpeed;

    // Get current position and update
    let currentX = baseX.get() + moveBy;

    // Wrap around for seamless infinite loop in both directions
    // When moving too far left (scrolling right)
    if (currentX <= -40 * segmentWidth) {
      currentX += segmentWidth;
    }
    // When moving too far right (scrolling left)
    if (currentX >= -10 * segmentWidth) {
      currentX -= segmentWidth;
    }

    baseX.set(currentX);
  });

  return (
    <section ref={ref} id="home" className="min-h-[75vh] md:min-h-screen relative overflow-hidden flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-[center_50%] md:bg-[center_45%]"
          style={{
            backgroundImage: 'url(/hero-bg.jpg)',
          }}
        />
        <div className="absolute inset-0 bg-black/20" /> {/* Optional overlay */}
        {/* Top gradient fade */}
        <div className="absolute inset-x-0 top-0 h-60 md:h-80 bg-gradient-to-b from-black to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Top Section - Badges */}
        <div className="w-full pt-20 md:pt-32">
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 15 }}
            className="mt-[8vh] md:mt-[10zoomvh] -ml-4 md:-ml-20"
          >
            <div className="flex items-center gap-0 bg-neutral-900 text-white rounded-full w-fit overflow-hidden">
              <div className="w-4 md:w-32"></div>
              <div className="pl-2 md:pl-8 pr-2 md:pr-6 py-2 md:py-5">
                <div className="text-xs md:text-lg font-light">Located in</div>
                <div className="text-xs md:text-lg font-light">United States</div>
              </div>
              <motion.div
                className="bg-gray-700 rounded-full p-2 md:p-5 flex items-center justify-center mr-1 md:mr-2"
                style={{ rotate: iconRotation }}
              >
                <Globe className="w-4 h-4 md:w-10 md:h-10" />
              </motion.div>
            </div>
          </motion.div>

          {/* Role Badge */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 15 }}
            className="flex justify-end mt-[20vh] md:mt-[15vh] -mr-4 md:-mr-20"
          >
            <div className="flex items-center gap-0 bg-neutral-900 text-white rounded-full w-fit overflow-hidden">
              <motion.div
                className="bg-gray-700 rounded-full p-2 md:p-5 flex items-center justify-center ml-1 md:ml-2"
                style={{ rotate: iconRotation }}
              >
                <Briefcase className="w-4 h-4 md:w-10 md:h-10" />
              </motion.div>
              <div className="pr-2 md:pr-8 pl-2 md:pl-6 py-2 md:py-5">
                <div className="text-xs md:text-lg font-light">Software Engineer</div>
                <div className="text-xs md:text-lg font-light">& Data Analyst</div>
              </div>
              <div className="w-4 md:w-32"></div>
            </div>
          </motion.div>
        </div>

        {/* Spacer to push name to bottom */}
        <div className="flex-1 min-h-[10vh] md:min-h-0" />

        {/* Large Name with Continuous Scroll - At Bottom */}
        <div className="w-full overflow-hidden pb-8 md:pb-8">
          <motion.div
            style={{ x: baseX }}
            className="flex whitespace-nowrap will-change-transform"
          >
            {[...Array(50)].map((_, i) => (
              <h1
                key={i}
                className="text-[20vw] sm:text-[16vw] md:text-[12vw] lg:text-[10vw] font-bold tracking-tight text-white flex items-center shrink-0 leading-none drop-shadow-2xl"
              >
                <span>Nihar Wani</span>
                <span className="mx-4 sm:mx-6 md:mx-8 text-white/40">•</span>
              </h1>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
