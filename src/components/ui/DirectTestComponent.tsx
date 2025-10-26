'use client';

import { useState, useEffect } from 'react';

const DirectTestComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Load the CSS file directly if not already loaded
    if (!document.querySelector('link[href="/direct-styles.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/direct-styles.css';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="direct-test-component">
      <p>Direct Test Component</p>
      <p>Count: {count}</p>
      <button 
        className="direct-test-button"
        onClick={() => setCount(count + 1)}
      >
        Click Me
      </button>
    </div>
  );
};

export default DirectTestComponent;
