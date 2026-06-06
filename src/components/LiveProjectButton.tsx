import React from 'react';

interface LiveProjectButtonProps {
  className?: string;
  link: string;
}

const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ className = '', link }) => {
  return (
    <a
      id="view-project-btn"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        rounded-full font-medium uppercase tracking-widest cursor-pointer
        border-2 border-[#D7E2EA] text-[#D7E2EA]
        px-6 py-2.5 sm:px-8 sm:py-3.5
        text-xs sm:text-sm
        transition-colors duration-200 hover:bg-[#D7E2EA]/10
        inline-flex items-center justify-center
        ${className}
      `}
    >
      View Project
    </a>
  );
};

export default LiveProjectButton;
