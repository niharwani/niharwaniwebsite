'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import Image from 'next/image';

const experiences = [
  {
    type: 'work',
    title: 'Research & Data Analysis Assistant',
    company: 'Sacred Heart University',
    location: 'Fairfield, CT',
    period: 'July 2025 - Present',
    description: [
      'Cleaned and managed student datasets (5,000+ records) ensuring 98%+ data accuracy for key administrative decisions',
      'Built interactive dashboards in Power BI and Excel to visualize student outcomes, supporting 4+ departments',
      'Analyzed trends in student success and post-graduation paths, contributing to data-informed improvements',
      'Collaborated with faculty, career services, and tech teams to align insights with actionable strategies',
    ],
  },
  {
    type: 'work',
    title: 'Software Engineer',
    company: 'DHWANI AURICA PVT LTD',
    location: 'Mumbai, India',
    period: 'September 2020 - October 2022',
    description: [
      'Developed e-commerce web and mobile platform, increasing digital sales by 25% using React, Firebase, and REST APIs',
      'Led development of telemedicine app used by 10,000+ patients, ensuring accessibility and smooth operation',
      'Integrated secure login, booking, and report-sharing features using Firebase Auth and Realtime DB',
      'Partnered with non-tech teams to translate customer requirements into deployable tech solutions',
    ],
  },
];

const education = [
  {
    degree: 'M.S. Computer Science & IT',
    school: 'Sacred Heart University',
    location: 'Fairfield, USA',
    period: 'Expected March 2026',
    gpa: '3.89/4.0',
    logo: '/SHU Logo.png',
  },
  {
    degree: 'Bachelors of Computer Applications',
    school: 'Amity University',
    location: 'Noida, India',
    period: 'April 2024',
    gpa: '3.56/4.0',
    logo: '/Amity Logo.png',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-8 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Experience Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-sm text-gray-400 max-w-xl mx-auto">
              Building impactful solutions across healthcare, e-commerce, and education sectors
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative pl-8 md:pl-12 border-l-2 border-gray-800 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 transform -translate-x-[9px]">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600" />
                </div>

                <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-5">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="text-base text-gray-300 mb-1">
                          {exp.company}
                        </div>
                        <div className="text-xs text-gray-500">
                          {exp.location}
                        </div>
                      </div>
                      <div className="mt-2 md:mt-0 text-xs text-gray-400 md:text-right">
                        {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-1.5">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-400 text-sm">
                          <span className="text-purple-500 mr-2 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="gradient-text">Education</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -3 }}
                className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-5"
              >
                  <div className="flex items-start gap-3">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden flex items-center justify-center">
                      <Image
                        src={edu.logo}
                        alt={`${edu.school} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-white mb-1.5">
                        {edu.degree}
                      </h3>
                      <div className="text-sm text-gray-300 mb-0.5">{edu.school}</div>
                      <div className="text-xs text-gray-500 mb-2">
                        {edu.location}
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">{edu.period}</span>
                        <span className="text-purple-400 font-semibold">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    </div>
                  </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
