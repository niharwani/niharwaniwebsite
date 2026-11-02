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
      title: 'ETL Pipelines',
      description: 'Building production ETLs with Python, Polars, and SQL for BFSI clients',
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Turning complex datasets into regulatory-grade, decision-ready outputs',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Resolving data-quality defects and reconciliation gaps at scale',
    },
    {
      icon: Rocket,
      title: 'Full-Stack Background',
      description: 'Software engineering roots in React, Next.js, Flask, and REST APIs',
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
              I'm a <span className="text-white font-semibold">Data Engineer</span> with 3+ years of experience across
              data engineering, software development, and analytics. Currently a <span className="text-white font-semibold">Data Management
              Specialist at Acies LLP</span>, I build Python, Polars, and SQL-based ETL pipelines for financial services clients
              including Aditya Birla Capital, InCred, Credila, Toyota Financial Services, and Al Ahli Bank of Kuwait.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I hold an <span className="text-white font-semibold">M.S. in Computer Science (GPA 3.92/4.0)</span> from
              Sacred Heart University. Prior to data engineering, I shipped transaction and inventory pipelines
              for an e-commerce platform that supported a 25% increase in digital sales, and built data pipelines
              for a telemedicine platform serving 10,000+ patients.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I enjoy solving complex data problems — reconciliation defects, schema mismatches, regulatory outputs —
              and translating them into solutions that produce measurable business value.
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
