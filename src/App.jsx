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
} from "./pages";
import Swal from "sweetalert2";
import Login from "./pages/user/Login";

const App = () => {
  const [apoteker, setApoteker] = React.useState(null);
  const [superAdmin, setSuperAdmin] = React.useState(null);
  const navigate = useNavigate();

  const userData = useSelector((state) => {
    return state?.auth?.user?.role;
  });


  React.useEffect(() => {
    if (userData === "apoteker") {
      navigate("/apoteker");
      setApoteker(true);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Berhasil",
        showConfirmButton: false,
        timer: 1500,
      });
      // setApoteker(true);
    } else if (userData === "admin") {
      navigate("/superAdmin");
      // setSuperAdmin(true);
    }
    setSuperAdmin(true);

    console.info(userData);
  }, [userData]);

  if (apoteker) {
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
          <Route path="/login" element={<h1>Not Found</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    );
  }

  if (superAdmin) {
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
            <Route index element={<Dashboard />} />
            <Route path="tambahObat" element={<TambahObat />} />
            <Route path="tambahBlog" element={<TambahBlog />} />
            <Route path="kelola" element={<Kelola />} />
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
