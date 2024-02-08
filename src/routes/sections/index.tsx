import React, { lazy, Suspense } from 'react';
import { Navigate, useRoutes, Outlet } from 'react-router-dom';
// components
import { LoadingScreen } from '/src/components/loading';
// pages
const HomePage = lazy(() => import('/src/pages/home/app'));

// ----------------------------------------------------------------------

const Router: React.FC = () => {
  return useRoutes([
    {
      path: '/',
      element: (
        <Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </Suspense>
      ),
      children: [{ path: '', element: <HomePage /> }],
    },

    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
};

export default Router;
