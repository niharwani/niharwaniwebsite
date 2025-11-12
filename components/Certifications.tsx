'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { SiDocker, SiLinkedin, SiCoursera, SiPython, SiGoogle } from 'react-icons/si';
import { FaAws, FaMicrosoft } from 'react-icons/fa';
import { BarChart3, TrendingUp, Lightbulb, Palette, Database, Code, Terminal } from 'lucide-react';

const certifications = [
  {
    title: 'Google Analytics Certification',
    issuer: 'Google Digital Academy (Skillshop)',
    date: 'Nov 2025',
    Icon: SiGoogle,
    color: 'from-blue-500 to-green-500',
    credentialUrl: 'https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Fskillshop.credential.net%2Fe5533eb4-ac02-4cc9-9efc-8b2598c102d9&urlhash=Z2Qz&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bsy2evGEzQvOZRzOw3Z4t%2FQ%3D%3D',
  },
  {
    title: 'AWS Knowledge: Cloud Essentials',
    issuer: 'Amazon Web Services (AWS)',
    date: 'May 2025',
    Icon: FaAws,
    color: 'from-orange-500 to-yellow-500',
    credentialUrl: 'https://www.credly.com/badges/46c22192-589e-499b-a1a5-34088c5b53ab/linked_in_profile',
  },
  {
    title: 'Docker Foundations Professional Certificate',
    issuer: 'Docker, Inc',
    date: 'Mar 2025',
    Icon: SiDocker,
    color: 'from-blue-500 to-cyan-500',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/82e06b6dfce231888d7b673b20d7734055daef051fc73c096d7a77348bac3e2a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BoImFI9L0SsOBpfxUlOAQcA%3D%3D',
  },
  {
    title: 'Career Essentials in Data Analysis',
    issuer: 'Microsoft & LinkedIn',
    date: 'Feb 2025',
    Icon: FaMicrosoft,
    color: 'from-purple-500 to-pink-500',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/d8ede45eb1588b3ddc768a5c45e2105279d45460b0c85050854121619603e522?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BoImFI9L0SsOBpfxUlOAQcA%3D%3D',
  },
  {
    title: 'Introduction to Career Skills in Data Analytics',
    issuer: 'LinkedIn',
    date: 'Feb 2025',
    Icon: SiLinkedin,
    color: 'from-blue-600 to-cyan-600',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/faea2bada1fc4674203f0d053a8391d12e58ceeac3d315f38c497866a4e3b84b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BoImFI9L0SsOBpfxUlOAQcA%3D%3D',
  },
  {
    title: 'Learning Data Analytics: 1 Foundations',
    issuer: 'LinkedIn',
    date: 'Feb 2025',
    Icon: SiLinkedin,
    color: 'from-indigo-500 to-purple-500',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/c13a92285cd0175fff622301f51d493da3a5a8d3574fbecc225cb31fe01f2534?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BoImFI9L0SsOBpfxUlOAQcA%3D%3D',
  },
  {
    title: 'Becoming a Social Entrepreneur: Getting Started',
    issuer: 'Coursera',
    date: 'Jul 2023',
    credentialId: 'DQY8JQHMLP3H',
    Icon: SiCoursera,
    color: 'from-pink-500 to-rose-500',
    credentialUrl: 'https://coursera.org/verify/DQY8JQHMLP3H',
  },
  {
    title: 'Foundations of User Experience (UX) Design',
    issuer: 'Coursera',
    date: 'Jun 2023',
    credentialId: 'U9AN6CG5SYVN',
    Icon: SiCoursera,
    color: 'from-green-500 to-emerald-500',
    credentialUrl: 'https://coursera.org/verify/U9AN6CG5SYVN',
  },
  {
    title: 'Using Python to Access Web Data',
    issuer: 'Coursera',
    date: 'Apr 2023',
    credentialId: 'NQQUBTCKVZ6W',
    Icon: SiCoursera,
    color: 'from-yellow-500 to-green-500',
    credentialUrl: 'https://coursera.org/verify/NQQUBTCKVZ6W',
  },
  {
    title: 'Capstone: Retrieving, Processing, and Visualizing Data with Python',
    issuer: 'Coursera',
    date: 'Apr 2023',
    credentialId: '2243W35MVSEC',
    Icon: SiCoursera,
    color: 'from-teal-500 to-cyan-500',
    credentialUrl: 'https://coursera.org/verify/2243W35MVSEC',
  },
  {
    title: 'Python Data Structures',
    issuer: 'Coursera',
    date: 'Feb 2022',
    credentialId: 'E5P5BFG6SZD9',
    Icon: SiCoursera,
    color: 'from-blue-400 to-indigo-500',
    credentialUrl: 'https://coursera.org/verify/E5P5BFG6SZD9',
  },
  {
    title: 'Programming for Everybody (Getting Started with Python)',
    issuer: 'Coursera',
    date: 'Nov 2021',
    credentialId: 'N4NYB2MDNW63',
    Icon: SiCoursera,
    color: 'from-violet-500 to-purple-600',
    credentialUrl: 'https://coursera.org/verify/N4NYB2MDNW63',
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-8 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Certifications & <span className="gradient-text">Courses</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 rounded-xl p-4 h-full transition-all flex flex-col"
            >
                <div className="mb-3">
                  <cert.Icon className="w-10 h-10" style={{ color: '#fff' }} />
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-400 mb-1">{cert.issuer}</p>
                <p className="text-xs text-gray-500">{cert.date}</p>

                <div className="mt-auto pt-3 flex justify-start">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold hover:opacity-80 transition-opacity`}
                  >
                    <Award className={`w-3.5 h-3.5 bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`} style={{ stroke: `url(#${cert.color})` }} />
                    <span className={`bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>Credential</span>
                    <ExternalLink className={`w-3 h-3`} style={{ color: cert.color.includes('orange') ? '#FF9900' : cert.color.includes('blue-500') ? '#3B82F6' : cert.color.includes('purple') ? '#A855F7' : cert.color.includes('blue-600') ? '#2563EB' : cert.color.includes('indigo') ? '#6366F1' : cert.color.includes('pink') ? '#EC4899' : cert.color.includes('green') ? '#10B981' : cert.color.includes('yellow') ? '#EAB308' : cert.color.includes('teal') ? '#14B8A6' : cert.color.includes('blue-400') ? '#60A5FA' : '#8B5CF6' }} />
                  </a>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
