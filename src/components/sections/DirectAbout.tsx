'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const stats = [
  { value: '500+', label: 'Projects Completed', icon: '🚀' },
  { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
  { value: '5+', label: 'Years Experience', icon: '📅' },
  { value: '50+', label: 'Happy Clients', icon: '🤝' },
];

const values = [
  {
    icon: '✨',
    title: 'Creative Excellence',
    description: 'We push boundaries to deliver innovative solutions that stand out.',
    color: '#ff6b35'
  },
  {
    icon: '📊',
    title: 'Data-Driven Approach',
    description: 'Every decision is backed by analytics, insights, and proven strategies.',
    color: '#ff3366'
  },
  {
    icon: '🎯',
    title: 'Results-Focused',
    description: 'We measure success by the tangible results we deliver for your business.',
    color: '#8b5cf6'
  },
  {
    icon: '🤝',
    title: 'Collaborative Partnership',
    description: 'Your goals become our goals. We work as an extension of your team.',
    color: '#0891b2'
  },
];

const DirectAbout = () => {
  const [activeValue, setActiveValue] = useState(0);
  
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      @keyframes countUp {
        from { transform: translateY(15px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      
      @keyframes scaleIn {
        from { transform: scale(0.9); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
      
      @keyframes slideInLeft {
        from { transform: translateX(-30px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      
      @keyframes slideInRight {
        from { transform: translateX(30px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      
      @keyframes morphShape {
        0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
      }
      
      .stat-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .stat-card:hover {
        transform: translateY(-6px) scale(1.03);
      }
      
      .value-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{
      padding: '80px 0',
      background: '#0a0a0f',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated background blobs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(255, 107, 53, 0.12) 0%, transparent 70%)',
        filter: 'blur(60px)',
        animation: 'morphShape 20s ease-in-out infinite, float 15s ease-in-out infinite',
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '10%',
        width: '280px',
        height: '280px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
        filter: 'blur(60px)',
        animation: 'morphShape 25s ease-in-out infinite reverse, floatHorizontal 18s ease-in-out infinite',
      }} />
      
      {/* Floating particles */}
      <div style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div 
            key={i}
            style={{
              position: 'absolute',
              width: i % 4 === 0 ? '4px' : '2px',
              height: i % 4 === 0 ? '4px' : '2px',
              borderRadius: '50%',
              background: i % 3 === 0 ? 'rgba(255, 107, 53, 0.3)' : 'rgba(255, 255, 255, 0.2)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animation: `float ${10 + Math.random() * 15}s ease-in-out ${Math.random() * 5}s infinite`,
            }}
          />
        ))}
      </div>
      
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Main content grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
          gap: '40px 60px',
          alignItems: 'center',
          marginBottom: '60px',
        }}>
          {/* Visual side with fox */}
          <div style={{
            position: 'relative',
            animation: 'slideInLeft 0.8s ease-out',
          }}>
            {/* Main visual container */}
            <div style={{
              position: 'relative',
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: '0 24px 48px rgba(0, 0, 0, 0.3)',
              aspectRatio: '1/1',
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              isolation: 'isolate',
            }}>
              {/* Orbiting elements */}
              {Array.from({ length: 6 }).map((_, i) => (
                <div 
                  key={i}
                  style={{
                    position: 'absolute',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: i % 2 === 0 ? '#ff6b35' : '#8b5cf6',
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-140px)`,
                    animation: `pulse ${2 + (i % 3)}s ease-in-out ${i * 0.2}s infinite`,
                    boxShadow: i % 2 === 0 ? '0 0 12px #ff6b35' : '0 0 12px #8b5cf6',
                  }}
                />
              ))}
              
              {/* Central fox with glow */}
              <div style={{
                fontSize: 'clamp(5rem, 10vw, 8rem)',
                filter: 'drop-shadow(0 0 24px rgba(255, 107, 53, 0.5))',
                animation: 'float 6s ease-in-out infinite, glow 3s ease-in-out infinite',
                position: 'relative',
                zIndex: 2,
              }}>
                🦊
              </div>
              
              {/* Inner glow rings */}
              <div style={{
                position: 'absolute',
                width: '240px',
                height: '240px',
                border: '2px solid rgba(255, 107, 53, 0.3)',
                borderRadius: '50%',
                animation: 'spin 30s linear infinite',
                borderTopColor: 'rgba(255, 107, 53, 0.6)',
                borderRightColor: 'transparent',
              }} />
              
              <div style={{
                position: 'absolute',
                width: '160px',
                height: '160px',
                border: '2px solid rgba(139, 92, 246, 0.3)',
                borderRadius: '50%',
                animation: 'spin 20s linear infinite reverse',
                borderBottomColor: 'rgba(139, 92, 246, 0.6)',
                borderLeftColor: 'transparent',
              }} />
              
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.08) 0%, rgba(255, 51, 102, 0.08) 50%, rgba(139, 92, 246, 0.08) 100%)',
                mixBlendMode: 'overlay',
              }} />
            </div>
            
            {/* Floating decorative shapes */}
            <div style={{
              position: 'absolute',
              top: '-30px',
              left: '-30px',
              width: '90px',
              height: '90px',
              borderRadius: '20px',
              border: '2px solid rgba(255, 107, 53, 0.4)',
              zIndex: -1,
              animation: 'float 8s ease-in-out infinite',
            }} />
            
            <div style={{
              position: 'absolute',
              bottom: '-30px',
              right: '-30px',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              border: '2px solid rgba(139, 92, 246, 0.4)',
              zIndex: -1,
              animation: 'floatHorizontal 10s ease-in-out infinite',
            }} />
          </div>
          
          {/* Text content side */}
          <div style={{
            animation: 'slideInRight 0.8s ease-out',
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 20px',
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '24px',
              border: '1px solid rgba(255, 107, 53, 0.2)',
              marginBottom: '20px',
            }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ff6b35, #ff3366)',
                  animation: 'pulse 2s infinite',
                }} />
                <span style={{
                  fontSize: '20px',
                  marginRight: '4px',
                }}>🦊</span>
              <span style={{
                color: '#ff6b35',
                fontWeight: 600,
                fontSize: '14px',
                letterSpacing: '0.5px',
              }}>
                About Nine Tales Media
              </span>
            </div>
            
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '20px',
              fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
              lineHeight: 1.2,
              letterSpacing: '-0.5px',
            }}>
              We&apos;re a team of{' '}
              <span style={{
                background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 33%, #8b5cf6 66%, #0891b2 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 5s ease-in-out infinite',
              }}>
                creative storytellers
              </span>{' '}
              and tech enthusiasts
            </h2>
            
            <p style={{
              fontSize: '1.0625rem',
              color: '#d1d5db',
              marginBottom: '16px',
              lineHeight: 1.65,
            }}>
              Nine Tales Media was founded with a simple yet powerful mission: to help businesses craft and share their unique stories in the ever-evolving digital landscape.
            </p>
            
            <p style={{
              fontSize: '1.0625rem',
              color: '#d1d5db',
              marginBottom: '28px',
              lineHeight: 1.65,
            }}>
              We combine boundless creativity with cutting-edge technology to create compelling digital experiences that captivate audiences and drive measurable results.
            </p>
            
            {/* Values grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
              gap: '14px',
              marginBottom: '28px',
            }}>
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="value-card"
                  style={{
                    padding: '18px',
                    background: activeValue === index 
                      ? `linear-gradient(135deg, ${value.color}15, ${value.color}08)`
                      : 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    borderRadius: '16px',
                    border: activeValue === index 
                      ? `1px solid ${value.color}44`
                      : '1px solid rgba(255, 255, 255, 0.05)',
                    transform: activeValue === index ? 'translateY(-3px)' : 'translateY(0)',
                    boxShadow: activeValue === index ? `0 8px 24px ${value.color}22` : 'none',
                    cursor: 'pointer',
                    animation: `scaleIn 0.5s ease-out ${index * 0.1}s both`,
                  }}
                  onMouseEnter={() => setActiveValue(index)}
                >
                  <div style={{
                    fontSize: '24px',
                    marginBottom: '10px',
                    filter: activeValue === index ? 'drop-shadow(0 0 8px currentColor)' : 'none',
                    transition: 'filter 0.3s ease',
                  }}>
                    {value.icon}
                  </div>
                  <h3 style={{
                    fontSize: '0.9375rem',
                    fontWeight: 700,
                    color: 'white',
                    marginBottom: '6px',
                    fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                  }}>
                    {value.title}
                  </h3>
                  <p style={{
                    fontSize: '0.8125rem',
                    color: '#d1d5db',
                    lineHeight: 1.5,
                  }}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <Link 
              href="/about" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'white',
                padding: '14px 28px',
                borderRadius: '24px',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
                background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 50%, #8b5cf6 100%)',
                boxShadow: '0 8px 24px rgba(255, 107, 53, 0.3)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                isolation: 'isolate',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 107, 53, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 107, 53, 0.3)';
              }}
            >
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                transform: 'translateX(-100%)',
                animation: 'shimmer 3s infinite',
              }} />
              Discover Our Story
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Stats section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
          gap: '24px',
          animation: 'slideInUp 0.8s ease-out 0.4s both',
        }}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="stat-card"
              style={{
                padding: '28px 20px',
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
              }}
            >
              {/* Background gradient */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: `linear-gradient(90deg, transparent, ${index % 2 === 0 ? '#ff6b35' : '#8b5cf6'}, transparent)`,
              }} />
              
              <div style={{
                fontSize: '36px',
                marginBottom: '10px',
                filter: 'drop-shadow(0 0 12px currentColor)',
              }}>
                {stat.icon}
              </div>
              
              <div style={{
                fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                fontWeight: 800,
                color: index % 2 === 0 ? '#ff6b35' : '#8b5cf6',
                marginBottom: '6px',
                fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                letterSpacing: '-1px',
                animation: `countUp 1s ease-out ${0.5 + index * 0.1}s both`,
              }}>
                {stat.value}
              </div>
              
              <div style={{
                fontSize: '0.875rem',
                color: '#d1d5db',
                fontWeight: 500,
                lineHeight: 1.4,
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectAbout;
