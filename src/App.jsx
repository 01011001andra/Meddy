import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  UserHome,
  MainLayout,
  UserArtikel,
  UserCariApotek,
  UserObat,
} from "./pages";
import Login from "./pages/user/Login";

const App = () => {
  const [apoteker, setApoteker] = React.useState(false);
  const [superAdmin, setSuperAdmin] = React.useState(false);

  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<UserHome />} />
          <Route path="/artikel" element={<UserArtikel />} />
          <Route path="/info" element={<UserObat />} />
          <Route path="/cari" element={<UserCariApotek />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
