'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const services = [
  {
    icon: '📱',
    title: 'Content Creation',
    description: 'Engaging content that resonates with your audience and drives engagement across all platforms.',
    color: '#ff6b35',
    tags: ['Social Media', 'Blogs', 'Videos']
  },
  {
    icon: '📊',
    title: 'Meta & Google Ads',
    description: 'Strategic ad campaigns that maximize ROI and deliver measurable results for your business.',
    color: '#ff3366',
    tags: ['PPC', 'Targeting', 'Analytics']
  },
  {
    icon: '🎬',
    title: 'TVC Production',
    description: 'Compelling television commercials that capture attention and communicate your brand message.',
    color: '#8b5cf6',
    tags: ['Video', 'Broadcast', 'Story']
  },
  {
    icon: '🛒',
    title: 'E-commerce Marketing',
    description: 'Comprehensive strategies to increase conversions and grow your online store revenue.',
    color: '#0891b2',
    tags: ['SEO', 'Conversion', 'Growth']
  },
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Custom websites and applications that deliver exceptional user experiences and drive results.',
    color: '#059669',
    tags: ['React', 'Next.js', 'UI/UX']
  },
  {
    icon: '🤖',
    title: 'AI Chatbot Integration',
    description: 'Intelligent chatbots that enhance customer service and streamline business operations.',
    color: '#7c3aed',
    tags: ['AI', 'Automation', '24/7']
  }
];

const DirectServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      @keyframes slideInUp {
        from { 
          opacity: 0; 
          transform: translateY(30px); 
        }
        to { 
          opacity: 1; 
          transform: translateY(0); 
        }
      }
      
      @keyframes slideRight {
        0%, 100% { transform: translateX(0); }
        50% { transform: translateX(4px); }
      }
      
      .service-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .service-icon-wrapper {
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      
      .service-card:hover .service-icon-wrapper {
        transform: scale(1.08) rotate(3deg);
      }
      
      .arrow-icon {
        transition: transform 0.3s ease;
      }
      
      .service-card:hover .arrow-icon {
        animation: slideRight 1s ease-in-out infinite;
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <section style={{
      padding: '80px 0',
      background: '#0a0a0f',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 20% 30%, rgba(255, 107, 53, 0.08) 0%, transparent 50%)',
        animation: 'float 20s ease-in-out infinite',
      }} />
      
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)',
        animation: 'floatHorizontal 25s ease-in-out infinite',
      }} />
      
      {/* Floating particles */}
      <div style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}>
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i}
            style={{
              position: 'absolute',
              width: i % 3 === 0 ? '3px' : '2px',
              height: i % 3 === 0 ? '3px' : '2px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.2)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1,
              animation: `float ${8 + Math.random() * 12}s ease-in-out ${Math.random() * 5}s infinite`,
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
        {/* Section header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px',
          animation: 'slideInUp 0.8s ease-out',
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
              Our Services
            </span>
          </div>
          
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 700,
            color: 'white',
            marginBottom: '16px',
            fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
            lineHeight: 1.2,
            letterSpacing: '-0.5px',
          }}>
            Comprehensive Digital{' '}
            <span style={{
              background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 33%, #8b5cf6 66%, #0891b2 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer 4s ease-in-out infinite',
            }}>
              Solutions
            </span>
          </h2>
          
          <p style={{
            fontSize: '1.0625rem',
            color: '#d1d5db',
            maxWidth: '640px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            From strategy to execution, we deliver end-to-end digital solutions that transform your business.
          </p>
        </div>
        
        {/* Services grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '24px',
          marginBottom: '60px',
        }}>
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card"
              style={{
                background: hoveredIndex === index 
                  ? `linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, ${service.color}11 100%)`
                  : 'rgba(26, 26, 46, 0.5)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderRadius: '20px',
                padding: '28px',
                border: hoveredIndex === index 
                  ? `1px solid ${service.color}55`
                  : '1px solid rgba(255, 255, 255, 0.05)',
                position: 'relative',
                overflow: 'hidden',
                transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredIndex === index 
                  ? `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px ${service.color}22`
                  : 'none',
                animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Animated background gradient */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '150px',
                height: '150px',
                background: `radial-gradient(circle, ${service.color}22 0%, transparent 70%)`,
                filter: 'blur(40px)',
                opacity: hoveredIndex === index ? 1 : 0.3,
                transition: 'opacity 0.5s ease',
              }} />
              
              {/* Service icon */}
              <div 
                className="service-icon-wrapper"
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: `linear-gradient(135deg, ${service.color}44 0%, ${service.color}22 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  fontSize: '28px',
                  position: 'relative',
                  boxShadow: hoveredIndex === index 
                    ? `0 8px 24px ${service.color}44`
                    : 'none',
                }}
              >
                {service.icon}
                {hoveredIndex === index && (
                  <div style={{
                    position: 'absolute',
                    inset: '-3px',
                    border: `2px solid ${service.color}66`,
                    borderRadius: '18px',
                    animation: 'pulse 1.5s ease-in-out infinite',
                  }} />
                )}
              </div>
              
              {/* Service title */}
              <h3 style={{
                fontSize: '1.375rem',
                fontWeight: 600,
                color: 'white',
                marginBottom: '12px',
                fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                position: 'relative',
              }}>
                {service.title}
              </h3>
              
              {/* Tags */}
              <div style={{
                display: 'flex',
                gap: '6px',
                marginBottom: '14px',
                flexWrap: 'wrap',
              }}>
                {service.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    style={{
                      padding: '4px 10px',
                      background: `${service.color}15`,
                      border: `1px solid ${service.color}33`,
                      borderRadius: '12px',
                      color: '#e5e7eb',
                      fontSize: '11px',
                      fontWeight: 500,
                      transition: 'all 0.3s ease',
                      opacity: hoveredIndex === index ? 1 : 0.7,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Service description */}
              <p style={{
                fontSize: '0.9375rem',
                color: '#d1d5db',
                marginBottom: '20px',
                lineHeight: 1.6,
                position: 'relative',
              }}>
                {service.description}
              </p>
              
              {/* Learn more link */}
              <Link href="/services" style={{
                color: hoveredIndex === index ? service.color : '#9ca3af',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                position: 'relative',
                transition: 'color 0.3s ease',
              }}>
                Learn more
                <svg 
                  className="arrow-icon"
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              
              {/* Bottom accent line */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
                opacity: hoveredIndex === index ? 1 : 0.3,
                transition: 'opacity 0.5s ease',
              }} />
            </div>
          ))}
        </div>
        
        {/* CTA section */}
        <div style={{
          textAlign: 'center',
          padding: '40px 32px',
          background: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden',
          animation: 'slideInUp 0.8s ease-out 0.6s both',
        }}>
          {/* Background gradient */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at center, rgba(255, 107, 53, 0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          
          <h3 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 700,
            color: 'white',
            marginBottom: '12px',
            fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
            position: 'relative',
          }}>
            Ready to Transform Your Business?
          </h3>
          
          <p style={{
            fontSize: '1rem',
            color: '#d1d5db',
            marginBottom: '28px',
            maxWidth: '560px',
            margin: '0 auto 28px',
            position: 'relative',
          }}>
            Let&apos;s discuss how our services can help you achieve your goals
          </p>
          
          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            position: 'relative',
          }}>
            <Link 
              href="/contact" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 50%, #8b5cf6 100%)',
                color: 'white',
                padding: '14px 28px',
                borderRadius: '24px',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
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
              Get Started Today
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            
            <Link 
              href="/services" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'white',
                padding: '14px 28px',
                borderRadius: '24px',
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectServices;
