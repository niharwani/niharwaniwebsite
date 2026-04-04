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
    period: 'July 2025 – March 2026',
    description: [
      'Cleaned and managed student datasets (5,000+ records) achieving 98%+ data accuracy for key institutional decisions.',
      'Engineered Power BI and Excel dashboards visualising student success metrics and post-graduation outcomes across 4+ departments, adopted for AACSB accreditation reporting.',
      'Partnered with VP-level stakeholders and faculty to translate data insights into actionable advising strategies, cutting data-to-decision lag by 40%.',
    ],
  },
  {
    type: 'work',
    title: 'Freelance Web Developer',
    company: 'Self Employed',
    location: 'Mumbai, India',
    period: 'November 2022 – November 2024',
    description: [
      'Designed and developed custom websites and web applications for clients across e-commerce, services, and retail sectors.',
      'Managed end-to-end project delivery, client requirements, UI/UX design, development, and deployment.',
      'Built and maintained client projects using React, Next.js, Firebase, and Tailwind CSS.',
      'Delivered projects independently, managing timelines, revisions, and client communication across multiple concurrent engagements.',
    ],
  },
  {
    type: 'work',
    title: 'Software Engineer',
    company: 'Dhwani Aurica Pvt. Ltd.',
    location: 'Mumbai, India',
    period: 'September 2020 – October 2022',
    description: [
      'Built and shipped a full-featured e-commerce platform (React, Firebase, REST APIs) with payment gateway integration, inventory management, and real-time order tracking, boosting digital sales by 25%.',
      'Led end-to-end development of a telemedicine application serving 10,000+ active patients with secure login, appointment booking, and medical report sharing via Firebase Auth and Realtime DB.',
      'Reduced API response latency by 30% through query optimisation, indexed PostgreSQL schemas, and caching strategies on a high-traffic patient data service.',
      'Partnered with cross-functional non-tech teams to convert business requirements into production-grade deployable features across 3 major release cycles.',
    ],
  },
  {
    type: 'work',
    title: 'Software Engineer Intern',
    company: 'Dhwani Aurica Pvt. Ltd.',
    location: 'Mumbai, India',
    period: 'March 2020 – September 2020',
    description: [
      'Assisted in developing and testing front-end components using React and JavaScript under senior engineer guidance.',
      'Contributed to bug fixes, code reviews, and feature development across the e-commerce platform codebase.',
      'Gained hands-on experience with Firebase, REST APIs, and agile development workflows.',
    ],
  },
];

const education = [
  {
    degree: 'M.S. Computer Science & IT',
    school: 'Sacred Heart University',
    location: 'Fairfield, USA',
    period: 'Expected March 2026',
    gpa: '3.92/4.0',
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
