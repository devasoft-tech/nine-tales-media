'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const NewNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  // Handle responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
      
      // Set CSS custom property for navbar height
      const navbarHeight = mobile ? '70px' : '80px';
      document.documentElement.style.setProperty('--navbar-height', navbarHeight);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname !== '/') return false;
    return pathname?.startsWith(path);
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: 'rgba(0,0,0,0.9)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '0 1rem' : '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: isMobile ? '70px' : '80px'
      }}>
        {/* Logo */}
        <Link href="/" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: isMobile ? '0.25rem' : '0.5rem',
          flexShrink: 0
        }}>
          <img
            src="/logo_white.png"
            alt="Nine Tales Media"
            style={{
              height: isMobile ? '70px' : '80px',
              width: 'auto'
            }}
          />
          {!isMobile && (
            <span style={{ 
              color: 'white', 
              fontWeight: 'bold', 
              fontSize: '1.25rem',
              whiteSpace: 'nowrap'
            }}>
              Nine Tales Media
            </span>
          )}
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div style={{ 
            display: 'flex', 
            gap: '1.5rem',
            alignItems: 'center'
          }}>
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link 
                  key={item.name} 
                  href={item.href}
                  style={{
                    color: active ? '#ff6b35' : 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.375rem',
                    fontWeight: '500',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    background: active ? 'rgba(255,255,255,0.1)' : 'transparent',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      const target = e.target as HTMLElement;
                      target.style.color = '#ff6b35';
                      target.style.background = 'rgba(255,255,255,0.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      const target = e.target as HTMLElement;
                      target.style.color = 'white';
                      target.style.background = 'transparent';
                    }
                  }}
                >
                  {item.name}
                  {active && (
                    <div style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '0',
                      width: '100%',
                      height: '2px',
                      background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 50%, #8b5cf6 100%)',
                      borderRadius: '9999px'
                    }} />
                  )}
                </Link>
              );
            })}
            
            <Link 
              href="/contact"
              style={{
                background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 50%, #8b5cf6 100%)',
                color: 'white',
                padding: '0.5rem 1.5rem',
                borderRadius: '9999px',
                fontWeight: '600',
                marginLeft: '1rem',
                boxShadow: '0 4px 6px rgba(255, 107, 53, 0.25)',
                textDecoration: 'none',
                transition: 'transform 0.2s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.transform = 'scale(1)';
              }}
            >
              Get Started
            </Link>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button 
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '0.375rem',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = 'rgba(255,255,255,0.1)';
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = 'transparent';
            }}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isOpen && (
        <div style={{
          backgroundColor: 'rgba(0,0,0,0.95)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '1.5rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}>
          {navItems.map((item, index) => {
            const active = isActive(item.href);
            return (
              <Link 
                key={item.name} 
                href={item.href}
                style={{
                  color: active ? '#ff6b35' : 'white',
                  fontSize: '1.1rem',
                  fontWeight: '500',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  background: active ? 'rgba(255,255,255,0.1)' : 'transparent',
                  textAlign: 'center',
                  textDecoration: 'none',
                  border: active ? '1px solid rgba(255,107,53,0.3)' : '1px solid transparent',
                  transition: 'all 0.3s ease',
                  display: 'block'
                }}
                onClick={() => setIsOpen(false)}
                onTouchStart={(e) => {
                  if (!active) {
                    const target = e.target as HTMLElement;
                    target.style.background = 'rgba(255,255,255,0.05)';
                  }
                }}
                onTouchEnd={(e) => {
                  if (!active) {
                    const target = e.target as HTMLElement;
                    target.style.background = 'transparent';
                  }
                }}
              >
                {item.name}
              </Link>
            );
          })}
          
          <Link 
            href="/contact"
            style={{
              background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 50%, #8b5cf6 100%)',
              color: 'white',
              padding: '0.75rem 1rem',
              borderRadius: '9999px',
              fontWeight: '600',
              marginTop: '0.5rem',
              textAlign: 'center',
              textDecoration: 'none',
              boxShadow: '0 4px 6px rgba(255, 107, 53, 0.25)',
              transition: 'all 0.3s ease',
              display: 'block'
            }}
            onClick={() => setIsOpen(false)}
            onTouchStart={(e) => {
              const target = e.target as HTMLElement;
              target.style.transform = 'scale(0.95)';
            }}
            onTouchEnd={(e) => {
              const target = e.target as HTMLElement;
              target.style.transform = 'scale(1)';
            }}
          >
            Get Started
          </Link>
        </div>
      )}
      
      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default NewNavigation;
