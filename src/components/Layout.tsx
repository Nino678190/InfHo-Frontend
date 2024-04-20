import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Scrollbar } from 'smooth-scrollbar-react';

const Layout = () => {
  return (
    <>
      <Header />

        <Outlet />


    </>
  );
};

export default Layout;
