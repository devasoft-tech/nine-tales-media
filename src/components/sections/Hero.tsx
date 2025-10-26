'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRightIcon, PlayIcon, SparklesIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Enhanced animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-primary">
      {/* Animated Background */}
      <motion.div className="absolute inset-0" style={{ y, opacity }}>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background-primary via-background-secondary to-background-tertiary opacity-90" />
        
        {/* Enhanced Animated Particles */}
        <div className="absolute inset-0">
          {/* Reduced number of particles for better performance */}
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute ${i % 3 === 0 ? 'w-2 h-2' : 'w-1 h-1'} ${
                i % 5 === 0 ? 'bg-primary-red' : i % 3 === 0 ? 'bg-primary-purple' : 'bg-primary-orange'
              } rounded-full opacity-${i % 5 === 0 ? '30' : '20'}`}
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                scale: [1, Math.random() * 0.5 + 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Enhanced Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 border-2 border-primary-orange/30 rounded-full backdrop-blur-sm"
          animate={{ rotate: 360, borderColor: ['rgba(255,107,53,0.3)', 'rgba(255,51,102,0.3)', 'rgba(139,92,246,0.3)', 'rgba(255,107,53,0.3)'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <motion.div 
            className="absolute inset-2 border border-white/10 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 border-2 border-primary-red/30 rounded-lg backdrop-blur-sm"
          animate={{ 
            rotate: -360,
            borderColor: ['rgba(255,51,102,0.3)', 'rgba(139,92,246,0.3)', 'rgba(255,107,53,0.3)', 'rgba(255,51,102,0.3)']
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <motion.div 
            className="absolute inset-2 border border-white/10 rounded-lg"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
        
        <motion.div
          className="absolute top-1/2 left-10 w-24 h-24 border-2 border-primary-purple/30 backdrop-blur-sm"
          animate={{ 
            scale: [1, 1.2, 1], 
            rotate: [0, 180, 360],
            borderColor: ['rgba(139,92,246,0.3)', 'rgba(255,107,53,0.3)', 'rgba(255,51,102,0.3)', 'rgba(139,92,246,0.3)']
          }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <motion.div 
            className="absolute inset-2 border border-white/10"
            animate={{ rotate: -180 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Enhanced Flowing Waves */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-40 opacity-20"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z"
              fill="url(#wave-gradient)"
              animate={{
                d: [
                  "M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z",
                  "M0,80 C150,40 350,100 600,80 C850,60 1050,100 1200,80 L1200,120 L0,120 Z",
                  "M0,70 C150,120 350,50 600,70 C850,90 1050,40 1200,70 L1200,120 L0,120 Z",
                  "M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff6b35" />
                <stop offset="33%" stopColor="#ff3366" />
                <stop offset="66%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ff6b35" />
              </linearGradient>
            </defs>
          </svg>
          
          <svg
            className="w-full h-20 opacity-10 -mt-10"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,40 C300,80 600,0 900,40 C1050,60 1150,30 1200,40 L1200,120 L0,120 Z"
              fill="url(#wave-gradient-2)"
              animate={{
                d: [
                  "M0,40 C300,80 600,0 900,40 C1050,60 1150,30 1200,40 L1200,120 L0,120 Z",
                  "M0,50 C300,20 600,60 900,50 C1050,40 1150,70 1200,50 L1200,120 L0,120 Z",
                  "M0,40 C300,80 600,0 900,40 C1050,60 1150,30 1200,40 L1200,120 L0,120 Z",
                ],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <defs>
              <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#ff3366" />
                <stop offset="100%" stopColor="#ff6b35" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.div>

      {/* Enhanced Content */}
      <div className="relative z-10 max-width-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-spacing items-center min-h-screen pt-24 px-4">
          {/* Enhanced Text Content */}
          <div className="text-center lg:text-left mobile-text-center">
            <motion.div
              className="mb-6"
              variants={fadeInLeft}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-primary/20 backdrop-blur-md rounded-full text-primary-orange font-medium text-sm border border-primary-orange/30 shadow-lg shadow-primary-orange/10">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-orange"></span>
                </span>
                🦊 Welcome to Nine Tales Media
              </span>
            </motion.div>

              <motion.h1
              className="hero-title text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight text-shadow"
              variants={fadeInLeft}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Crafting{' '}
              <span className="relative">
                <span className="gradient-text">Digital</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 1.2 }}
                />
              </span>
              <br />
              Narratives,{' '}
              <span className="relative">
                <span className="gradient-text">One Tale</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 1.4 }}
                />
              </span> at a Time
            </motion.h1>

            <motion.p
              className="text-lg lg:text-xl text-gray-300 text-spacing max-w-2xl lg:max-w-none leading-relaxed"
              variants={fadeInLeft}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              We blend creativity with cutting-edge technology to create compelling digital experiences that captivate audiences and drive extraordinary results for your business.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-5 mb-12"
              variants={fadeInLeft}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="/contact">
                <motion.button
                  className="btn-primary button-spacing text-lg flex items-center justify-center gap-3 group mobile-full-width relative overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span 
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                  <span>Get Started</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </Link>

              <Link href="/portfolio">
                <motion.button
                  className="btn-secondary button-spacing text-lg flex items-center justify-center gap-3 group mobile-full-width relative overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span 
                    className="absolute inset-0 bg-white/5"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                  <PlayIcon className="w-5 h-5" />
                  <span>View Our Work</span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-800/50 backdrop-blur-sm"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.div 
                className="text-center lg:text-left"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl lg:text-4xl font-bold gradient-text flex items-center justify-center lg:justify-start">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  >
                    150+
                  </motion.span>
                  <SparklesIcon className="w-5 h-5 ml-1 text-primary-orange" />
                </div>
                <div className="text-gray-400 text-sm mt-1">Projects Completed</div>
              </motion.div>
              
              <motion.div 
                className="text-center lg:text-left"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl lg:text-4xl font-bold gradient-text flex items-center justify-center lg:justify-start">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                  >
                    50+
                  </motion.span>
                  <SparklesIcon className="w-5 h-5 ml-1 text-primary-red" />
                </div>
                <div className="text-gray-400 text-sm mt-1">Happy Clients</div>
              </motion.div>
              
              <motion.div 
                className="text-center lg:text-left"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl lg:text-4xl font-bold gradient-text flex items-center justify-center lg:justify-start">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                  >
                    5+
                  </motion.span>
                  <SparklesIcon className="w-5 h-5 ml-1 text-primary-purple" />
                </div>
                <div className="text-gray-400 text-sm mt-1">Years Experience</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced Visual Element */}
          <motion.div
            className="relative"
            variants={fadeInRight}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-primary opacity-20 rounded-full blur-3xl" />
              </div>
              
              {/* Enhanced Main Circle */}
              <motion.div
                className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                {/* Outer glow */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-2xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Main circle with glass effect */}
                <div className="absolute inset-4 bg-gradient-to-br from-primary-orange/20 via-primary-red/20 to-primary-purple/20 rounded-full backdrop-blur-md border border-white/10 shadow-lg shadow-primary-orange/20" />
                
                {/* Inner circle with animated border */}
                <motion.div
                  className="absolute inset-8 rounded-full border-2 border-white/10 backdrop-blur-sm"
                  animate={{ rotate: -180 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Inner Fox Symbol with enhanced effects */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="relative"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotateY: [0, 10, 0, -10, 0]
                    }}
                    transition={{ 
                      scale: { duration: 3, repeat: Infinity },
                      rotateY: { duration: 5, repeat: Infinity }
                    }}
                  >
                    {/* Glow behind emoji */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary-orange/30 rounded-full blur-xl" />
                    
                    {/* Fox emoji with enhanced size */}
                    <div className="text-7xl relative z-10 drop-shadow-[0_0_8px_rgba(255,107,53,0.8)]">🦊</div>
                  </motion.div>
                </div>

                {/* Optimized Orbiting Elements - reduced count */}
                {[...Array(8)].map((_, i) => {
                  const isSpecial = i % 2 === 0;
                  const radius = isSpecial ? 180 : 160;
                  const angle = (i * (360 / 8) * Math.PI) / 180;
                  const color = i % 3 === 0 ? 'primary-orange' : i % 3 === 1 ? 'primary-red' : 'primary-purple';
                  
                  return (
                    <motion.div
                      key={i}
                      className={`absolute ${isSpecial ? 'w-6 h-6' : 'w-3 h-3'} rounded-full flex items-center justify-center`}
                      style={{
                        top: '50%',
                        left: '50%',
                        x: Math.cos(angle) * radius,
                        y: Math.sin(angle) * radius,
                        transformOrigin: 'center',
                        background: isSpecial ? 
                          `linear-gradient(135deg, var(--primary-orange), var(--primary-red))` : 
                          `var(--${color})`,
                      }}
                      animate={{ 
                        rotate: 360,
                        boxShadow: isSpecial ? 
                          ['0 0 10px rgba(255,107,53,0.5)', '0 0 20px rgba(255,107,53,0.8)', '0 0 10px rgba(255,107,53,0.5)'] : 
                          undefined
                      }}
                      transition={{
                        rotate: { duration: 30, repeat: Infinity, ease: "linear", delay: i * 0.5 },
                        boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                      }}
                    >
                      {isSpecial && (
                        <motion.div
                          className="w-2 h-2 bg-white rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Enhanced Floating Cards */}
              <motion.div
                className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-orange to-primary-red rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/10"
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <span className="text-3xl drop-shadow-lg">
                  💡
                </span>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-8 sm:-top-4 sm:-right-16 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-red to-primary-purple rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/10"
                animate={{ 
                  y: [10, -10, 10],
                  rotate: [0, -5, 0, 5, 0]
                }}
                transition={{ 
                  y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                  rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.1, rotate: -10 }}
              >
                <span className="text-2xl drop-shadow-lg">
                  🚀
                </span>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-4 sm:-bottom-10 sm:-left-6 w-14 h-14 sm:w-18 sm:h-18 bg-gradient-to-br from-primary-purple to-primary-orange rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/10"
                animate={{ 
                  y: [-8, 8, -8],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 },
                  rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <span className="text-2xl drop-shadow-lg">
                  ✨
                </span>
              </motion.div>
              
              {/* New floating element */}
              <motion.div
                className="absolute bottom-6 -right-6 sm:bottom-10 sm:-right-12 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary-orange/90 to-primary-purple/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/10"
                animate={{ 
                  y: [5, -5, 5],
                  x: [-5, 5, -5],
                  rotate: [0, 360]
                }}
                transition={{ 
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
                  x: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-2xl drop-shadow-lg">
                  🎯
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Simplified Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        style={{ opacity }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-gray-400 font-medium tracking-wider uppercase">
            Scroll Down
          </p>
          
          <div className="w-8 h-14 border-2 border-gray-400/50 rounded-full flex justify-center backdrop-blur-sm relative overflow-hidden">
            <motion.div
              className="w-1.5 h-4 bg-gradient-primary rounded-full mt-2"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          
          {/* Arrow indicators */}
          <div className="flex flex-col items-center gap-1 mt-1">
            <div className="w-3 h-0.5 bg-gradient-primary rounded-full origin-center rotate-45 translate-x-[3px]" />
            <div className="w-3 h-0.5 bg-gradient-primary rounded-full origin-center -rotate-45 -translate-x-[3px]" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
