import React from 'react';
import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';

const navLinks = ['About', 'Experience', 'Projects', 'Contact'];

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col relative"
      style={{ overflowX: 'clip' }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav">
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="
                text-[#D7E2EA] font-medium uppercase tracking-wider
                text-sm md:text-lg lg:text-[1.4rem]
                transition-opacity duration-200 hover:opacity-70
              "
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="
              hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full
              text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]
              mt-6 sm:mt-4 md:-mt-5
            "
          >
            Hi, i&apos;m safal
          </h1>
        </FadeIn>
      </div>

      {/* Portrait — centered absolutely */}
      <FadeIn
        delay={0.6}
        y={30}
        className="
          absolute left-1/2 -translate-x-1/2 z-10
          w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]
          top-1/2 -translate-y-1/2
          sm:top-auto sm:translate-y-0 sm:bottom-0
        "
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <img
            src="/smiling-portrait.png"
            alt="Safal Pal portrait"
            className="w-full h-auto object-contain select-none pointer-events-none"
            draggable={false}
          />
        </Magnet>
      </FadeIn>

      {/* Bottom bar */}
      <div className="mt-auto flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        {/* Left description */}
        <FadeIn delay={0.35} y={20}>
          <div className="flex flex-col gap-1.5 max-w-[180px] sm:max-w-[240px] md:max-w-[320px]">
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug"
              style={{ fontSize: 'clamp(0.7rem, 1.3vw, 1.4rem)' }}
            >
              Architecting Intelligent Systems & Scalable Data Solutions
            </p>
            <p className="text-[#D7E2EA]/60 uppercase tracking-widest text-[9px] sm:text-xs">
              🏆 6X HACKATHON WINNER
            </p>
          </div>
        </FadeIn>

        {/* Action Buttons */}
        <FadeIn delay={0.5} y={20} className="flex flex-col sm:flex-row gap-3 items-end sm:items-center">
          <a
            href="#projects"
            className="
              rounded-full font-medium uppercase tracking-widest text-[#0c0c0c] bg-[#D7E2EA] hover:bg-white
              px-6 py-2.5 sm:px-8 sm:py-3.5
              text-[10px] sm:text-xs
              transition-all duration-200
            "
          >
            Projects
          </a>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
