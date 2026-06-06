import React from 'react';
import FadeIn from '../components/FadeIn';
import { motion } from 'framer-motion';

interface Achievement {
  rank: string;
  role: string;
  name: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    rank: '01',
    role: '1st Position',
    name: 'TechAce 2K26 (National Level)',
    description: 'Secured 1st Position at TechAce 2K26 – A National Level Techfest at Agnihotri College of Engineering, Wardha.',
  },
  {
    rank: '02',
    role: '1st Rank',
    name: 'KRUTIVERSE 2.0 (TECH-KRUTI 2K26)',
    description: 'Awarded 1st Rank in KRUTIVERSE 2.0 at the National Level Tech Fest TECH-KRUTI 2K26, organized by the Department of CSE (Data Science) at Tulsiramji Gaikwad-Patil College of Engineering and Technology, Mohgoan.',
  },
  {
    rank: '03',
    role: '1st Prize',
    name: 'Engineer’s Day 2K25',
    description: 'Secured the 1st Prize at the Engineer’s Day 2K25 at Tulsiramji Gaikwad-Patil College of Engineering and Technology, Mohgoan.',
  },
  {
    rank: '04',
    role: '2nd Prize',
    name: 'TechPro-25 (National Level Project Competition)',
    description: 'Secured the 2nd Prize for the project "Smart Accident Detection and Alarm System" at TechPro-25, Central India\'s Biggest National Level Project Competition at Suryodaya College of Engineering and Technology, Nagpur.',
  },
  {
    rank: '05',
    role: '2nd Runner-Up',
    name: 'ABHYUDAYA 25.O',
    description: 'Secured the 2nd Runner-Up position at ABHYUDAYA 25.O, a prestigious platform under Engineering India.',
  },
  {
    rank: '06',
    role: '2nd Runner-Up',
    name: 'WebCraft 2.0 (Web Development Competition)',
    description: 'Secured the 2nd Runner-Up position in WebCraft 2.0 — an inter-college Web Development competition organized by COMSA, Department of Computer Science, Government College of Engineering, Nagpur.',
  },
  {
    rank: '07',
    role: '2nd Runner-Up',
    name: 'Hack the Hardware 2025',
    description: 'Secured the 2nd Runner-Up position at Hack the Hardware 2025, a 7-hour Hardware/Electronics Hackathon organized by TEESA, SCET Nagpur.',
  }
];

const WallOfFame: React.FC = () => {
  return (
    <section
      id="achievements"
      className="
        bg-[#0c0c0c]
        px-5 sm:px-8 md:px-10
        pt-32 sm:pt-44 md:pt-56 pb-20 sm:pb-24 md:pb-32
        border-t border-[#D7E2EA]/10
      "
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Achievements
        </h2>
      </FadeIn>

      {/* Timeline items list */}
      <div className="max-w-5xl mx-auto flex flex-col">
        {achievements.map((h, i) => (
          <FadeIn key={h.rank} delay={i * 0.08} y={30}>
            <motion.div
              whileHover={{ x: 12 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="
                flex items-start gap-6 sm:gap-8 md:gap-10 py-8 sm:py-10 px-4 sm:px-6
                rounded-3xl border border-transparent hover:border-[#D7E2EA]/10
                hover:bg-[#D7E2EA]/5 transition-all duration-300 group cursor-pointer
              "
              style={{
                borderTop: i === 0 ? '1px solid rgba(215, 226, 234, 0.1)' : undefined,
                borderBottom: '1px solid rgba(215, 226, 234, 0.1)',
              }}
            >
              {/* Rank Badge / Number */}
              <span
                className="hero-heading font-black leading-none flex-shrink-0 select-none transition-transform duration-300 group-hover:scale-105"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
              >
                {h.rank}
              </span>

              {/* Title & Info */}
              <div className="flex flex-col justify-center gap-1 pt-1.5">
                <span
                  className="font-medium uppercase text-[#D7E2EA] leading-tight transition-colors duration-300 group-hover:text-white"
                  style={{ fontSize: 'clamp(1rem, 2vw, 1.8rem)' }}
                >
                  {h.role}
                </span>
                <span className="text-[#D7E2EA]/80 font-bold uppercase tracking-wider text-xs md:text-sm transition-colors duration-300 group-hover:text-white/95">
                  {h.name}
                </span>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#D7E2EA]/60 mt-2 text-sm sm:text-base transition-colors duration-300 group-hover:text-[#D7E2EA]/85"
                >
                  {h.description}
                </p>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default WallOfFame;
