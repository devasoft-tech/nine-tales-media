'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  
  // Use motion values for smoother animations
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Apply spring physics for more natural movement
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Show cursor after a slight delay to avoid initial position jump
    const timer = setTimeout(() => setIsVisible(true), 500);
    
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseEnter = (e: Event) => {
      setIsHovering(true);
      const target = e.target as HTMLElement;
      
      // Set different cursor variants based on element types
      if (target.tagName === 'A' || target.closest('a')) {
        setCursorVariant('link');
      } else if (target.tagName === 'BUTTON' || target.closest('button') || target.getAttribute('role') === 'button') {
        setCursorVariant('button');
      } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        setCursorVariant('text');
      }
    };
    
    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorVariant('default');
    };

    // Add event listeners for interactive elements with improved selector
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, .interactive'
    );
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => setIsVisible(false));
    document.addEventListener('mouseenter', () => setIsVisible(true));

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', () => setIsVisible(false));
      document.removeEventListener('mouseenter', () => setIsVisible(true));
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  // Get cursor styles based on variant
  const getCursorStyles = () => {
    switch(cursorVariant) {
      case 'link':
        return {
          scale: 1.8,
          borderColor: 'rgba(255, 107, 53, 0.8)',
          backgroundColor: 'rgba(255, 107, 53, 0.1)',
        };
      case 'button':
        return {
          scale: 1.5,
          borderColor: 'rgba(255, 51, 102, 0.8)',
          backgroundColor: 'rgba(255, 51, 102, 0.1)',
        };
      case 'text':
        return {
          scale: 0.8,
          opacity: 0.8,
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
        };
      default:
        return {
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        };
    }
  };

  // Disable custom cursor for now
  return null;
  
  // Uncomment the following to re-enable custom cursor
  /*
  if (typeof window === 'undefined') return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          ...getCursorStyles(),
          opacity: isVisible ? 1 : 0,
        }}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.5,
        }}
      >
        <motion.div 
          className="w-8 h-8 rounded-full border-2 border-primary-orange flex items-center justify-center"
          animate={{
            scale: isClicking ? 0.9 : 1,
            borderWidth: isHovering ? '2px' : '2px',
          }}
        >
          {cursorVariant === 'link' && (
            <motion.div 
              className="w-1 h-1 bg-primary-orange rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </motion.div>
      </motion.div>
      
      {/* Dot cursor */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.5 : 1,
        }}
      />

      {/* Particle trail effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 0.3 : 0,
        }}
      >
        <motion.div 
          className="w-24 h-24 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,107,53,0.3) 0%, rgba(255,51,102,0.1) 50%, transparent 70%)',
          }}
          animate={{
            scale: isHovering ? 1.2 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      
      {/* Click ripple effect */}
      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 w-16 h-16 rounded-full border-2 border-primary-orange pointer-events-none z-[9997]"
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
            translateX: '-50%',
            translateY: '-50%',
          }}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
        />
      )}
    </>
  );
};

  */
};

export default CustomCursor;
