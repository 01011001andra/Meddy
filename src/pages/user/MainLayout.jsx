import React from "react";
import { Outlet } from "react-router-dom";
import { UserFooter, UserNavbar } from "../../components";

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
