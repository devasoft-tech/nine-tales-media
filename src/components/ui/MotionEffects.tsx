'use client';

import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, MotionValue } from 'framer-motion';

// Parallax effect component
export const ParallaxSection = ({ 
  children, 
  direction = 'up', 
  speed = 0.2,
  className = '',
}: { 
  children: ReactNode; 
  direction?: 'up' | 'down' | 'left' | 'right';
  speed?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Create all transform values (must be called unconditionally)
  const transformUp = useTransform(scrollYProgress, [0, 1], ['0%', `${-50 * speed}%`]);
  const transformDown = useTransform(scrollYProgress, [0, 1], ['0%', `${50 * speed}%`]);
  const transformLeft = useTransform(scrollYProgress, [0, 1], ['0%', `${-50 * speed}%`]);
  const transformRight = useTransform(scrollYProgress, [0, 1], ['0%', `${50 * speed}%`]);

  // Select transform based on direction
  let transform: MotionValue<string>;
  switch (direction) {
    case 'up':
      transform = transformUp;
      break;
    case 'down':
      transform = transformDown;
      break;
    case 'left':
      transform = transformLeft;
      break;
    case 'right':
      transform = transformRight;
      break;
    default:
      transform = transformUp;
  }

  const style = direction === 'left' || direction === 'right' 
    ? { x: transform } 
    : { y: transform };

  return (
    <motion.div
      ref={ref}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Reveal on scroll component
export const RevealOnScroll = ({ 
  children, 
  direction = 'up',
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = '',
}: { 
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}) => {
  // Set initial and animate values based on direction
  let initial = {};
  switch (direction) {
    case 'up':
      initial = { opacity: 0, y: 50 };
      break;
    case 'down':
      initial = { opacity: 0, y: -50 };
      break;
    case 'left':
      initial = { opacity: 0, x: 50 };
      break;
    case 'right':
      initial = { opacity: 0, x: -50 };
      break;
    default:
      initial = { opacity: 0, y: 50 };
  }

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: threshold }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Smooth scroll tracking component
export const SmoothScrollProgress = ({
  color = 'primary-orange',
  height = 3,
  position = 'top',
}: {
  color?: string;
  height?: number;
  position?: 'top' | 'bottom';
}) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });

  return (
    <motion.div
      className={`fixed left-0 right-0 ${position === 'top' ? 'top-0' : 'bottom-0'} z-50`}
      style={{
        height,
        scaleX,
        transformOrigin: 'left',
        background: `var(--${color})`,
      }}
    />
  );
};

// Text animation component
export const AnimatedText = ({ 
  text, 
  el: Wrapper = 'div',
  className = '',
  once = true,
  repeatDelay = 0,
  animation = 'reveal',
}: { 
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  animation?: 'reveal' | 'fade' | 'bounce' | 'wave';
}) => {
  // Split text into words and characters
  const words = text.split(' ');
  
  // Get animation variants based on animation type
  const getAnimationVariants = () => {
    switch (animation) {
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: (i: number) => ({
            opacity: 1,
            transition: { duration: 0.5, delay: i * 0.1 }
          })
        };
      case 'bounce':
        return {
          hidden: { opacity: 0, y: 20 },
          visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { 
              type: "spring", 
              damping: 12, 
              stiffness: 200, 
              delay: i * 0.05 
            }
          })
        };
      case 'wave':
        return {
          hidden: { opacity: 0, y: 0 },
          visible: (i: number) => ({
            opacity: 1,
            y: [0, -10, 0],
            transition: { 
              times: [0, 0.5, 1],
              duration: 0.6, 
              delay: i * 0.1,
              repeat: repeatDelay > 0 ? Infinity : 0,
              repeatDelay: repeatDelay
            }
          })
        };
      default: // reveal
        return {
          hidden: { opacity: 0, y: 50 },
          visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: i * 0.1 }
          })
        };
    }
  };

  const variants = getAnimationVariants();

  return (
    <Wrapper className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.1,
            }
          }
        }}
        className="inline-block"
      >
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            custom={i}
            variants={variants}
            className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

// Floating element component
export const FloatingElement = ({ 
  children, 
  amplitude = 10,
  duration = 4,
  delay = 0,
  className = '',
}: { 
  children: ReactNode;
  amplitude?: number;
  duration?: number;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      animate={{ 
        y: [`${-amplitude}px`, `${amplitude}px`, `${-amplitude}px`] 
      }}
      transition={{ 
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      {children}
    </motion.div>
  );
};

// Magnetic element component
export const MagneticElement = ({ 
  children, 
  strength = 20,
  className = '',
}: { 
  children: ReactNode;
  strength?: number;
  className?: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    x.set(distanceX / strength);
    y.set(distanceY / strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
};

// Gradient background animation component
export const AnimatedGradient = ({ 
  className = '',
  colors = ['#ff6b35', '#ff3366', '#8b5cf6', '#ff6b35'],
  duration = 8,
  blur = 100,
  opacity = 0.3,
}: { 
  className?: string;
  colors?: string[];
  duration?: number;
  blur?: number;
  opacity?: number;
}) => {
  return (
    <motion.div 
      className={`absolute inset-0 rounded-full ${className}`}
      animate={{ 
        background: colors.map(color => `radial-gradient(circle, ${color} 0%, transparent 70%)`),
        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
      }}
      transition={{ 
        duration, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{ 
        filter: `blur(${blur}px)`,
        opacity
      }}
    />
  );
};

// Scroll-triggered counter component
export const CountUp = ({ 
  end, 
  start = 0,
  duration = 2,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
}: { 
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const count = useMotionValue(start);
  const rounded = useTransform(count, value => {
    return `${prefix}${value.toFixed(decimals)}${suffix}`;
  });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  useTransform(scrollYProgress, [0, 1], [start, end], {
    mixer: (from, to) => {
      count.set(from + (to - from) * scrollYProgress.get());
      return from;
    }
  });

  return (
    <motion.div ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
    </motion.div>
  );
};

// Export all components
export default {
  ParallaxSection,
  RevealOnScroll,
  SmoothScrollProgress,
  AnimatedText,
  FloatingElement,
  MagneticElement,
  AnimatedGradient,
  CountUp
};
