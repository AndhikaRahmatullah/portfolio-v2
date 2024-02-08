import React from 'react';
import './loading-screen.css';

// ----------------------------------------------------------------------

const LoadingScreen: React.FC = () => {
  return (
    <div className="mx-5 flex h-screen w-full items-center justify-center">
      <div className="loader text-center text-4xl md:text-7xl" />
    </div>
  );
};

export default LoadingScreen;
