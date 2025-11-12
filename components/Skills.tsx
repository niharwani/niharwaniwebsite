'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Programming & Tools',
    skills: [
      'Python', 'SQL', 'Java', 'HTML', 'CSS', 'JavaScript', 'TypeScript',
      'Git', 'REST APIs', 'Firebase', 'Supabase', 'Next.js', 'React',
      'Tailwind CSS', 'Shadcn/UI'
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Data Science & Analysis',
    skills: [
      'Data Cleaning', 'EDA', 'Feature Engineering', 'Statistical Analysis',
      'A/B Testing', 'Data Visualization', 'Time Series Analysis',
      'Power BI', 'Tableau', 'BigQuery'
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Cloud & Infrastructure',
    skills: [
      'AWS', 'Azure', 'Google Cloud Platform', 'Firebase Auth',
      'PostgreSQL', 'Realtime DB', 'CI/CD', 'Docker'
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'AdTech & Web',
    skills: [
      'HTTP', 'Web Protocols', 'Google Ads', 'API Integration',
      'Web Analytics', 'User Behavior Tracking'
    ],
    color: 'from-orange-500 to-red-500',
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-8 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            A diverse toolkit spanning full-stack development, data science, and cloud technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6"
            >
                <h3 className={`text-lg font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.02,
                        duration: 0.3,
                      }}
                      whileHover={{ scale: 1.03, y: -1 }}
                      className="px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-full text-xs text-gray-300 hover:border-gray-600 hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
