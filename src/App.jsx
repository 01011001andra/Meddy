import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  UserHome,
  MainLayout,
  UserArtikel,
  UserCariApotek,
  UserObat,
  ApotekerMainLayout,
  Dashboard,
  TambahObat,
  TambahBlog,
} from "./pages";
import Login from "./pages/user/Login";

const App = () => {
  const [apoteker, setApoteker] = React.useState(true);
  const [superAdmin, setSuperAdmin] = React.useState(false);

  if (apoteker) {
    return (
      <div className="relative">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<UserHome />} />
            <Route path="/artikel" element={<UserArtikel />} />
            <Route path="/info" element={<UserObat />} />
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

  if (superAdmin) {
    return (
      <div className="relative">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<UserHome />} />
            <Route path="artikel" element={<UserArtikel />} />
            <Route path="info" element={<UserObat />} />
            <Route path="cari" element={<UserCariApotek />} />
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
          <Route path="artikel" element={<UserArtikel />} />
          <Route path="info" element={<UserObat />} />
          <Route path="cari" element={<UserCariApotek />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
