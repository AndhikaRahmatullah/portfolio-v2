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
        <title>Andhika Rahmatullah</title>
        <link rel="canonical" href="/" />
        <meta
          name="description"
          content="I am an experienced frontend programmer with extensive skills in developing various types of projects. Over the years, I have been involved in numerous freelance projects including the
    creation of backoffice systems, e-commerce platforms, and company profile websites."
        />
      </Helmet>

      <MainLayout>
        <HomeView />
      </MainLayout>
    </>
  );
};

export default HomePage;
