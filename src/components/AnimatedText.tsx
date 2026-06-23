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

  const words = text.split(' ');

  return (
    <p
      ref={ref}
      className={`${className}`}
      style={{ ...style, display: 'block' }}
      aria-label={text}
    >
      {words.map((word, wIdx) => {
        const start = wIdx / words.length;
        const end = Math.min(start + 1 / words.length + 0.05, 1);
        return (
          <span
            key={wIdx}
            style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
          >
            {word.split('').map((char, cIdx) => (
              <CharacterSpan
                key={cIdx}
                char={char}
                scrollYProgress={scrollYProgress}
                start={start}
                end={end}
              />
            ))}
            {wIdx < words.length - 1 && (
              <motion.span
                aria-hidden="true"
                style={{
                  opacity: useTransform(scrollYProgress, [start, end], [0.15, 1]),
                }}
              >
                &nbsp;
              </motion.span>
            )}
          </span>
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
