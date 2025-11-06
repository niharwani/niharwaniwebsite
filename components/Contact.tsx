'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SiGmail, SiLinkedin } from 'react-icons/si';
import { FaPhone } from 'react-icons/fa';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: SiGmail,
      label: 'Email',
      value: 'wani.nihar@gmail.com',
      link: 'mailto:wani.nihar@gmail.com',
      color: '#EA4335',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '(203) 243-2052',
      link: 'tel:+12032432052',
      color: '#10B981',
    },
    {
      icon: SiLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/niharwani',
      link: 'https://linkedin.com/in/niharwani',
      color: '#0A66C2',
    },
  ];

  return (
    <section id="contact" className="py-12 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/20 to-blue-900/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            Building seamless digital experiences and transforming data into actionable insights.
            Ready to bring your ideas to life.
          </p>
        </motion.div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <a
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 group"
              >
                <info.icon className="w-8 h-8 group-hover:scale-110 transition-transform" style={{ color: info.color }} />
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">{info.label}</div>
                  <div className="text-sm text-white font-medium group-hover:opacity-80 transition-opacity">{info.value}</div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Additional Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-gray-500 text-xs">
            Available for full-time opportunities
          </p>
        </motion.div>
      </div>
    </section>
  );
}
