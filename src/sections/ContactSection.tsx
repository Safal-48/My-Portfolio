import React from 'react';
import ContactButton from '../components/ContactButton';

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="
        bg-[#0c0c0c]
        px-5 sm:px-8 md:px-10
        py-24 sm:py-32 md:py-40
        flex flex-col items-center justify-center text-center gap-10 sm:gap-12
        border-t border-[#D7E2EA]/10
      "
    >
      <p
        className="text-[#D7E2EA]/50 font-light uppercase tracking-widest"
        style={{ fontSize: 'clamp(0.75rem, 1.5vw, 1rem)' }}
      >
        Let&apos;s work together
      </p>
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight"
        style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
      >
        Get in touch
      </h2>
      <p
        className="text-[#D7E2EA] font-light leading-relaxed max-w-[500px] opacity-70"
        style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.2rem)' }}
      >
        Have a FAANG role, complex engineering challenge, or data analytics opportunity? I&apos;d love to connect and bring impact.
      </p>
      <ContactButton />

      {/* Footer */}
      <div className="mt-16 sm:mt-20 pt-8 border-t border-[#D7E2EA]/10 w-full flex flex-col sm:flex-row justify-between items-center gap-4">
        <p
          className="text-[#D7E2EA]/40 font-light uppercase tracking-wider"
          style={{ fontSize: 'clamp(0.7rem, 1.2vw, 0.85rem)' }}
        >
          © 2026 Safal Pal. All rights reserved.
        </p>
        <p
          className="text-[#D7E2EA]/40 font-light uppercase tracking-wider"
          style={{ fontSize: 'clamp(0.7rem, 1.2vw, 0.85rem)' }}
        >
          Software Engineer & Data Analyst
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
