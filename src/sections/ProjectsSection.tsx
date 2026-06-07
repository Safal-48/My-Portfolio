import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

interface Project {
  number: string;
  name: string;
  category: string;
  link: string;
  col1img1: string;
  col1img2: string;
  col2img: string;
}

const projects: Project[] = [
  {
    number: '01',
    name: 'RCB-CareerOS',
    category: 'Vercel Deployment & React',
    link: 'https://rcb-careeros.vercel.app/',
    col1img1: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop',
    col1img2: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop',
    col2img: '/rcb-careeros.jpg',
  },
  {
    number: '02',
    name: 'EduTech With Nova.AI',
    category: 'AI Bot · Voice Assistance · Python',
    link: 'https://github.com/Safal-48/EduTech-with-Ai-Voice-Chatbot-Assistance',
    col1img1: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop',
    col1img2: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
    col2img: '/edutech-nova.jpg',
  },
  {
    number: '03',
    name: 'Self-Healing-RAG-Pipeline',
    category: 'GenAI & LangChain Autocorrection',
    link: 'https://github.com/Safal-48/Self-Healing-RAG-Pipeline',
    col1img1: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=600&auto=format&fit=crop',
    col1img2: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop',
    col2img: '/self-healing-rag.jpg',
  },
  {
    number: '04',
    name: 'Chat-Rooms',
    category: 'Collaboration & Socket.io',
    link: 'https://github.com/Safal-48/Google-Solution-Challenge-Cognify',
    col1img1: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=600&auto=format&fit=crop',
    col1img2: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop',
    col2img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop',
  },
  {
    number: '05',
    name: 'VidSnapAI',
    category: 'Video Pipeline & ElevenLabs API',
    link: 'https://github.com/Safal-48/VidSnapAI',
    col1img1: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=600&auto=format&fit=crop',
    col1img2: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=600&auto=format&fit=crop',
    col2img: '/vidsnap-ai.jpg',
  },
  {
    number: '06',
    name: 'AI Career Navigator',
    category: 'MERN Stack & Google Gemini AI',
    link: 'https://github.com/Safal-48/AI-Career-Navigator',
    col1img1: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600&auto=format&fit=crop',
    col1img2: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=600&auto=format&fit=crop',
    col2img: '/ai-career-navigator.jpg',
  },
  {
    number: '07',
    name: 'Gurgaon Real Estate Intelligence',
    category: 'Python & Business Insights',
    link: 'https://github.com/Safal-48/Gurgaon-real-estate-analytics',
    col1img1: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop',
    col1img2: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
    col2img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  },
  {
    number: '08',
    name: 'Cognify',
    category: 'EdTech & MERN Stack',
    link: 'https://cognify-ai-solution.netlify.app/',
    col1img1: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600&auto=format&fit=crop',
    col1img2: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
    col2img: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1200&auto=format&fit=crop',
  },
];

const totalCards = projects.length;

const ProjectCard: React.FC<{ project: Project; index: number; totalCards: number }> = ({
  project,
  index,
  totalCards,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const imgRadius = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

  return (
    <div
      ref={containerRef}
      className="h-[85vh] flex items-start justify-center"
      style={{ paddingTop: `${index * 28}px` }}
    >
      <motion.div
        className={`
          sticky top-24 md:top-32 w-full
          rounded-[40px] sm:rounded-[50px] md:rounded-[60px]
          border-2 border-[#D7E2EA]
          p-4 sm:p-6 md:p-8
          origin-top
        `}
        style={{
          backgroundColor: '#0c0c0c',
          scale,
          top: `${96 + index * 28}px`,
        }}
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 sm:mb-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="hero-heading font-black leading-none select-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span
                className="text-[#D7E2EA] font-light uppercase tracking-widest opacity-60"
                style={{ fontSize: 'clamp(0.7rem, 1.2vw, 1rem)' }}
              >
                {project.category}
              </span>
              <span
                className="text-[#D7E2EA] font-medium uppercase leading-tight"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)' }}
              >
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton link={project.link} />
        </div>

        {/* Image grid */}
        <div className="flex gap-3 sm:gap-4">
          {/* Left column — 40% */}
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
            <img
              src={project.col1img1}
              alt={`${project.name} preview 1`}
              loading="lazy"
              className={`w-full object-cover ${imgRadius}`}
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.col1img2}
              alt={`${project.name} preview 2`}
              loading="lazy"
              className={`w-full object-cover ${imgRadius}`}
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>

          {/* Right column — 60% */}
          <div className="flex-1">
            <img
              src={project.col2img}
              alt={`${project.name} main preview`}
              loading="lazy"
              className={`w-full h-full object-cover ${imgRadius}`}
              style={{ minHeight: 'clamp(290px, 38vw, 570px)' }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="
        rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        -mt-10 sm:-mt-12 md:-mt-14 z-10 relative
        px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-48 sm:pb-56 md:pb-64
      "
      style={{ backgroundColor: '#0c0c0c' }}
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      {/* Stacking cards */}
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={totalCards}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
