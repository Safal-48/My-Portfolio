import React from 'react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 py-20"
      style={{ backgroundColor: '#0c0c0c' }}
    >
      {/* Decorative 3D images — corners */}

      {/* Top-left: Moon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon 3D icon"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain select-none"
          loading="lazy"
          draggable={false}
        />
      </FadeIn>

      {/* Bottom-left: 3D object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D decorative object"
          className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain select-none"
          loading="lazy"
          draggable={false}
        />
      </FadeIn>

      {/* Top-right: Lego */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego 3D icon"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain select-none"
          loading="lazy"
          draggable={false}
        />
      </FadeIn>

      {/* Bottom-right: 3D group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D group decoration"
          className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain select-none"
          loading="lazy"
          draggable={false}
        />
      </FadeIn>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-10 sm:gap-14 md:gap-16">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Text block + button */}
        <div className="flex flex-col items-center gap-10 sm:gap-12 md:gap-14">
          <div className="
            relative p-8 sm:p-10 md:p-12 rounded-[32px] 
            border border-[#D7E2EA]/10 bg-[#D7E2EA]/3 backdrop-blur-md 
            shadow-[0_20px_50px_rgba(0,0,0,0.3)] max-w-[720px]
          ">
            {/* Subtle corner light accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D7E2EA]/20 rounded-tl-[32px]" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D7E2EA]/20 rounded-br-[32px]" />
            
            <AnimatedText
              text="I am a passionate Full Stack Developer and AI/ML Engineer dedicated to building intelligent, scalable, and user-centric web applications. I specialize in designing robust architectures, engineering smart data solutions, and crafting seamless digital experiences. Driven by curiosity and code, I turn complex ideas into refined software solutions."
              className="text-[#D7E2EA] font-medium leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.35rem)', letterSpacing: '0.015em' }}
            />
          </div>

          <ContactButton />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
