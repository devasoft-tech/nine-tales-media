'use client';

import { useState } from 'react';

export default function TestPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary-orange to-primary-purple">
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold mb-4 text-black">Test Page</h1>
        <p className="text-gray-700 mb-4">This is a test page to verify that components are being updated correctly.</p>
        
        <div className="flex items-center justify-center space-x-4">
          <button 
            onClick={() => setCount(count - 1)}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Decrease
          </button>
          
          <span className="text-2xl font-bold text-black">{count}</span>
          
          <button 
            onClick={() => setCount(count + 1)}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
}
