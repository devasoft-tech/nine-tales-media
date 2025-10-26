'use client';

import Link from 'next/link';
import { useEffect } from 'react';

const DirectHero = () => {
  useEffect(() => {
    // Add keyframes animation for the floating effect
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
      }
      
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      @keyframes glow {
        0%, 100% { box-shadow: 0 0 20px rgba(255, 107, 53, 0.5); }
        50% { box-shadow: 0 0 30px rgba(255, 107, 53, 0.8); }
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: '#0a0a0f',
      paddingTop: '80px', // Account for navigation height
    }}>
      {/* Background Gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)',
        opacity: 0.9,
      }} />
      
      {/* Animated Particles */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            style={{
              position: 'absolute',
              width: i % 3 === 0 ? '8px' : '4px',
              height: i % 3 === 0 ? '8px' : '4px',
              borderRadius: '50%',
              backgroundColor: i % 5 === 0 ? '#ff3366' : i % 3 === 0 ? '#8b5cf6' : '#ff6b35',
              opacity: i % 5 === 0 ? 0.3 : 0.2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 7}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>
      
      {/* Geometric Shapes */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '160px',
        height: '160px',
        borderRadius: '50%',
        border: '2px solid rgba(255, 107, 53, 0.3)',
        animation: 'spin 20s linear infinite',
        zIndex: 1,
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '120px',
        height: '120px',
        borderRadius: '8px',
        border: '2px solid rgba(255, 51, 102, 0.3)',
        animation: 'spin 15s linear infinite reverse',
        zIndex: 1,
      }} />
      
      {/* Main Content Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        zIndex: 2,
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          alignItems: 'center',
          minHeight: '80vh',
        }}>
          {/* Text Content */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              display: 'inline-block',
              padding: '10px 20px',
              background: 'rgba(255, 107, 53, 0.2)',
              borderRadius: '9999px',
              color: '#ff6b35',
              fontWeight: 500,
              fontSize: '14px',
              border: '1px solid rgba(255, 107, 53, 0.3)',
              marginBottom: '24px',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}>
              🦊 Welcome to Nine Tales Media
            </div>
            
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 800,
              color: 'white',
              marginBottom: '32px',
              lineHeight: 1.1,
              fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            }}>
              Crafting{' '}
              <span style={{
                background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 50%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
                position: 'relative',
              }}>Digital</span>
              <br />
              Narratives,{' '}
              <span style={{
                background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 50%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
                position: 'relative',
              }}>One Tale</span> at a Time
            </h1>
            
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#d1d5db',
              marginBottom: '24px',
              maxWidth: '600px',
              margin: '0 auto 32px',
              lineHeight: 1.6,
            }}>
              We blend creativity with cutting-edge technology to create compelling digital experiences that captivate audiences and drive extraordinary results for your business.
            </p>
            
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '16px',
              justifyContent: 'center',
              marginBottom: '48px',
            }}>
              <Link href="/contact" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 50%, #8b5cf6 100%)',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '9999px',
                fontWeight: 600,
                fontSize: '16px',
                textDecoration: 'none',
                boxShadow: '0 0 20px rgba(255, 107, 53, 0.25)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <span>Get Started</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              
              <Link href="/portfolio" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'transparent',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '9999px',
                fontWeight: 600,
                fontSize: '16px',
                textDecoration: 'none',
                border: '2px solid rgba(107, 114, 128, 0.6)',
                transition: 'all 0.3s ease',
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="10 8 16 12 10 16 10 8"/>
                </svg>
                <span>View Our Work</span>
              </Link>
            </div>
            
            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px',
              marginTop: '48px',
              paddingTop: '32px',
              borderTop: '1px solid rgba(107, 114, 128, 0.3)',
            }}>
              <div>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 50%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                }}>
                  150+
                </div>
                <div style={{ color: '#9ca3af', fontSize: '14px', marginTop: '4px' }}>
                  Projects Completed
                </div>
              </div>
              
              <div>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 50%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                }}>
                  50+
                </div>
                <div style={{ color: '#9ca3af', fontSize: '14px', marginTop: '4px' }}>
                  Happy Clients
                </div>
              </div>
              
              <div>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 50%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                }}>
                  5+
                </div>
                <div style={{ color: '#9ca3af', fontSize: '14px', marginTop: '4px' }}>
                  Years Experience
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            {/* Main Circle */}
            <div style={{
              width: '360px',
              height: '360px',
              position: 'relative',
              animation: 'spin 40s linear infinite',
            }}>
              {/* Outer glow */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 50%, #8b5cf6 100%)',
                borderRadius: '50%',
                opacity: 0.2,
                filter: 'blur(32px)',
              }} />
              
              {/* Main circle with glass effect */}
              <div style={{
                position: 'absolute',
                inset: '16px',
                background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.2) 0%, rgba(255, 51, 102, 0.2) 50%, rgba(139, 92, 246, 0.2) 100%)',
                borderRadius: '50%',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }} />
              
              {/* Inner Fox Symbol */}
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{
                  position: 'relative',
                  animation: 'float 3s ease-in-out infinite',
                }}>
                  {/* Glow behind emoji */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '80px',
                    height: '80px',
                    background: 'rgba(255, 107, 53, 0.3)',
                    borderRadius: '50%',
                    filter: 'blur(16px)',
                    transform: 'translate(-50%, -50%)',
                  }} />
                  
                  {/* Fox emoji */}
                  <div style={{
                    fontSize: '7rem',
                    position: 'relative',
                    zIndex: 10,
                    filter: 'drop-shadow(0 0 8px rgba(255, 107, 53, 0.8))',
                  }}>
                    🦊
                  </div>
                </div>
              </div>
              
              {/* Orbiting Elements */}
              {Array.from({ length: 8 }).map((_, i) => {
                const isSpecial = i % 2 === 0;
                const radius = isSpecial ? 180 : 160;
                const angle = (i * (360 / 8) * Math.PI) / 180;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <div
                    key={i}
                    style={{
                      position: 'absolute',
                      width: isSpecial ? '24px' : '12px',
                      height: isSpecial ? '24px' : '12px',
                      borderRadius: '50%',
                      background: isSpecial 
                        ? 'linear-gradient(135deg, #ff6b35 0%, #ff3366 100%)' 
                        : i % 3 === 0 ? '#ff6b35' : i % 3 === 1 ? '#ff3366' : '#8b5cf6',
                      top: '50%',
                      left: '50%',
                      transform: `translateX(${x}px) translateY(${y}px)`,
                      boxShadow: isSpecial ? '0 0 10px rgba(255, 107, 53, 0.5)' : 'none',
                    }}
                  >
                    {isSpecial && (
                      <div style={{
                        width: '8px',
                        height: '8px',
                        background: 'white',
                        borderRadius: '50%',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        animation: 'pulse 2s infinite',
                      }} />
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Floating Elements */}
            <div style={{
              position: 'absolute',
              top: '-40px',
              left: '-40px',
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 100%)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              animation: 'float 4s ease-in-out infinite',
            }}>
              <span style={{ fontSize: '2rem' }}>💡</span>
            </div>
            
            <div style={{
              position: 'absolute',
              top: '-16px',
              right: '-64px',
              width: '64px',
              height: '64px',
              background: 'linear-gradient(135deg, #ff3366 0%, #8b5cf6 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              animation: 'float 3.5s ease-in-out infinite 1s',
            }}>
              <span style={{ fontSize: '1.5rem' }}>🚀</span>
            </div>
            
            <div style={{
              position: 'absolute',
              bottom: '-40px',
              left: '-24px',
              width: '56px',
              height: '56px',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #ff6b35 100%)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              animation: 'float 5s ease-in-out infinite 2s',
            }}>
              <span style={{ fontSize: '1.5rem' }}>✨</span>
            </div>
            
            <div style={{
              position: 'absolute',
              bottom: '40px',
              right: '-48px',
              width: '56px',
              height: '56px',
              background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.9) 0%, rgba(139, 92, 246, 0.9) 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              animation: 'float 4s ease-in-out infinite 1.5s',
            }}>
              <span style={{ fontSize: '1.5rem' }}>🎯</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
      }}>
        <p style={{
          fontSize: '12px',
          color: '#9ca3af',
          fontWeight: 500,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}>
          Scroll Down
        </p>
        
        <div style={{
          width: '32px',
          height: '56px',
          border: '2px solid rgba(156, 163, 175, 0.5)',
          borderRadius: '9999px',
          display: 'flex',
          justifyContent: 'center',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            width: '6px',
            height: '16px',
            background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 50%, #8b5cf6 100%)',
            borderRadius: '9999px',
            marginTop: '8px',
            animation: 'float 2s ease-in-out infinite',
          }} />
        </div>
      </div>
    </section>
  );
};

export default DirectHero;
