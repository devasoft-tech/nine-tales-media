'use client';

import { useState } from 'react';

const TestComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="fixed bottom-24 right-24 z-[1000] bg-red-500 text-white p-4 rounded-lg shadow-lg">
      <p>Test Component Working!</p>
      <p>Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        className="mt-2 bg-white text-red-500 px-4 py-2 rounded-md font-bold"
      >
        Click Me
      </button>
    </div>
  );
};

export default TestComponent;
