'use client';

import Link from 'next/link';
import { useEffect } from 'react';

const DirectFooter = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Content Creation',
    'Meta Ads',
    'Google Ads',
    'TVC Production',
    'E-commerce Marketing',
    'Web Development',
    'AI Chatbot Integration',
    'Custom Software Development',
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: 'L' },
    { name: 'Twitter', href: '#', icon: 'T' },
    { name: 'Instagram', href: '#', icon: 'I' },
    { name: 'Facebook', href: '#', icon: 'F' },
  ];

  useEffect(() => {
    // Add keyframes animation for the footer elements
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      @keyframes footerWave {
        0%, 100% { d: path('M0,0 L1200,0 L1200,20 C1050,60 850,0 600,40 C350,80 150,20 0,40 L0,0 Z'); }
        50% { d: path('M0,0 L1200,0 L1200,40 C1050,20 850,60 600,20 C350,40 150,60 0,20 L0,0 Z'); }
      }
      
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      @keyframes pulse {
        0%, 100% { transform: scale(1); opacity: 0.2; }
        50% { transform: scale(1.2); opacity: 0.3; }
      }
      
      @keyframes beat {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
      }
      
      @keyframes slideIn {
        from { transform: translateX(-20px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      
      .footer-underline {
        position: relative;
      }
      
      .footer-underline::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -4px;
        width: 0;
        height: 2px;
        background: linear-gradient(135deg, #ff6b35 0%, #ff3366 50%, #8b5cf6 100%);
        transition: width 0.3s ease;
      }
      
      .footer-underline:hover::after {
        width: 100%;
      }
      
      .footer-link {
        transition: transform 0.2s ease;
      }
      
      .footer-link:hover {
        transform: translateX(5px);
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <footer style={{
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#0a0a0f',
      paddingTop: '120px',
      paddingBottom: '40px',
    }}>
      {/* Background gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, #0a0a0f, #16213e, #0a0a0f)',
        opacity: 0.9,
        zIndex: -10,
      }} />
      
      {/* Animated wave divider */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '80px',
        overflow: 'hidden',
      }}>
        <svg
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '100%',
          }}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1200,0 L1200,20 C1050,60 850,0 600,40 C350,80 150,20 0,40 L0,0 Z"
            fill="#0a0a0f"
            style={{
              animation: 'footerWave 10s infinite ease-in-out',
            }}
          />
        </svg>
      </div>
      
      {/* Main content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        position: 'relative',
        zIndex: 10,
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
          gap: '32px',
        }}>
          {/* Company Info */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px',
            }}>
              <div style={{
                position: 'relative',
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 50%, #8b5cf6 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 50%, #8b5cf6 100%)',
                    animation: 'spin 8s linear infinite',
                  }} />
                  <span style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '24px',
                    position: 'relative',
                    zIndex: 10,
                  }}>9T</span>
                </div>
                <div style={{
                  position: 'absolute',
                  inset: '-4px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 50%, #8b5cf6 100%)',
                  opacity: 0.3,
                  filter: 'blur(8px)',
                  zIndex: -1,
                  animation: 'pulse 3s infinite',
                }} />
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                <span style={{
                  color: 'white',
                  fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                  fontWeight: 'bold',
                  fontSize: '24px',
                }}>
                  Nine Tales Media
                </span>
                <span style={{
                  fontSize: '14px',
                  color: '#9ca3af',
                }}>Digital Narratives</span>
              </div>
            </div>
            
            <p style={{
              color: '#d1d5db',
              marginBottom: '32px',
              maxWidth: '400px',
              lineHeight: 1.6,
            }}>
              Crafting digital narratives that captivate, engage, and convert. We blend creativity with cutting-edge technology to bring your brand&apos;s story to life in the digital landscape.
            </p>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
              <div className="footer-link" style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
              }}>
                <div style={{
                  marginTop: '4px',
                  color: '#ff6b35',
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p style={{ color: '#9ca3af', fontSize: '14px' }}>Email us at</p>
                  <a href="mailto:info@ninetalesmedia.co.in" className="footer-underline" style={{
                    color: 'white',
                    textDecoration: 'none',
                  }}>
                    info@ninetalesmedia.co.in
                  </a>
                </div>
              </div>
              
              <div className="footer-link" style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
              }}>
                <div style={{
                  marginTop: '4px',
                  color: '#ff6b35',
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p style={{ color: '#9ca3af', fontSize: '14px' }}>Call us at</p>
                  <a href="tel:+15551234567" className="footer-underline" style={{
                    color: 'white',
                    textDecoration: 'none',
                  }}>
                    +918743077753
                  </a>
                </div>
              </div>
              
              <div className="footer-link" style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
              }}>
                <div style={{
                  marginTop: '4px',
                  color: '#ff6b35',
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p style={{ color: '#9ca3af', fontSize: '14px' }}>Visit us at</p>
                  <address style={{
                    color: 'white',
                    fontStyle: 'normal',
                  }}>
                    Delhi, IN
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer-underline" style={{
              color: 'white',
              fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
              fontWeight: 600,
              fontSize: '20px',
              marginBottom: '24px',
              display: 'inline-block',
            }}>
              Services
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '12px 16px',
            }}>
              {services.map((service) => (
                <div key={service} style={{
                  marginBottom: '0',
                }}>
                  <Link href="/services" className="footer-link" style={{
                    color: '#9ca3af',
                    textDecoration: 'none',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}>
                    <span style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: '#ff6b35',
                      borderRadius: '50%',
                      opacity: 0.7,
                    }}></span>
                    {service}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-underline" style={{
              color: 'white',
              fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
              fontWeight: 600,
              fontSize: '20px',
              marginBottom: '24px',
              display: 'inline-block',
            }}>
              Quick Links
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}>
              {quickLinks.map((link) => (
                <Link key={link.name} href={link.href} className="footer-link" style={{
                  color: '#9ca3af',
                  textDecoration: 'none',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <span style={{
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#ff6b35',
                    borderRadius: '50%',
                    opacity: 0.7,
                  }}></span>
                  {link.name}
                </Link>
              ))}
            </div>
            
            <h3 className="footer-underline" style={{
              color: 'white',
              fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
              fontWeight: 600,
              fontSize: '20px',
              marginTop: '32px',
              marginBottom: '16px',
              display: 'inline-block',
            }}>
              Legal
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}>
              <Link href="/privacy" className="footer-link" style={{
                color: '#9ca3af',
                textDecoration: 'none',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#ff6b35',
                  borderRadius: '50%',
                  opacity: 0.7,
                }}></span>
                Privacy Policy
              </Link>
              
              <Link href="/terms" className="footer-link" style={{
                color: '#9ca3af',
                textDecoration: 'none',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#ff6b35',
                  borderRadius: '50%',
                  opacity: 0.7,
                }}></span>
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="footer-underline" style={{
              color: 'white',
              fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
              fontWeight: 600,
              fontSize: '20px',
              marginBottom: '24px',
              display: 'inline-block',
            }}>
              Stay Connected
            </h3>
            
            <p style={{
              color: '#9ca3af',
              fontSize: '14px',
              marginBottom: '16px',
            }}>
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            
            <form style={{
              marginBottom: '24px',
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  style={{
                    backgroundColor: 'rgba(31, 41, 55, 0.5)',
                    border: '1px solid rgba(75, 85, 99, 0.5)',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    color: 'white',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                  required
                />
                <button 
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 50%, #8b5cf6 100%)',
                    color: 'white',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    fontSize: '14px',
                    fontWeight: 500,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(255, 107, 53, 0.2)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Subscribe
                </button>
              </div>
            </form>
            
            {/* Social Links */}
            <div>
              <h4 style={{
                color: 'white',
                fontSize: '14px',
                fontWeight: 500,
                marginBottom: '12px',
              }}>Follow Us</h4>
              <div style={{
                display: 'flex',
                gap: '12px',
              }}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: 'rgba(31, 41, 55, 0.8)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#9ca3af',
                      border: '1px solid rgba(75, 85, 99, 0.5)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1) rotate(360deg)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, #ff6b35 0%, #ff3366 50%, #8b5cf6 100%)';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1) rotate(0)';
                      e.currentTarget.style.background = 'rgba(31, 41, 55, 0.8)';
                      e.currentTarget.style.color = '#9ca3af';
                    }}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <span style={{
                      fontSize: '14px',
                      fontWeight: 600,
                    }}>
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border with enhanced design */}
        <div style={{
          marginTop: '64px',
          paddingTop: '32px',
          borderTop: '1px solid rgba(75, 85, 99, 0.3)',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}>
            <p style={{
              color: '#9ca3af',
              fontSize: '14px',
              animation: 'slideIn 0.6s ease',
            }}>
              © {currentYear} Nine Tales Media. All rights reserved.
            </p>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              animation: 'slideIn 0.6s ease 0.1s both',
            }}>
              <span style={{ color: '#6b7280', fontSize: '12px' }}>Made with</span>
              <span style={{
                color: '#ff3366',
                animation: 'beat 1.5s infinite',
              }}>
                ❤️
              </span>
              <span style={{ color: '#6b7280', fontSize: '12px' }}>in San Francisco</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to top button */}
      <a
        href="#top"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '40px',
          height: '40px',
          background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 50%, #8b5cf6 100%)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          zIndex: 30,
          transition: 'all 0.3s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </a>
    </footer>
  );
};

export default DirectFooter;
