'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, BarChart3, Lightbulb, Rocket } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Building scalable web applications with modern technologies',
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transforming complex data into actionable insights',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Creating innovative solutions to real-world challenges',
    },
    {
      icon: Rocket,
      title: 'Continuous Learner',
      description: 'Always exploring new technologies and methodologies',
    },
  ];

  return (
    <section id="about" className="py-8 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-gray-300 leading-relaxed">
              I'm a <span className="text-white font-semibold">Software Engineer and Data Analyst</span> passionate about creating
              seamless digital experiences and extracting meaningful insights from data. With a strong foundation in
              full-stack development and data science, I specialize in building scalable applications that solve real-world problems.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently pursuing my <span className="text-white font-semibold">Master's in Computer Science & Information Technology</span> at
              Sacred Heart University, I bring hands-on experience in developing fintech platforms, machine learning solutions,
              and e-commerce systems. My work combines technical expertise with a keen eye for user experience and data-driven decision making.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding or analyzing data, I'm exploring new technologies, contributing to open-source projects,
              and continuously expanding my skill set through certifications and hands-on learning.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors"
              >
                <item.icon className="w-8 h-8 mb-3 text-purple-400" />
                <h3 className="text-sm font-bold text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
