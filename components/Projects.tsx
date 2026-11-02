'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'ETL Data Consolidation — Healthcare Clinic CRM',
    category: 'Data Engineering',
    description: 'Consolidated 25+ years of patient and sales records from dozens of disparate files into a master database (30,000+ unique records across 11 sheets). Built automated deduplication, schema standardisation, and a summary dashboard — turning a tangled legacy archive into a single source of truth with Python, Pandas, OpenPyXL, SQL, and Power BI.',
    tech: ['Python', 'Pandas', 'OpenPyXL', 'SQL', 'Power BI'],
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'MedRisk AI — Healthcare Risk Platform',
    category: 'Full-Stack · Data Pipeline',
    description: 'Full-stack clinical platform with multi-source data ingestion, NLP-powered clinical note analysis, and a patient risk stratification pipeline loading structured outputs into PostgreSQL. Combines a Next.js front end with Python NLP services and the OpenAI API.',
    tech: ['Next.js', 'Python', 'NLP', 'PostgreSQL', 'OpenAI API'],
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'NetWatch — Real-Time Network Monitoring Dashboard',
    category: 'Full-Stack Web App',
    description: 'Real-time network monitoring dashboard built with Next.js 14, TypeScript, and Tailwind CSS. Implements comprehensive network diagnostics — device ping monitoring, port scanning, TCP/HTTP connectivity tests, and DNS resolution with historical tracking — plus an intelligent alert system with configurable latency, packet loss, and availability thresholds and real-time browser notifications. Deployed on Vercel with client-side state to work around serverless limits.',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    link: 'https://netwatchbynihar.vercel.app/',
    github: 'https://github.com/niharwani/NetWatch',
    gradient: 'from-purple-500 to-indigo-500',
    image: '/projects/netwatch.png',
    objectPosition: 'object-left',
  },
  {
    title: 'FinTrack — Portfolio Manager',
    category: 'Full-Stack Web App',
    description: 'Personal finance web application built with Next.js, Supabase, and Firebase. Real-time stock tracking, portfolio management, and a custom stock screener with advanced filters. Integrates the Finnhub API for live market data with secure authentication and responsive dashboards.',
    tech: ['Next.js', 'Supabase', 'Firebase', 'Tailwind CSS', 'Finnhub API'],
    link: 'https://fintrack-by-nihar.vercel.app/',
    github: 'https://github.com/niharwani/fintrack',
    gradient: 'from-blue-500 to-cyan-500',
    image: '/projects/Fintrack.png',
    objectPosition: 'object-left',
  },
  {
    title: 'Predictive Maintenance ML Pipeline',
    category: 'Machine Learning & Data Science',
    description: 'Engineered an ML pipeline ingesting NASA CMAPSS sensor data, transforming multivariate time series into features, and serving Remaining Useful Life predictions via a Streamlit dashboard with real-time health alerts. Built with XGBoost and Pandas, deployed on Streamlit Cloud.',
    tech: ['Python', 'XGBoost', 'Streamlit', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/niharwani/predictive_maintenance',
    gradient: 'from-green-500 to-emerald-500',
    image: '/projects/Predictive Maintenance.png',
    objectPosition: 'object-left',
  },
  {
    title: 'NLP Text Summarisation Research',
    category: 'NLP · Research',
    description: 'Benchmarked 6 extractive and abstractive summarisation models on the CNN/Daily Mail dataset — BERT, BART, T5, PEGASUS, and TextRank among them. Extractive methods outperformed abstractive by ~21.6% on ROUGE. Published as an IEEE-formatted research paper.',
    tech: ['Python', 'BERT', 'BART', 'T5', 'PEGASUS', 'TextRank'],
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    title: 'E-Commerce Platform',
    category: 'Web & Mobile Development',
    description: 'Full-featured e-commerce platform with payment gateway integration, inventory management, and real-time order tracking. Built responsive web and mobile interfaces with React, Firebase, and REST APIs — supported a 25% increase in digital sales.',
    tech: ['React', 'Firebase', 'REST APIs', 'Redux'],
    link: 'https://veyrabysparklingjewelz.com/',
    gradient: 'from-yellow-500 to-orange-500',
    image: '/projects/E-Commerce Website.png',
    objectPosition: 'object-top',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="work" className="py-8 relative">
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
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden aspect-video">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={`object-cover ${project.objectPosition ?? 'object-left'}`}
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                  )}
                  {!project.image && (
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="text-center">
                        <div className={`text-xs uppercase tracking-widest mb-3 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent font-semibold`}>
                          {project.category}
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-white/90 leading-tight">
                          {project.title.split('—')[0].trim()}
                        </div>
                      </div>
                    </div>
                  )}
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
                      target="_blank"
                      rel="noopener noreferrer"
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
                      target="_blank"
                      rel="noopener noreferrer"
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
