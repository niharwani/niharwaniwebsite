'use client';

import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiC,
  SiCplusplus,
} from 'react-icons/si';
import { FaAws, FaChartBar } from 'react-icons/fa';

const techIcons = [
  { name: 'C', color: '#A8B9CC', Icon: SiC },
  { name: 'C++', color: '#00599C', Icon: SiCplusplus },
  { name: 'Python', color: '#3776AB', Icon: SiPython },
  { name: 'React', color: '#61DAFB', Icon: SiReact },
  { name: 'Next.js', color: '#FFFFFF', Icon: SiNextdotjs },
  { name: 'TypeScript', color: '#3178C6', Icon: SiTypescript },
  { name: 'JavaScript', color: '#F7DF1E', Icon: SiJavascript },
  { name: 'Tailwind', color: '#06B6D4', Icon: SiTailwindcss },
  { name: 'Firebase', color: '#FFCA28', Icon: SiFirebase },
  { name: 'AWS', color: '#FF9900', Icon: FaAws },
  { name: 'PostgreSQL', color: '#4169E1', Icon: SiPostgresql },
  { name: 'Docker', color: '#2496ED', Icon: SiDocker },
  { name: 'Git', color: '#F05032', Icon: SiGit },
  { name: 'Power BI', color: '#F2C811', Icon: FaChartBar },
];

function DockIcon({ tech, mouseX }: { tech: typeof techIcons[0]; mouseX: MotionValue<number> }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [60, 100, 60]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  // Play hover sound
  const playHoverSound = () => {
    // Create a simple "pop" sound using Web Audio API
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.22, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    playHoverSound();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-end justify-center"
    >
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        className="absolute -top-12 bg-gray-900/95 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none border border-gray-700"
      >
        {tech.name}
      </motion.div>

      {/* Icon */}
      <motion.div
        className="w-full aspect-square bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 flex items-center justify-center cursor-pointer hover:border-gray-600 transition-colors"
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        style={{ color: tech.color }}
      >
        <tech.Icon className="w-10 h-10" />
      </motion.div>
    </motion.div>
  );
}

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const mouseX = useMotionValue(Infinity);

  return (
    <section className="py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Mobile: Simple Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-4 sm:grid-cols-6 gap-6 md:hidden"
        >
          {techIcons.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              className="flex flex-col items-center gap-2"
            >
              <div
                className="w-14 h-14 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 flex items-center justify-center"
                style={{ color: tech.color }}
              >
                <tech.Icon className="w-7 h-7" />
              </div>
              <span className="text-[10px] text-gray-400 text-center">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop: Dock Container */}
        <motion.div
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto w-fit hidden md:block"
        >
          <div className="flex items-end gap-4 h-[100px]">
            {techIcons.map((tech) => (
              <DockIcon key={tech.name} tech={tech} mouseX={mouseX} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
