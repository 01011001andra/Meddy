import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  UserHome,
  MainLayout,
  UserBerita,
  UserCariApotek,
  UserObat,
  ApotekerMainLayout,
  Dashboard,
  TambahObat,
  TambahBlog,
  UserDetailBerita,
  UserDetailObat,
  SuperMainLayout,
  Kelola,
  SuperDashboard,
  TambahUser,
} from "./pages";
import Swal from "sweetalert2";
import Login from "./pages/user/Login";

const App = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = React.useState([]);

  // // const userData = useSelector((state) => {
  // //   return state?.auth?.user?.name;
  // // });

  // React.useEffect(() => {
  //   if (userData?.name === "apoteker") {
  //     navigate("/apoteker");

  //     Swal.fire({
  //       position: "top-end",
  //       icon: "success",
  //       title: "Login Berhasil",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //     // setApoteker(true);
  //   } else if (userData?.name === "admin") {
  //     navigate("/superAdmin");
  //   }

  //   console.info(userData?.name);
  // }, [userData]);

  React.useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("users"));
    const user = localData?.users?.name;
    setUserData(user);
  }, []);

  // React.useEffect(() => {
  //   if (userData === "apoteker") {
  //     navigate("/apoteker");
  //     Swal.fire({
  //       position: "top-end",
  //       icon: "success",
  //       title: "Login Berhasil",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //   } else if (userData === "admin") {
  //     navigate("/superadmin");
  //   }
  // }, [userData, navigate]);

  if (userData === "apoteker") {
    return (
      <div className="relative">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<UserHome />} />
            <Route path="/berita" element={<UserBerita />} />
            <Route path="berita/:id" element={<UserDetailBerita />} />
            <Route path="/info" element={<UserObat />} />
            <Route path="info/:id" element={<UserDetailObat />} />
            <Route path="/cari" element={<UserCariApotek />} />
          </Route>
          <Route path="/apoteker" element={<ApotekerMainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="tambahObat" element={<TambahObat />} />
            <Route path="tambahBlog" element={<TambahBlog />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    );
  }

  if (userData === "admin") {
    return (
      <div className="relative">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<UserHome />} />
            <Route path="berita" element={<UserBerita />} />
            <Route path="berita/:id" element={<UserDetailBerita />} />
            <Route path="info" element={<UserObat />} />
            <Route path="info/:id" element={<UserDetailObat />} />
            <Route path="cari" element={<UserCariApotek />} />
          </Route>
          <Route path="/superadmin" element={<SuperMainLayout />}>
            <Route index element={<SuperDashboard />} />
            <Route path="tambahObat" element={<TambahObat />} />
            <Route path="tambahBlog" element={<TambahBlog />} />
            <Route path="kelola" element={<Kelola />} />
            <Route path="tambahuser" element={<TambahUser />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    );
  }

  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<UserHome />} />
          <Route path="berita" element={<UserBerita />} />
          <Route path="berita/:id" element={<UserDetailBerita />} />
          <Route path="info" element={<UserObat />} />
          <Route path="info/:id" element={<UserDetailObat />} />
          <Route path="cari" element={<UserCariApotek />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
