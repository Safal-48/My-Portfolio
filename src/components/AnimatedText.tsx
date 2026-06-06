import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const ref = React.useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');

  return (
    <p
      ref={ref}
      className={`${className}`}
      style={{ ...style, display: 'flex', flexWrap: 'wrap', gap: 0 }}
      aria-label={text}
    >
      {characters.map((char, i) => {
        const start = i / characters.length;
        const end = Math.min(start + 1 / characters.length + 0.05, 1);
        return (
          <CharacterSpan
            key={i}
            char={char}
            scrollYProgress={scrollYProgress}
            start={start}
            end={end}
          />
        );
      })}
    </p>
  );
};

interface CharacterSpanProps {
  char: string;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
  start: number;
  end: number;
}

const CharacterSpan: React.FC<CharacterSpanProps> = ({
  char,
  scrollYProgress,
  start,
  end,
}) => {
  const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);

  if (char === ' ') {
    return <motion.span aria-hidden="true" style={{ opacity }}>&nbsp;</motion.span>;
  }

  return (
    <motion.span aria-hidden="true" style={{ opacity, display: 'inline-block' }}>
      {char}
    </motion.span>
  );
};

export default AnimatedText;
