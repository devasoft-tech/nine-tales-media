'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const CreativeHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const foxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Add keyframes animation for various effects
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      @keyframes gradientFlow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      @keyframes floatUpDown {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
      
      @keyframes rotateSlowly {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 0.7; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.05); }
      }
      
      @keyframes shimmer {
        0% { background-position: -100% 0; }
        100% { background-position: 200% 0; }
      }
      
      @keyframes fadeInBlur {
        0% { opacity: 0; filter: blur(10px); transform: scale(0.9); }
        100% { opacity: 1; filter: blur(0); transform: scale(1); }
      }
      
      @keyframes typewriter {
        from { width: 0; }
        to { width: 100%; }
      }
      
      @keyframes blink {
        50% { border-color: transparent; }
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
      
      .text-gradient {
        background: linear-gradient(90deg, #ff6b35, #ff3366, #8b5cf6, #ff3366, #ff6b35);
        background-size: 200% auto;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: gradientFlow 5s ease infinite;
      }
      
      .fox-shadow {
        filter: drop-shadow(0 0 30px rgba(255, 107, 53, 0.6));
      }
      
      .typewriter {
        overflow: hidden;
        white-space: nowrap;
        border-right: 3px solid #ff6b35;
        animation: 
          typewriter 3s steps(40) 1s forwards,
          blink 1s step-end infinite;
      }
    `;
    document.head.appendChild(styleSheet);
    
    // Mouse move event for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    // Scroll event for parallax effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.head.removeChild(styleSheet);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Calculate parallax effects based on mouse position
  const calculateParallax = (depth: number = 0.1) => {
    if (!heroRef.current) return { x: 0, y: 0 };
    
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const moveX = (mousePosition.x - centerX) * depth;
    const moveY = (mousePosition.y - centerY) * depth;
    
    return { x: moveX, y: moveY };
  };

  // Generate random position for stars
  const generateStars = (count: number) => {
    return Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 2 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 3;
      const duration = Math.random() * 3 + 2;
      
      return (
        <div 
          key={i}
          style={{
            position: 'absolute',
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            backgroundColor: i % 5 === 0 ? '#ff6b35' : i % 3 === 0 ? '#ff3366' : '#8b5cf6',
            left: `${x}%`,
            top: `${y}%`,
            opacity: Math.random() * 0.5 + 0.3,
            animation: `pulse ${duration}s ease-in-out ${delay}s infinite`,
          }}
        />
      );
    });
  };
  
  // Calculate fox movement based on mouse position
  useEffect(() => {
    if (foxRef.current) {
      const { x, y } = calculateParallax(0.02);
      foxRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.2)`;
    }
  }, [mousePosition]);

  return (
    <section 
      ref={heroRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0a0a0f 0%, #16213e 50%, #0a0a0f 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 0',
      }}
    >
      {/* Dynamic background with stars */}
      <div style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        opacity: 0.8,
      }}>
        {generateStars(100)}
      </div>
      
      {/* Animated gradient circles */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 107, 53, 0.2) 0%, transparent 70%)',
        filter: 'blur(60px)',
        opacity: 0.6,
        transform: `translate(${calculateParallax(0.05).x * -1}px, ${calculateParallax(0.05).y * -1}px)`,
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '10%',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
        filter: 'blur(50px)',
        opacity: 0.5,
        transform: `translate(${calculateParallax(0.03).x}px, ${calculateParallax(0.03).y}px)`,
      }} />
      
      {/* Animated lines */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.15,
        overflow: 'hidden',
      }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={i}
            style={{
              position: 'absolute',
              top: `${20 * i}%`,
              left: 0,
              right: 0,
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.7), transparent)',
              transform: `translateY(${scrollY * 0.2 * (i % 2 === 0 ? 1 : -1)}px)`,
            }}
          />
        ))}
        
        {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={i}
            style={{
              position: 'absolute',
              left: `${20 * i}%`,
              top: 0,
              bottom: 0,
              width: '1px',
              background: 'linear-gradient(180deg, transparent, rgba(139, 92, 246, 0.7), transparent)',
              transform: `translateX(${scrollY * 0.1 * (i % 2 === 0 ? 1 : -1)}px)`,
            }}
          />
        ))}
      </div>
      
      {/* Main content container */}
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        position: 'relative',
        zIndex: 10,
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center',
        }}>
          {/* Left side: Creative text content */}
          <div style={{
            textAlign: 'left',
            animation: 'fadeInBlur 1s ease-out forwards',
          }}>
            <div style={{
              display: 'inline-block',
              padding: '8px 16px',
              background: 'rgba(255, 107, 53, 0.1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '30px',
              border: '1px solid rgba(255, 107, 53, 0.3)',
              marginBottom: '24px',
              transform: 'translateZ(0)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#ff6b35',
                  animation: 'pulse 2s infinite',
                }} />
                <span style={{
                  color: '#ff6b35',
                  fontSize: '14px',
                  fontWeight: 500,
                }}>
                  Digital Storytellers
                </span>
              </div>
            </div>
            
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '24px',
              fontFamily: 'var(--font-space-grotesk, "Space Grotesk", sans-serif)',
              position: 'relative',
            }}>
              <span style={{
                color: 'white',
                display: 'block',
                marginBottom: '8px',
              }}>
                Where Tech Meets
              </span>
              <div style={{
                position: 'relative',
                display: 'inline-block',
                marginBottom: '8px',
              }}>
                <span className="text-gradient" style={{
                  fontWeight: 900,
                }}>
                  Creativity
                </span>
                <div style={{
                  position: 'absolute',
                  bottom: '-5px',
                  left: '0',
                  width: '100%',
                  height: '4px',
                  background: 'linear-gradient(90deg, #ff6b35, #ff3366, #8b5cf6)',
                  borderRadius: '2px',
                }} />
              </div>
              <span style={{
                color: 'white',
                display: 'block',
              }}>
                & Innovation
              </span>
            </h1>
            
            <div className="typewriter" style={{
              width: '0',
              color: '#d1d5db',
              fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
              marginBottom: '32px',
              maxWidth: '500px',
              lineHeight: 1.6,
            }}>
              Crafting digital narratives that captivate, engage, and drive extraordinary results for your business.
            </div>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              marginTop: '40px',
            }}>
              <Link href="/contact" style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 32px',
                borderRadius: '30px',
                color: 'white',
                fontWeight: 600,
                fontSize: '16px',
                textDecoration: 'none',
                overflow: 'hidden',
                isolation: 'isolate',
                zIndex: 1,
              }}>
                <div className="shimmer-button" style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: -1,
                }} />
                <span>Start Your Journey</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              
              <Link href="/portfolio" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 32px',
                borderRadius: '30px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontWeight: 600,
                fontSize: '16px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="10 8 16 12 10 16 10 8"/>
                </svg>
                <span>View Our Work</span>
              </Link>
            </div>
            
            {/* Floating badges */}
            <div style={{
              display: 'flex',
              gap: '16px',
              marginTop: '64px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 20px',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                animation: 'floatUpDown 4s ease-in-out infinite',
              }}>
                <div style={{
                  fontSize: '24px',
                }}>🏆</div>
                <div>
                  <div style={{
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '18px',
                  }}>150+</div>
                  <div style={{
                    color: '#9ca3af',
                    fontSize: '12px',
                  }}>Projects</div>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 20px',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                animation: 'floatUpDown 4s ease-in-out 0.5s infinite',
              }}>
                <div style={{
                  fontSize: '24px',
                }}>⭐</div>
                <div>
                  <div style={{
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '18px',
                  }}>50+</div>
                  <div style={{
                    color: '#9ca3af',
                    fontSize: '12px',
                  }}>Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side: Creative visual */}
          <div style={{
            position: 'relative',
            animation: 'fadeInBlur 1s ease-out 0.3s forwards',
            opacity: 0,
          }}>
            {/* Main visual element */}
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1',
              maxWidth: '500px',
              margin: '0 auto',
            }}>
              {/* Background glow */}
              <div style={{
                position: 'absolute',
                inset: '-10%',
                background: 'radial-gradient(circle, rgba(255, 107, 53, 0.3) 0%, transparent 70%)',
                filter: 'blur(40px)',
                opacity: 0.8,
                animation: 'pulse 4s infinite ease-in-out',
              }} />
              
              {/* Rotating outer ring */}
              <div style={{
                position: 'absolute',
                inset: '5%',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                animation: 'rotateSlowly 20s linear infinite',
              }}>
                {/* Dots on the ring */}
                {Array.from({ length: 12 }).map((_, i) => {
                  const angle = (i * 30 * Math.PI) / 180;
                  const x = 50 + 45 * Math.cos(angle);
                  const y = 50 + 45 * Math.sin(angle);
                  
                  return (
                    <div 
                      key={i}
                      style={{
                        position: 'absolute',
                        left: `${x}%`,
                        top: `${y}%`,
                        width: i % 3 === 0 ? '12px' : '8px',
                        height: i % 3 === 0 ? '12px' : '8px',
                        borderRadius: '50%',
                        backgroundColor: i % 3 === 0 ? '#ff6b35' : i % 3 === 1 ? '#ff3366' : '#8b5cf6',
                        transform: 'translate(-50%, -50%)',
                        boxShadow: i % 3 === 0 ? '0 0 15px rgba(255, 107, 53, 0.8)' : 'none',
                      }}
                    />
                  );
                })}
              </div>
              
              {/* Inner rotating ring */}
              <div style={{
                position: 'absolute',
                inset: '20%',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                animation: 'rotateSlowly 15s linear infinite reverse',
              }}>
                {/* Dots on the inner ring */}
                {Array.from({ length: 8 }).map((_, i) => {
                  const angle = (i * 45 * Math.PI) / 180;
                  const x = 50 + 30 * Math.cos(angle);
                  const y = 50 + 30 * Math.sin(angle);
                  
                  return (
                    <div 
                      key={i}
                      style={{
                        position: 'absolute',
                        left: `${x}%`,
                        top: `${y}%`,
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: i % 2 === 0 ? '#ff3366' : '#8b5cf6',
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                  );
                })}
              </div>
              
              {/* Fox in the center */}
              <div 
                ref={foxRef}
                style={{
                  position: 'absolute',
                  inset: '30%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div 
                  className="fox-shadow"
                  style={{
                    position: 'relative',
                    fontSize: '80px',
                    filter: 'drop-shadow(0 0 30px rgba(255, 107, 53, 0.6))',
                    animation: 'pulse 3s infinite ease-in-out',
                  }}>
                  🦊
                </div>
              </div>
              
              {/* Floating elements */}
              <div style={{
                position: 'absolute',
                top: '10%',
                left: '0%',
                padding: '16px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.2) 0%, rgba(255, 51, 102, 0.2) 100%)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'floatUpDown 5s ease-in-out infinite',
                transform: `translate(${calculateParallax(0.04).x * -1}px, ${calculateParallax(0.04).y * -1}px)`,
              }}>
                <span style={{ fontSize: '24px' }}>💡</span>
              </div>
              
              <div style={{
                position: 'absolute',
                bottom: '15%',
                right: '5%',
                padding: '16px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(255, 51, 102, 0.2) 100%)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'floatUpDown 4s ease-in-out 0.5s infinite',
                transform: `translate(${calculateParallax(0.03).x}px, ${calculateParallax(0.03).y}px)`,
              }}>
                <span style={{ fontSize: '24px' }}>🚀</span>
              </div>
              
              <div style={{
                position: 'absolute',
                top: '60%',
                right: '0%',
                padding: '16px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(255, 51, 102, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'floatUpDown 6s ease-in-out 1s infinite',
                transform: `translate(${calculateParallax(0.02).x}px, ${calculateParallax(0.02).y}px)`,
              }}>
                <span style={{ fontSize: '24px' }}>✨</span>
              </div>
            </div>
            
            {/* Tech stack badges */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'center',
              marginTop: '40px',
            }}>
              {['AI', 'Web3', 'React', 'Design', 'Marketing'].map((tech, i) => (
                <div 
                  key={tech}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    color: '#d1d5db',
                    fontSize: '14px',
                    fontWeight: 500,
                    animation: `fadeInBlur 0.5s ease-out ${0.5 + i * 0.1}s forwards`,
                    opacity: 0,
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        opacity: 0,
        animation: 'fadeInBlur 1s ease-out 1.5s forwards',
      }}>
        <span style={{
          color: '#9ca3af',
          fontSize: '12px',
          letterSpacing: '1px',
          textTransform: 'uppercase',
        }}>
          Scroll Down
        </span>
        <div style={{
          width: '24px',
          height: '40px',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'center',
          padding: '6px 0',
        }}>
          <div style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #ff6b35, #ff3366)',
            animation: 'floatUpDown 1.5s ease-in-out infinite',
          }} />
        </div>
      </div>
    </section>
  );
};

export default CreativeHero;
