'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const AgencyHero = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Agency service categories with visual elements
  const agencyCategories = [
    { 
      id: 'marketing', 
      title: 'Digital Marketing',
      icon: '🎯',
      color: '#ff6b35',
      description: 'Strategic campaigns that drive engagement and conversions',
      elements: ['SEO', 'Content', 'Social Media', 'Email', 'Analytics']
    },
    { 
      id: 'advertising', 
      title: 'Advertising',
      icon: '📊',
      color: '#ff3366',
      description: 'Targeted ads that reach your ideal audience at the right time',
      elements: ['Meta Ads', 'Google Ads', 'Display', 'Retargeting', 'PPC']
    },
    { 
      id: 'creative', 
      title: 'Creative',
      icon: '✨',
      color: '#8b5cf6',
      description: 'Compelling visuals and narratives that tell your brand story',
      elements: ['Branding', 'Design', 'Video', 'Animation', 'Photography']
    },
    { 
      id: 'development', 
      title: 'Development',
      icon: '💻',
      color: '#0891b2',
      description: 'Custom digital solutions that transform user experiences',
      elements: ['Web', 'Mobile', 'E-commerce', 'CMS', 'API']
    },
  ];
  
  // Auto-rotate through categories
  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % agencyCategories.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isHovering, agencyCategories.length]);
  
  // Track mouse movement for dynamic effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Add keyframe animations
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      
      @keyframes floatHorizontal {
        0%, 100% { transform: translateX(0); }
        50% { transform: translateX(10px); }
      }
      
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      @keyframes orbitInner {
        0% { transform: rotate(0deg) translateX(185px) rotate(0deg); }
        100% { transform: rotate(360deg) translateX(185px) rotate(-360deg); }
      }
      
      @keyframes orbitOuter {
        0% { transform: rotate(0deg) translateX(230px) rotate(0deg); }
        100% { transform: rotate(360deg) translateX(230px) rotate(-360deg); }
      }
      
      @keyframes pulse {
        0%, 100% { transform: scale(1); opacity: 0.7; }
        50% { transform: scale(1.05); opacity: 1; }
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes fadeInScale {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
      }
      
      @keyframes gradientFlow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      @keyframes dashOffset {
        from { stroke-dashoffset: 1000; }
        to { stroke-dashoffset: 0; }
      }
      
      @keyframes ripple {
        0% { transform: scale(0.8); opacity: 1; }
        100% { transform: scale(2); opacity: 0; }
      }
      
      @keyframes glow {
        0%, 100% { filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.3)); }
        50% { filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.5)); }
      }
      
      @keyframes shimmer {
        0% { background-position: -100% 0; }
        100% { background-position: 200% 0; }
      }
      
      .gradient-text {
        background: linear-gradient(90deg, #ff6b35, #ff3366, #8b5cf6, #0891b2, #ff6b35);
        background-size: 200% auto;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: gradientFlow 5s ease infinite;
        text-shadow: 0 0 20px rgba(255, 107, 53, 0.2);
      }
      
      .shimmer-button {
        background: linear-gradient(90deg, 
          rgba(255, 107, 53, 0.8) 0%, 
          rgba(255, 51, 102, 0.8) 25%, 
          rgba(139, 92, 246, 0.8) 50%, 
          rgba(255, 51, 102, 0.8) 75%, 
          rgba(255, 107, 53, 0.8) 100%);
        background-size: 200% 100%;
        animation: shimmer 3s infinite linear;
      }
      
      .hover-lift {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      
      .hover-lift:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
      }
      
      .category-indicator {
        transition: all 0.5s cubic-bezier(0.65, 0, 0.35, 1);
      }
      
      .category-button {
        transition: all 0.3s ease;
      }
      
      .category-button:hover {
        transform: translateX(5px);
      }
      
      .category-button.active {
        color: white;
      }
      
      .category-button.active::before {
        content: '';
        position: absolute;
        left: -20px;
        top: 50%;
        transform: translateY(-50%);
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }
      
      .fox-container {
        animation: float 6s ease-in-out infinite;
      }
      
      .orbit-element {
        animation: fadeInScale 0.5s ease forwards;
        transition: all 0.3s ease;
      }
      
      .orbit-element:hover {
        transform: scale(1.1) !important;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 10 !important;
      }
      
      .glass-effect {
        background: rgba(10, 10, 15, 0.7);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border-radius: 20px;
        border-width: 1px;
        border-style: solid;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  // Calculate parallax effect based on mouse position
  const getParallaxStyle = (depth = 0.02) => {
    if (!heroRef.current) return {};
    
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const moveX = (mousePosition.x - centerX) * depth;
    const moveY = (mousePosition.y - centerY) * depth;
    
    return {
      transform: `translate(${moveX}px, ${moveY}px)`,
    };
  };

  return (
    <section 
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#0a0a0f',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '100px',
        paddingBottom: '80px',
      }}
    >
      {/* Enhanced background elements */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 30% 30%, rgba(10, 10, 15, 0.8) 0%, rgba(10, 10, 15, 1) 70%)',
        zIndex: -2,
      }} />
      
      {/* Continuously animated gradient shapes */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '50%',
        height: '60%',
        background: `radial-gradient(circle at center, ${agencyCategories[activeSection].color}22, transparent 70%)`,
        filter: 'blur(80px)',
        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        opacity: 0.8,
        transition: 'background 0.5s ease',
        animation: 'float 20s infinite ease-in-out, pulse 10s infinite ease-in-out',
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '-15%',
        left: '-10%',
        width: '60%',
        height: '50%',
        background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15), transparent 70%)',
        filter: 'blur(80px)',
        borderRadius: '70% 30% 30% 70% / 60% 40% 60% 40%',
        opacity: 0.7,
        animation: 'floatHorizontal 25s infinite ease-in-out, pulse 12s infinite ease-in-out reverse',
      }} />
      
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '60%',
        width: '30%',
        height: '30%',
        background: 'radial-gradient(circle at center, rgba(8, 145, 178, 0.1), transparent 70%)',
        filter: 'blur(60px)',
        borderRadius: '60% 40% 50% 50% / 50% 50% 50% 50%',
        opacity: 0.6,
        animation: 'float 15s infinite ease-in-out 1s, pulse 8s infinite ease-in-out 1s',
      }} />
      
      {/* Enhanced grid with animated lines */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.15,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: -1,
      }}>
        <svg width="100%" height="100%" style={{ position: 'absolute', opacity: 0.4 }}>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            </pattern>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={`${agencyCategories[activeSection].color}00`} />
              <stop offset="50%" stopColor={`${agencyCategories[activeSection].color}55`} />
              <stop offset="100%" stopColor={`${agencyCategories[activeSection].color}00`} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Animated horizontal line */}
          <line 
            x1="0" 
            y1="50%" 
            x2="100%" 
            y2="50%" 
            stroke="url(#lineGradient)" 
            strokeWidth="1"
            style={{
              animation: 'dashOffset 15s linear infinite',
              strokeDasharray: '10, 15',
            }}
          />
          
          {/* Animated vertical line */}
          <line 
            x1="50%" 
            y1="0" 
            x2="50%" 
            y2="100%" 
            stroke="url(#lineGradient)" 
            strokeWidth="1"
            style={{
              animation: 'dashOffset 15s linear infinite reverse',
              strokeDasharray: '10, 20',
            }}
          />
        </svg>
        
        {/* Subtle dot pattern overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.3,
        }} />
      </div>
      
      {/* Awesome floating particles */}
      <div style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
      }}>
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={i}
            style={{
              position: 'absolute',
              width: i % 4 === 0 ? '6px' : i % 3 === 0 ? '4px' : '3px',
              height: i % 4 === 0 ? '6px' : i % 3 === 0 ? '4px' : '3px',
              borderRadius: '50%',
              background: i % 5 === 0 
                ? agencyCategories[activeSection].color 
                : i % 3 === 0 
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(255, 255, 255, 0.2)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `float ${5 + Math.random() * 10}s ease-in-out ${Math.random() * 5}s infinite`,
              transition: 'background 0.5s ease',
              boxShadow: i % 5 === 0 ? `0 0 8px ${agencyCategories[activeSection].color}88` : 'none',
            }}
          />
        ))}
      </div>
      
      {/* Floating connection lines */}
      <svg 
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: 0.1,
          zIndex: 1,
        }}
      >
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={agencyCategories[activeSection].color} stopOpacity="0" />
            <stop offset="50%" stopColor={agencyCategories[activeSection].color} stopOpacity="0.4" />
            <stop offset="100%" stopColor={agencyCategories[activeSection].color} stopOpacity="0" />
          </linearGradient>
        </defs>
        {Array.from({ length: 5 }).map((_, i) => (
          <line
            key={i}
            x1={`${20 * i}%`}
            y1="0%"
            x2={`${100 - 20 * i}%`}
            y2="100%"
            stroke="url(#connectionGradient)"
            strokeWidth="1"
            strokeDasharray="5,10"
            style={{
              animation: `dashOffset ${20 + i * 5}s linear infinite`,
            }}
          />
        ))}
      </svg>
      
      {/* Main content container with unique asymmetric layout */}
      <div style={{
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative',
        zIndex: 10,
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '20px',
          alignItems: 'center',
          position: 'relative',
        }}>
          {/* Left side: Headline and category navigation */}
          <div style={{
            gridColumn: '1 / span 5',
            position: 'relative',
            zIndex: 2,
          }}>
            {/* Enhanced agency badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 20px',
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '30px',
              marginBottom: '40px',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              animation: 'fadeInScale 0.8s ease-out',
            }}>
              <div style={{
                position: 'relative',
                width: '10px',
                height: '10px',
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  background: agencyCategories[activeSection].color,
                  animation: 'pulse 2s infinite',
                }} />
                <div style={{
                  position: 'absolute',
                  inset: '-4px',
                  borderRadius: '50%',
                  border: `1px solid ${agencyCategories[activeSection].color}`,
                  opacity: 0.5,
                  animation: 'pulse 2s infinite 0.3s',
                }} />
              </div>
              <span style={{ 
                color: 'white', 
                fontSize: '15px', 
                fontWeight: 600,
                letterSpacing: '0.5px',
              }}>
                Full-Service Digital Agency
              </span>
            </div>
            
            {/* Refined headline with better hierarchy */}
            <h1 style={{
              fontFamily: 'var(--font-space-grotesk, "Space Grotesk", sans-serif)',
              fontSize: 'clamp(3rem, 4.5vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: '24px',
              position: 'relative',
              animation: 'fadeInScale 0.8s ease-out 0.2s both',
            }}>
              <div style={{ 
                color: 'white', 
                marginBottom: '12px',
              }}>
                Transforming
              </div>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '12px',
              }}>
                <span className="gradient-text" style={{
                  fontWeight: 800,
                  letterSpacing: '-0.5px',
                }}>Ideas</span>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${agencyCategories[activeSection].color}, ${getNextColor(activeSection)})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  boxShadow: `0 4px 16px ${agencyCategories[activeSection].color}33`,
                  animation: 'float 3s ease-in-out infinite',
                  transition: 'background 0.5s ease, box-shadow 0.5s ease',
                }}>
                  {agencyCategories[activeSection].icon}
                </div>
              </div>
              <div style={{ 
                color: 'white',
              }}>
                Into Reality
              </div>
            </h1>
            
            {/* Refined tagline */}
            <p style={{
              fontSize: '17px',
              color: '#9ca3af',
              maxWidth: '420px',
              lineHeight: 1.65,
              marginBottom: '32px',
              animation: 'fadeInScale 0.8s ease-out 0.4s both',
              fontWeight: 400,
            }}>
              We craft compelling digital experiences that captivate audiences and drive extraordinary results for your business.
            </p>
            
            {/* Refined category navigation */}
            <div style={{
              marginTop: '48px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              animation: 'fadeInScale 0.8s ease-out 0.6s both',
            }}>
              {/* Refined category indicator */}
              <div className="category-indicator" style={{
                position: 'absolute',
                left: '-40px',
                top: `${activeSection * 52 + 26}px`,
                width: '30px',
                height: '2px',
                background: `linear-gradient(90deg, ${agencyCategories[activeSection].color}66, ${agencyCategories[activeSection].color})`,
                borderRadius: '2px',
                transition: 'top 0.5s cubic-bezier(0.65, 0, 0.35, 1), background 0.5s ease',
              }} />
              
              {agencyCategories.map((category, index) => (
                <button
                  key={category.id}
                  className={`category-button ${index === activeSection ? 'active' : ''}`}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    padding: '10px 0',
                    fontSize: '18px',
                    fontWeight: index === activeSection ? 600 : 400,
                    color: index === activeSection ? 'white' : '#6b7280',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: index === activeSection ? 1 : 0.8,
                    letterSpacing: '0.2px',
                  }}
                  onMouseEnter={() => {
                    setIsHovering(true);
                    setActiveSection(index);
                  }}
                  onMouseLeave={() => {
                    setIsHovering(false);
                  }}
                >
                  {index === activeSection && (
                    <span style={{
                      position: 'absolute',
                      left: '-18px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: category.color,
                      boxShadow: `0 0 8px ${category.color}88`,
                    }} />
                  )}
                  {category.title}
                </button>
              ))}
            </div>
          </div>
          
          {/* Middle: Enhanced visual showcase for current category */}
          <div style={{
            gridColumn: '6 / span 4',
            position: 'relative',
            height: '600px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {/* Refined central fox logo with sophisticated design */}
            <div className="fox-container" style={{
              position: 'relative',
              zIndex: 2,
            }}>
              {/* Refined multi-layer glow effect */}
              <div style={{
                position: 'absolute',
                inset: '-60px',
                background: `radial-gradient(circle, ${agencyCategories[activeSection].color}33 0%, transparent 70%)`,
                filter: 'blur(50px)',
                borderRadius: '50%',
                opacity: 0.7,
                transition: 'background 0.5s ease',
              }} />
              
              <div style={{
                position: 'absolute',
                inset: '-35px',
                background: `radial-gradient(circle, ${getNextColor(activeSection)}22 0%, transparent 60%)`,
                filter: 'blur(30px)',
                borderRadius: '50%',
                opacity: 0.5,
                transition: 'background 0.5s ease',
              }} />
              
              {/* Main container with refined proportions */}
              <div style={{
                width: '260px',
                height: '260px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(15, 15, 25, 0.95) 0%, rgba(10, 10, 15, 0.98) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: `2px solid ${agencyCategories[activeSection].color}33`,
                boxShadow: `0 20px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 2px 0 rgba(255, 255, 255, 0.08), 0 0 40px ${agencyCategories[activeSection].color}22`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'visible',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              }}>
                {/* Outer orbital ring with glow */}
                <div style={{
                  position: 'absolute',
                  inset: '-25px',
                  border: `2px solid ${agencyCategories[activeSection].color}22`,
                  borderRadius: '50%',
                  borderTopColor: `${agencyCategories[activeSection].color}66`,
                  borderRightColor: 'transparent',
                  animation: 'spin 25s linear infinite',
                  transition: 'border-color 0.5s ease',
                  boxShadow: `0 0 20px ${agencyCategories[activeSection].color}33`,
                }} />
                
                {/* Second orbital ring */}
                <div style={{
                  position: 'absolute',
                  inset: '-15px',
                  border: `1px dashed rgba(255, 255, 255, 0.1)`,
                  borderRadius: '50%',
                  animation: 'spin 35s linear infinite',
                }} />
                
                {/* Middle decorative ring */}
                <div style={{
                  position: 'absolute',
                  inset: '35px',
                  border: `1px solid rgba(255, 255, 255, 0.08)`,
                  borderRadius: '50%',
                  borderLeftColor: `${agencyCategories[activeSection].color}44`,
                  borderBottomColor: 'transparent',
                  animation: 'spin 18s linear infinite reverse',
                  transition: 'border-color 0.5s ease',
                }} />
                
                {/* Inner accent circle with pulse */}
                <div style={{
                  position: 'absolute',
                  width: '160px',
                  height: '160px',
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${agencyCategories[activeSection].color}12 0%, transparent 70%)`,
                  transition: 'background 0.5s ease',
                  animation: 'pulse 4s ease-in-out infinite',
                }} />
                
                {/* Fox emoji with refined presentation */}
                <div style={{
                  position: 'relative',
                  fontSize: '100px',
                  filter: `drop-shadow(0 8px 20px ${agencyCategories[activeSection].color}77)`,
                  transition: 'filter 0.5s ease, transform 0.3s ease',
                  transformOrigin: 'center',
                  animation: 'glow 3s ease-in-out infinite',
                }}>
                  🦊
                </div>
                
                {/* Enhanced accent dots with animation */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <div 
                    key={angle}
                    style={{
                      position: 'absolute',
                      width: i % 2 === 0 ? '6px' : '4px',
                      height: i % 2 === 0 ? '6px' : '4px',
                      borderRadius: '50%',
                      background: i % 2 === 0 ? agencyCategories[activeSection].color : 'rgba(255, 255, 255, 0.3)',
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-110px)`,
                      opacity: i % 2 === 0 ? 0.9 : 0.5,
                      transition: 'background 0.5s ease, opacity 0.5s ease',
                      boxShadow: i % 2 === 0 ? `0 0 10px ${agencyCategories[activeSection].color}aa` : 'none',
                      animation: `pulse ${2 + (i % 3)}s ease-in-out ${i * 0.2}s infinite`,
                    }}
                  />
                ))}
              </div>
              
              {/* Continuously orbiting elements in multiple rings */}
              {agencyCategories[activeSection].elements.map((element, i) => {
                // Distribute elements across 2 orbits for better spacing
                const orbit = i < 3 ? 0 : 1; // First 3 on inner orbit, rest on outer
                const elementsInOrbit = orbit === 0 ? 3 : agencyCategories[activeSection].elements.length - 3;
                const indexInOrbit = orbit === 0 ? i : i - 3;
                
                // Calculate initial angle for even distribution
                const angleOffset = indexInOrbit * (360 / elementsInOrbit);
                
                // Animation duration - slower for visual appeal
                const duration = orbit === 0 ? 25 : 30; // Inner orbits faster
                
                return (
                  <div 
                    key={element}
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transformOrigin: '0 0',
                      animation: `${orbit === 0 ? 'orbitInner' : 'orbitOuter'} ${duration}s linear infinite`,
                      animationDelay: `${-angleOffset / 360 * duration}s`,
                      zIndex: orbit === 0 ? 3 : 2,
                    }}
                  >
                    <div
                      className="orbit-element"
                      style={{
                        padding: '10px 18px',
                        background: 'rgba(15, 15, 25, 0.85)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        borderRadius: '24px',
                        border: `1px solid ${agencyCategories[activeSection].color}33`,
                        boxShadow: `0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)`,
                        color: '#e5e7eb',
                        fontSize: '14px',
                        fontWeight: 500,
                        letterSpacing: '0.3px',
                        whiteSpace: 'nowrap',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: 'translate(-50%, -50%)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `linear-gradient(135deg, ${agencyCategories[activeSection].color}22, rgba(15, 15, 25, 0.95))`;
                        e.currentTarget.style.borderColor = `${agencyCategories[activeSection].color}66`;
                        e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.08)';
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.boxShadow = `0 8px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px ${agencyCategories[activeSection].color}44`;
                        e.currentTarget.parentElement!.style.zIndex = '10';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(15, 15, 25, 0.85)';
                        e.currentTarget.style.borderColor = `${agencyCategories[activeSection].color}33`;
                        e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                        e.currentTarget.style.color = '#e5e7eb';
                        e.currentTarget.style.boxShadow = `0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)`;
                        e.currentTarget.parentElement!.style.zIndex = orbit === 0 ? '3' : '2';
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '7px',
                      }}>
                        <span style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: agencyCategories[activeSection].color,
                          boxShadow: `0 0 6px ${agencyCategories[activeSection].color}88`,
                        }} />
                        {element}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Refined decorative circles */}
            <svg 
              width="600" 
              height="600" 
              viewBox="0 0 600 600" 
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                opacity: 0.15,
                zIndex: 0,
                pointerEvents: 'none',
              }}
            >
              {/* Outer subtle circle */}
              <circle 
                cx="300" 
                cy="300" 
                r="280" 
                fill="none" 
                stroke={`${agencyCategories[activeSection].color}`}
                strokeWidth="0.5" 
                strokeDasharray="4,8" 
                style={{ 
                  transition: 'stroke 0.5s ease',
                  animation: 'dashOffset 40s linear infinite',
                }}
              />
              
              {/* Middle accent circle */}
              <circle 
                cx="300" 
                cy="300" 
                r="200" 
                fill="none" 
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="0.5"
                style={{ 
                  transition: 'stroke 0.5s ease',
                }}
              />
            </svg>
          </div>
          
          {/* Right side: Enhanced category description and CTA */}
          <div style={{
            gridColumn: '10 / span 3',
            position: 'relative',
            zIndex: 2,
          }}>
            {/* Refined category info card */}
            <div 
              className="glass-effect" 
              key={agencyCategories[activeSection].id}
              style={{
                border: `1px solid ${agencyCategories[activeSection].color}33`,
                padding: '30px',
                marginBottom: '28px',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                animation: 'fadeInScale 0.8s ease-out',
                position: 'relative',
                overflow: 'hidden',
              }}>
              {/* Subtle accent gradient */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '120px',
                height: '120px',
                background: `radial-gradient(circle, ${agencyCategories[activeSection].color}15 0%, transparent 70%)`,
                filter: 'blur(25px)',
                transition: 'background 0.5s ease',
              }} />
              
              {/* Refined header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '20px',
                position: 'relative',
              }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: `linear-gradient(135deg, ${agencyCategories[activeSection].color}66, ${agencyCategories[activeSection].color}33)`,
                  boxShadow: `0 6px 16px ${agencyCategories[activeSection].color}22`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '26px',
                  transition: 'all 0.5s ease',
                }}>
                  {agencyCategories[activeSection].icon}
                </div>
                
                <div>
                  <div style={{
                    color: '#6b7280',
                    fontSize: '12px',
                    fontWeight: 500,
                    marginBottom: '6px',
                    letterSpacing: '0.8px',
                    textTransform: 'uppercase',
                  }}>
                    Expertise In
                  </div>
                  <h3 style={{
                    color: 'white',
                    fontSize: '24px',
                    fontWeight: 600,
                    fontFamily: 'var(--font-space-grotesk, "Space Grotesk", sans-serif)',
                    letterSpacing: '0.2px',
                  }}>
                    {agencyCategories[activeSection].title}
                  </h3>
                </div>
              </div>
              
              {/* Refined description */}
              <p style={{
                color: '#d1d5db',
                fontSize: '15px',
                lineHeight: 1.7,
                marginBottom: '24px',
                position: 'relative',
              }}>
                {agencyCategories[activeSection].description}
              </p>
              
              {/* Refined service tags */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
              }}>
                {agencyCategories[activeSection].elements.map((element, i) => (
                  <span 
                    key={element}
                    style={{
                      padding: '7px 14px',
                      background: `${agencyCategories[activeSection].color}11`,
                      border: `1px solid ${agencyCategories[activeSection].color}33`,
                      borderRadius: '20px',
                      color: '#e5e7eb',
                      fontSize: '13px',
                      fontWeight: 400,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      animation: `fadeInScale 0.5s ease forwards ${0.2 + i * 0.05}s`,
                      opacity: 0,
                      cursor: 'default',
                      letterSpacing: '0.2px',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${agencyCategories[activeSection].color}22`;
                      e.currentTarget.style.borderColor = `${agencyCategories[activeSection].color}55`;
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `${agencyCategories[activeSection].color}11`;
                      e.currentTarget.style.borderColor = `${agencyCategories[activeSection].color}33`;
                      e.currentTarget.style.color = '#e5e7eb';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {element}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Enhanced CTA buttons */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
              animation: 'fadeInScale 0.8s ease-out 0.3s both',
            }}>
              <Link href="/contact" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                padding: '18px 32px',
                background: `linear-gradient(135deg, ${agencyCategories[activeSection].color} 0%, ${getNextColor(activeSection)} 100%)`,
                borderRadius: '30px',
                color: 'white',
                fontWeight: 700,
                fontSize: '16px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                isolation: 'isolate',
                boxShadow: `0 10px 25px -5px ${agencyCategories[activeSection].color}33`,
                letterSpacing: '0.5px',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = `0 15px 30px -5px ${agencyCategories[activeSection].color}55`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 10px 25px -5px ${agencyCategories[activeSection].color}33`;
              }}
              >
                {/* Shimmer effect */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                  transform: 'translateX(-100%)',
                  animation: 'shimmer 3s infinite',
                }} />
                
                <span>Start Your Project</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              
              <Link href="/portfolio" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                padding: '18px 32px',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: `1px solid ${agencyCategories[activeSection].color}44`,
                borderRadius: '30px',
                color: 'white',
                fontWeight: 600,
                fontSize: '16px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                letterSpacing: '0.5px',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = `${agencyCategories[activeSection].color}11`;
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>View Our Portfolio</span>
              </Link>
            </div>
            
            {/* Enhanced client logos */}
            <div style={{
              marginTop: '40px',
              animation: 'fadeInScale 0.8s ease-out 0.5s both',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px',
              }}>
                <div style={{
                  width: '30px',
                  height: '2px',
                  background: `linear-gradient(90deg, ${agencyCategories[activeSection].color}, transparent)`,
                  borderRadius: '2px',
                }} />
                <p style={{
                  color: '#d1d5db',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: 600,
                }}>
                  Trusted by Industry Leaders
                </p>
              </div>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '24px',
                alignItems: 'center',
              }}>
                {['BRAND', 'COMPANY', 'STARTUP', 'ENTERPRISE', 'AGENCY'].map((brand, i) => (
                  <div 
                    key={brand}
                    style={{
                      color: 'white',
                      fontSize: '15px',
                      fontWeight: 700,
                      opacity: 0.5,
                      letterSpacing: '1.5px',
                      transition: 'all 0.3s ease',
                      animation: `fadeInScale 0.5s ease forwards ${0.6 + i * 0.1}s`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '0.8';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '0.5';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
      }}>
        <span style={{
          color: '#9ca3af',
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}>
          Scroll to explore
        </span>
        <svg width="20" height="30" viewBox="0 0 20 30">
          <rect 
            x="1" 
            y="1" 
            width="18" 
            height="28" 
            rx="9" 
            fill="none" 
            stroke="rgba(255,255,255,0.2)" 
            strokeWidth="1"
          />
          <circle 
            cx="10" 
            cy="8" 
            r="3" 
            fill={agencyCategories[activeSection].color}
            style={{
              animation: 'float 1.5s ease-in-out infinite',
              transition: 'fill 0.5s ease',
            }}
          />
        </svg>
      </div>
    </section>
  );
};

// Helper function to get the next color in the category array
function getNextColor(currentIndex: number) {
  const colors = ['#ff6b35', '#ff3366', '#8b5cf6', '#0891b2'];
  const nextIndex = (currentIndex + 1) % colors.length;
  return colors[nextIndex];
}

export default AgencyHero;
