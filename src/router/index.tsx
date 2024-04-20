import React from 'react';
import { RouteObject } from 'react-router-dom';
import Layout from '../components/Layout';
import MusicPlayer from "../pages/musicplayer.page"
import HomePage from "../pages/home.page"

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
      path: 'privacypolicy',
      element: <ExternalRedirect url="https://www.termsfeed.com/live/fd08552c-7fba-4a9f-b3a6-b77ec674039d" />,
    },
    {
      path: "music",
      element: <MusicPlayer />
    },
    // EXTERNAL LINKS
    {
      path: 'external-MerianSchule',
      element: <ExternalRedirect url="https://merian.schule/jo/" />,
    },
    {
      path: '*',
      element: <HomePage />,
    }
  ],
};

const routes: RouteObject[] = [normalRoutes];

export default routes;
