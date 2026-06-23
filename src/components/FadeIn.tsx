import React from 'react';
import type { ElementType } from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  as?: ElementType;
  animateDirectly?: boolean;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
  as = 'div',
  animateDirectly = false,
}) => {
  const MotionComponent = motion.create(as as ElementType);

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={animateDirectly ? { opacity: 1, x: 0, y: 0 } : undefined}
      whileInView={!animateDirectly ? { opacity: 1, x: 0, y: 0 } : undefined}
      viewport={!animateDirectly ? { once: true, margin: '50px', amount: 0 } : undefined}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </MotionComponent>
  );
};

export default FadeIn;
