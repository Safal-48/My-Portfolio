import React, { useRef, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const isNear =
        Math.abs(distX) < rect.width / 2 + padding &&
        Math.abs(distY) < rect.height / 2 + padding;

      if (isNear) {
        el.style.transition = activeTransition;
        el.style.transform = `translate3d(${distX / strength}px, ${distY / strength}px, 0)`;
        el.style.willChange = 'transform';
      } else {
        el.style.transition = inactiveTransition;
        el.style.transform = 'translate3d(0, 0, 0)';
      }
    };

    const onMouseLeave = () => {
      el.style.transition = inactiveTransition;
      el.style.transform = 'translate3d(0, 0, 0)';
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
};

export default Magnet;
