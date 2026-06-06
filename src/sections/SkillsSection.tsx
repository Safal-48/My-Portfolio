import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X } from 'lucide-react';
import FadeIn from '../components/FadeIn';

interface SkillGroup {
  category: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Core CS Fundamentals',
    items: [
      'C++',
      'Python',
      'Data Structures and Algorithms',
      'Object-Oriented Programming (OOP)',
      'Problem Solving',
      'DBMS',
      'MYSQL',
      'Operating Systems',
      'Computer Networks',
      'Git',
      'GitHub',
    ],
  },
  {
    category: 'Full Stack Developer',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Node.js',
      'Express.js',
      'Database Management (MySQL, MongoDB, PostgreSQL)',
      'API Development',
      'Git and GitHub',
      'Debugging',
      'Problem-Solving',
      'Responsive Web Design',
      'Authentication and Security',
      'Deployment',
      'Teamwork',
      'Communication',
      'Project Management',
      'RAG Models',
    ],
  },
  {
    category: 'Data & AI',
    items: [
      'Pandas',
      'NumPy',
      'Tableau',
      'Power BI',
      'Machine Learning',
      'Random Forest',
      'SMOTE',
      'Matplotlib',
      'Seaborn',
      'Flask',
      'Anaconda',
      'PyTorch',
      'TensorFlow',
      'Scikit Learn',
      'Advance Python',
      'Deep Learning & Neural Networks',
      'Large Language Models',
    ],
  },
];

interface Certification {
  name: string;
  org: string;
  date?: string;
  image?: string;
  icon: string;
}

const certifications: Certification[] = [
  {
    name: 'GenAI Powered Data Analytics Job Simulation',
    org: 'TATA / Forage',
    date: 'April 2026',
    image: '/tata-forage-analytics.jpg',
    icon: '📊',
  },
  {
    name: 'Ultimate Job-Ready AI-Powered Data Analytics Course',
    org: 'CodeWithHarry',
    date: 'December 2025',
    image: '/codewithharry-analytics.jpg',
    icon: '🧠',
  },
  {
    name: 'Critical Thinking in the AI Era',
    org: 'HP LIFE / HP Foundation',
    date: 'March 2026',
    image: '/hp-life-thinking.jpg',
    icon: '💡',
  },
  {
    name: 'Communication Skills',
    org: 'TCS iON',
    date: 'May 2026',
    image: '/tcs-ion-communication.jpg',
    icon: '🗣️',
  },
  {
    name: 'Big 4 Ready Data Analyst',
    org: 'OneRoadmap',
    icon: '📈',
  },
  {
    name: 'Generative AI Foundations',
    org: 'upGrad × Microsoft',
    icon: '🤖',
  },
  {
    name: 'Certified DevOps Associate',
    org: 'Cloud Train',
    icon: '☁️',
  },
];

const SkillsSection: React.FC = () => {
  const [activeCertImage, setActiveCertImage] = useState<string | null>(null);
  const [activeCertName, setActiveCertName] = useState<string | null>(null);

  const openLightbox = (image: string, name: string) => {
    setActiveCertImage(image);
    setActiveCertName(name);
  };

  const closeLightbox = () => {
    setActiveCertImage(null);
    setActiveCertName(null);
  };

  return (
    <section
      id="skills"
      className="
        bg-[#0c0c0c]
        px-5 sm:px-8 md:px-10
        py-20 sm:py-24 md:py-32
        border-t border-[#D7E2EA]/10
      "
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      {/* Grid Layout */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-24">
        {skillGroups.map((group, index) => (
          <FadeIn key={group.category} delay={index * 0.08} y={30}>
            <div className="flex flex-col gap-4 border-l border-[#D7E2EA]/20 pl-6 py-2 h-full">
              {/* Category Name */}
              <h3 className="text-[#D7E2EA] font-semibold uppercase tracking-wider text-sm md:text-base">
                {group.category}
              </h3>
              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="
                      text-[#D7E2EA]/70 hover:text-white uppercase tracking-wider text-xs font-light
                      px-3 py-1.5 rounded-full border border-[#D7E2EA]/10 hover:border-[#D7E2EA]/30
                      transition-all duration-200 bg-[#D7E2EA]/5
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Dedicated Certifications Grid */}
      <div className="max-w-5xl mx-auto border-t border-[#D7E2EA]/10 pt-16">
        <FadeIn delay={0} y={30}>
          <h3 className="hero-heading font-black uppercase text-2xl sm:text-3xl mb-10 tracking-wider">
            Certifications
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <FadeIn key={cert.name} delay={i * 0.05} y={20}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="
                  flex flex-col justify-between p-6 rounded-[28px] border border-[#D7E2EA]/10 bg-[#D7E2EA]/3 h-full
                  hover:border-[#D7E2EA]/30 hover:bg-[#D7E2EA]/8 hover:shadow-[0_15px_30px_rgba(215,226,234,0.04)]
                  transition-all duration-300 group cursor-pointer
                "
              >
                <div>
                  <div className="flex justify-between items-start mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#D7E2EA]/10 flex items-center justify-center text-2xl border border-[#D7E2EA]/10 shadow-inner group-hover:scale-110 transition-transform duration-300 select-none">
                      {cert.icon}
                    </div>
                    {cert.image && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openLightbox(cert.image!, cert.name);
                        }}
                        className="
                          flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-wider
                          bg-[#D7E2EA]/15 text-[#D7E2EA]/90 hover:bg-[#D7E2EA] hover:text-black transition-all duration-300
                          border border-transparent hover:border-white shadow-sm cursor-pointer
                        "
                        title="View Certificate Image"
                      >
                        <Eye size={11} />
                        View
                      </button>
                    )}
                  </div>
                  <h4 className="text-[#D7E2EA] font-semibold text-sm sm:text-base leading-snug group-hover:text-white transition-colors duration-300">
                    {cert.name}
                  </h4>
                  <div className="mt-2.5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-semibold tracking-wider bg-[#D7E2EA]/10 text-[#D7E2EA]/85 border border-[#D7E2EA]/5 uppercase">
                      {cert.org}
                    </span>
                  </div>
                </div>
                {cert.date && (
                  <p className="text-[#D7E2EA]/30 text-xs mt-5 font-light group-hover:text-[#D7E2EA]/50 transition-colors duration-300">
                    {cert.date}
                  </p>
                )}
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {activeCertImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
            />

            {/* Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="
                relative max-w-4xl max-h-[90vh] bg-[#0c0c0c] border border-[#D7E2EA]/20
                rounded-[30px] p-2 sm:p-4 overflow-hidden z-10 flex flex-col items-center justify-center
              "
            >
              <button
                onClick={closeLightbox}
                className="
                  absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-[#D7E2EA]/80 hover:text-white
                  hover:bg-black transition-all duration-200
                "
              >
                <X size={20} />
              </button>
              
              <img
                src={activeCertImage}
                alt={activeCertName || 'Certificate'}
                className="max-h-[80vh] w-auto object-contain rounded-2xl"
              />
              {activeCertName && (
                <p className="text-[#D7E2EA]/80 text-xs sm:text-sm uppercase tracking-wider text-center mt-3 font-medium px-4">
                  {activeCertName}
                </p>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SkillsSection;
