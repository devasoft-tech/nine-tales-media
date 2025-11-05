'use client';

import Link from 'next/link';

const DirectCTA = () => {
  return (
    <section style={{
      padding: '80px 0',
      background: '#0a0a0f',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 51, 102, 0.1) 50%, rgba(139, 92, 246, 0.1) 100%)',
      }} />
      
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
      }} />
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(22, 33, 62, 0.8) 100%)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '24px',
          padding: 'clamp(32px, 8vw, 64px)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative circles */}
          <div style={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 107, 53, 0.2) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }} />
          
          <div style={{
            position: 'absolute',
            bottom: '-100px',
            right: '-100px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }} />
          
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: 'white',
            marginBottom: '24px',
            fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
            lineHeight: 1.2,
          }}>
            Ready to Start Your <span style={{
              background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 50%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Digital Journey</span>?
          </h2>
          
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: '#d1d5db',
            maxWidth: '700px',
            margin: '0 auto 40px',
            lineHeight: 1.6,
          }}>
            Let&apos;s work together to create a compelling digital narrative for your brand. Contact us today for a free consultation.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
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
            }}>
              Contact Us
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
              border: '2px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease',
            }}>
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectCTA;
