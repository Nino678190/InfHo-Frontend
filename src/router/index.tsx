import React from 'react';
import { RouteObject } from 'react-router-dom';
import Layout from '../components/Layout';
import HomePage from '../pages/home.page'


const ExternalRedirect: React.FC<{ url: string }> = ({ url }) => {

  const handleClick = () => {
    window.location.href = url; // Replace with your external link
  };

  React.useEffect(() => {
    handleClick();
  }, []); // Automatically redirect on component mount

  return null; // This component doesn't render anything
};

const normalRoutes: RouteObject = {
  path: '*',
  element: <Layout />,
  children: [
    {
      path: '*',
      element: <HomePage />,
    }
  ],
};

const routes: RouteObject[] = [normalRoutes];

export default routes;
