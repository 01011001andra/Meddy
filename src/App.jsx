import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, MainLayout } from "./pages";
import Login from "./pages/user/Login";

const App = () => {
  const [apoteker, setApoteker] = React.useState(false);
  const [superAdmin, setSuperAdmin] = React.useState(false);

  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/news" element={<h1>News</h1>} />
          <Route path="/info" element={<h1>Medichine Info</h1>} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
