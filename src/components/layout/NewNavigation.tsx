'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NewNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
      backgroundColor: 'rgba(0,0,0,0.8)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80px'
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 50%, #8b5cf6 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.25rem' }}>NTR</span>
          </div>
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.25rem' }}>Nine Tales Media</span>
        </Link>

        {/* Desktop Navigation */}
        <div style={{ display: 'flex', gap: '1.5rem' }}>
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
                  background: active ? 'rgba(255,255,255,0.1)' : 'transparent'
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
              boxShadow: '0 4px 6px rgba(255, 107, 53, 0.25)'
            }}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: isOpen ? 'block' : 'none',
            background: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.95)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          zIndex: 99
        }}>
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link 
                key={item.name} 
                href={item.href}
                style={{
                  color: active ? '#ff6b35' : 'white',
                  fontSize: '1.5rem',
                  fontWeight: '500',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.375rem',
                  background: active ? 'rgba(255,255,255,0.1)' : 'transparent',
                  width: '80%',
                  textAlign: 'center'
                }}
                onClick={() => setIsOpen(false)}
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
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              fontWeight: '600',
              marginTop: '1rem',
              width: '80%',
              textAlign: 'center'
            }}
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NewNavigation;
