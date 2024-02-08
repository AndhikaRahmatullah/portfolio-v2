import React from 'react';
import './loading-screen.css';

// ----------------------------------------------------------------------

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="loader" />
    </div>
  );
};

export default LoadingScreen;
