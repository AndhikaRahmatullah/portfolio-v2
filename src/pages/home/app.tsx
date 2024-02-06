import React from 'react';
import { Helmet } from 'react-helmet-async';
// layout
import MainLayout from '/src/layouts/main/layout';
// sections
import { HomeView } from '/src/sections/home/view';

// ----------------------------------------------------------------------

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title> Vite TypeScript</title>
      </Helmet>

      <MainLayout>
        <HomeView />
      </MainLayout>
    </>
  );
};

export default HomePage;
