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

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={ref} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-primary pt-20"
    >
      {/* Background */}
      <motion.div className="absolute inset-0" style={{ y, opacity }}>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background-primary via-background-secondary to-background-tertiary" />
        
        {/* Subtle Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute ${i % 3 === 0 ? 'w-1.5 h-1.5' : 'w-1 h-1'} rounded-full ${
                i % 5 === 0 ? 'bg-primary-red' : i % 3 === 0 ? 'bg-primary-purple' : 'bg-primary-orange'
              } opacity-20`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-purple/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)] py-12 lg:py-20">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary/20 backdrop-blur-md rounded-full border border-primary-orange/30"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-orange"></span>
              </span>
              <span className="text-sm font-medium text-primary-orange">Welcome to Nine Tales Media</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight"
            >
              Crafting{' '}
              <span className="gradient-text">Digital</span>
              <br />
              Narratives,{' '}
              <span className="gradient-text">One Tale</span>{' '}
              at a Time
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              We blend creativity with cutting-edge technology to create compelling digital experiences that captivate audiences and drive extraordinary results for your business.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16"
            >
              <Link href="/contact" className="group relative">
                <motion.div
                  className="relative bg-white text-gray-900 px-12 py-6 rounded-2xl font-bold text-lg sm:text-xl flex items-center justify-center gap-4 shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 border-4 border-transparent hover:border-orange-400/30 min-w-[200px]"
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 1 }}
                  />
                  
                  {/* Content */}
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">Get Started</span>
                  <motion.div
                    className="relative z-10 group-hover:text-white transition-colors duration-300"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRightIcon className="w-5 h-5" />
                  </motion.div>
                  
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>
              </Link>

              <Link href="/portfolio" className="group relative">
                <motion.div
                  className="relative bg-gray-900/50 backdrop-blur-xl text-white px-12 py-6 rounded-2xl font-bold text-lg sm:text-xl flex items-center justify-center gap-4 border-4 border-gray-700/50 hover:border-gray-500/50 shadow-xl hover:shadow-2xl transition-all duration-500 min-w-[200px]"
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animated border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Play icon with pulse */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <PlayIcon className="w-5 h-5 relative z-10" />
                  </motion.div>
                  <span className="relative z-10">View Our Work</span>
                  
                  {/* Particle effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + (i % 2) * 40}%`,
                        }}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </Link>
            </motion.div>
            <br />
            <br />
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-16 mt-12 border-t border-gray-800/30"
            >
              {/* Projects Stat */}
              <motion.div 
                className="relative group overflow-hidden"
                whileHover={{ y: -8, rotateY: 5 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
              >
                <div className="relative bg-gradient-to-br from-orange-500/10 via-red-500/5 to-transparent backdrop-blur-xl border border-orange-500/20 rounded-3xl p-6 text-center hover:border-orange-400/40 transition-all duration-500">
                  {/* Animated background orb */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400/30 to-red-500/30 rounded-full blur-2xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  {/* Icon with floating animation */}
                  <motion.div
                    className="relative z-10 flex justify-center mb-3"
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/25">
                      <SparklesIcon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                  
                  {/* Number with counter animation */}
                  <motion.div
                    className="relative z-10 text-4xl sm:text-5xl font-black mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  >
                    <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                      150+
                    </span>
                  </motion.div>
                  
                  <div className="relative z-10 text-gray-300 font-semibold text-sm tracking-wide uppercase">
                    Projects Completed
                  </div>
                  
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </motion.div>
              
              {/* Clients Stat */}
              <motion.div 
                className="relative group overflow-hidden"
                whileHover={{ y: -8, rotateY: 5 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
              >
                <div className="relative bg-gradient-to-br from-red-500/10 via-pink-500/5 to-transparent backdrop-blur-xl border border-red-500/20 rounded-3xl p-6 text-center hover:border-red-400/40 transition-all duration-500">
                  {/* Animated background orb */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-400/30 to-pink-500/30 rounded-full blur-2xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  />
                  
                  {/* Icon with floating animation */}
                  <motion.div
                    className="relative z-10 flex justify-center mb-3"
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [0, -5, 5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/25">
                      <SparklesIcon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                  
                  {/* Number with counter animation */}
                  <motion.div
                    className="relative z-10 text-4xl sm:text-5xl font-black mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                  >
                    <span className="bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                      50+
                    </span>
                  </motion.div>
                  
                  <div className="relative z-10 text-gray-300 font-semibold text-sm tracking-wide uppercase">
                    Happy Clients
                  </div>
                  
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </motion.div>
              
              {/* Years Stat */}
              <motion.div 
                className="relative group overflow-hidden"
                whileHover={{ y: -8, rotateY: 5 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
              >
                <div className="relative bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-transparent backdrop-blur-xl border border-purple-500/20 rounded-3xl p-6 text-center hover:border-purple-400/40 transition-all duration-500">
                  {/* Animated background orb */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400/30 to-blue-500/30 rounded-full blur-2xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                  />
                  
                  {/* Icon with floating animation */}
                  <motion.div
                    className="relative z-10 flex justify-center mb-3"
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                      <SparklesIcon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                  
                  {/* Number with counter animation */}
                  <motion.div
                    className="relative z-10 text-4xl sm:text-5xl font-black mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
                  >
                    <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                      5+
                    </span>
                  </motion.div>
                  
                  <div className="relative z-10 text-gray-300 font-semibold text-sm tracking-wide uppercase">
                    Years Experience
                  </div>
                  
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Logo Visual */}
          <div className="flex items-center justify-center lg:justify-end order-first lg:order-last">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-md"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 sm:w-96 sm:h-96 bg-gradient-primary opacity-20 rounded-full blur-3xl" />
              </div>

              {/* Logo Container */}
              <div className="relative flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-10"
                >
                  <img 
                    src="/logo_white.png"
                    alt="Nine Tales Media Logo"
                    className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-[0_0_30px_rgba(255,107,53,0.5)]"
                  />
                </motion.div>
              </div>

              {/* Floating Elements */}
              {[
                { emoji: '💡', position: 'top-4 left-4', delay: 0 },
                { emoji: '🚀', position: 'top-8 right-8', delay: 0.5 },
                { emoji: '✨', position: 'bottom-8 left-8', delay: 1 },
                { emoji: '🎯', position: 'bottom-4 right-4', delay: 1.5 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${item.position} w-12 h-12 sm:w-14 sm:h-14 bg-gradient-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 shadow-lg`}
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ 
                    y: { duration: 3, repeat: Infinity, delay: item.delay },
                    rotate: { duration: 4, repeat: Infinity, delay: item.delay }
                  }}
                >
                  <span className="text-xl sm:text-2xl">{item.emoji}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        style={{ opacity }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-gray-400 font-medium tracking-wider uppercase">
            Scroll Down
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400/50 rounded-full flex justify-center p-2"
          >
            <div className="w-1 h-3 bg-gradient-primary rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
