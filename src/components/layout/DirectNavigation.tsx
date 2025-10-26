'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const DirectNavigation = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Load the CSS file directly
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/direct-styles.css';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

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
    <nav className="direct-nav">
      <div className="direct-container">
        <a href="/" className="direct-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <img
            src="/logo_white.png"
            alt="Nine Tales Media Logo"
            style={{ height: '100px', width: 'auto' }}
          />
          <span className="direct-logo-text" style={{ display: 'none' }}>Nine Tales Media</span>
        </a>
        
        <div className="direct-nav-links">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className={`direct-nav-link ${isActive(item.href) ? 'active' : ''}`}
            >
              {item.name}
            </a>
          ))}
          
          <a href="/contact" className="direct-cta-button">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default DirectNavigation;
