import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { UserFooter, UserNavbar } from "../../components";

const MainLayout = () => {
  // Mendapatkan path saat ini menggunakan useLocation()
  const location = useLocation();
  const currentPath = location.pathname;

  // Membuat fungsi untuk menentukan apakah UserNavbar dan UserFooter ditampilkan atau tidak
  const shouldShowNavbarAndFooter = currentPath === "/login";

  return (
    <>
      {!shouldShowNavbarAndFooter && <UserNavbar />}
      <Outlet />
      {!shouldShowNavbarAndFooter && <UserFooter />}
    </>
  );
};

export default MainLayout;
