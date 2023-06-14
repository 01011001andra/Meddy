import React from "react";
import { Outlet } from "react-router-dom";
import { UserFooter, UserNavbar } from "../../components/molecules";

const MainLayout = () => {
  return (
    <>
      <UserNavbar />
      <Outlet />
      <UserFooter />
    </>
  );
};

export default MainLayout;
