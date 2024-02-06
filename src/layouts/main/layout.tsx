import React, { ReactNode } from 'react';
//
import Header from './header';

// ----------------------------------------------------------------------

interface MainLayoutProps {
  children: ReactNode;
}

// ----------------------------------------------------------------------

const MainLayout: React.FC<MainLayoutProps> = ({ children }: MainLayoutProps) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default MainLayout;
