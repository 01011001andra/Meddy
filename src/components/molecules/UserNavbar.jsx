import React, { useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const UserNavbar = () => {
  const [nav, setNav] = React.useState(false);
  const navMenu = [
    {
      menuList: "Home",
      menuLink: "/",
    },
    {
      menuList: "News",
      menuLink: "/news",
    },
    {
      menuList: "Medichine Info",
      menuLink: "/info",
    },
  ];

  const navRef = useRef(null);

  const handleNav = (event) => {
    if (navRef.current && navRef.current.contains(event.target)) {
      return;
    }
    setNav(!nav);
  };

  return (
    <nav className="fixed w-full">
      {nav ? (
        <div
          className="flex flex-col items-center justify-center w-full min-h-screen bg-black/50 lg:hidden"
          onClick={handleNav}
        >
          <div className="flex flex-col gap-4" ref={navRef}>
            <div className="flex gap-4">
              <span className="flex flex-col items-center justify-center w-24 h-24 transition-all duration-300 border rounded-xl hover:bg-violet-700 hover:text-white hover:scale-125">
                Home
              </span>
              <span className="flex flex-col items-center justify-center w-24 h-24 transition-all duration-300 border rounded-xl hover:bg-violet-700 hover:text-white hover:scale-125">
                News
              </span>
            </div>
            <div className="flex gap-4">
              <span className="flex flex-col items-center justify-center w-24 h-24 text-center transition-all duration-300 border texc rounded-xl hover:bg-violet-700 hover:text-white hover:scale-125">
                Medichine Info
              </span>
              <span className="flex flex-col items-center justify-center w-24 h-24 transition-all duration-300 border rounded-xl hover:bg-violet-700 hover:text-white hover:scale-125">
                Login
              </span>
            </div>
          </div>
        </div>
      ) : null}
      <div className="flex items-center justify-between w-full max-w-6xl px-4 mx-auto h-[92px] lg:hidden">
        <h1 className="text-2xl font-bold">Meddy</h1>
        {!nav && (
          <MenuIcon
            style={{ fontSize: "50px", cursor: "pointer" }}
            onClick={handleNav}
          />
        )}
      </div>
      <div className="flex">
        <div className="hidden lg:flex items-center justify-between w-full max-w-6xl px-4 mx-auto h-[92px]">
          <h1 className="text-2xl font-bold">Meddy Versi Dekstop</h1>
          <div className="flex gap-8">
            <div className="flex gap-8">
              {navMenu.map((item, index) => {
                return (
                  <Link
                    className="text-xl cursor-pointer font-extralight hover:text-blue-600"
                    to={item.menuLink}
                    key={index}
                  >
                    {item.menuList}
                  </Link>
                );
              })}
            </div>
            <Button
              style={{
                borderRadius: 35,
              }}
              to="/login"
              component={Link}
              className="bg-red-700 rounded-full"
              variant="contained"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
