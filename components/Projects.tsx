'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'FinTrack - Portfolio Manager',
    category: 'Full-Stack Web App',
    description: 'A comprehensive personal finance web application built with Next.js, Supabase, and Firebase. Features real-time stock tracking, portfolio management, and custom stock screener with advanced filters. Integrated Finnhub API for live market data with secure authentication and responsive dashboards.',
    tech: ['Next.js', 'Supabase', 'Firebase', 'Tailwind CSS', 'Finnhub API'],
    link: 'https://fintrack-by-nihar.vercel.app/',
    github: 'https://github.com/niharwani/fintrack',
    gradient: 'from-blue-500 to-cyan-500',
    image: '/projects/Fintrack.png',
  },
  {
    title: 'Predictive Maintenance ML',
    category: 'Machine Learning & Data Science',
    description: 'Machine learning solution for forecasting Remaining Useful Life (RUL) of industrial machines using NASA CMAPSS sensor data. Built with XGBoost for real-time predictions and Streamlit for interactive web interface. Features automated preprocessing, health status alerts, and data visualization dashboards deployed on Streamlit Cloud.',
    tech: ['Python', 'XGBoost', 'Streamlit', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/niharwani/predictive_maintenance',
    gradient: 'from-green-500 to-emerald-500',
    image: '/projects/Predictive Maintenance.png',
  },
  {
    title: 'E-Commerce Platform',
    category: 'Web & Mobile Development',
    description: 'Developed a full-featured e-commerce platform increasing digital sales by 25%. Built responsive web and mobile interfaces with React, integrated payment gateways, inventory management, and real-time order tracking using Firebase and REST APIs.',
    tech: ['React', 'Firebase', 'REST APIs', 'Redux'],
    link: 'https://veyrabysparklingjewelz.com/',
    gradient: 'from-yellow-500 to-orange-500',
    image: '/projects/E-Commerce Website.png',
  },
  {
    title: 'Time Series Data Visualization',
    category: 'Data Science & Analytics',
    description: 'Python-based analytical tool for time series data analysis and visualization. Performs decomposition, trend analysis, and forecasting using pandas, matplotlib, seaborn, and statsmodels. Extracts actionable insights from temporal datasets for data-driven decision making.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Statsmodels'],
    github: 'https://github.com/niharwani/TimeSeriesProject',
    gradient: 'from-orange-500 to-red-500',
    image: '/projects/Times Series Data.png',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="work" className="py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            A collection of projects that showcase my expertise in full-stack development and data analytics
          </p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              {/* Project Visual */}
              <div className="flex-1 w-full">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover ${index === 2 ? 'object-top' : 'object-left'}`}
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="flex-1 space-y-4">
                <div>
                  <div className="text-xs text-gray-500 mb-1.5">{project.category}</div>
                  <h3 className="text-2xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gray-900/50 border border-gray-800 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <span>Source Code</span>
                      <Github className="w-3.5 h-3.5" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
