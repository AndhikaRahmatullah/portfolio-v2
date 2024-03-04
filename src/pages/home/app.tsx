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
        <meta charSet="utf-8" />
        <title>Andhika Rahmatullah</title>
        <link rel="canonical" href="https://andhikar-portfolio-v2.vercel.app" />
        <meta name="keywords" content="andhika,portfolio,andhika rahmatullah,frontend" />
      </Helmet>

      <MainLayout>
        <HomeView />
      </MainLayout>
    </>
  );
};

export default HomePage;
