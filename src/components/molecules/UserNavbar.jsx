import React, { useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import { NavLink } from "react-router-dom";
import { Search, Switches } from "../atoms";

const UserNavbar = () => {
  const [nav, setNav] = React.useState(false);
  const [bgNav, setBgNav] = React.useState(false);

  const navMenu = [
    {
      menuList: "Beranda",
      menuLink: "/",
      menuIcon: <HomeIcon />,
    },
    {
      menuList: "Artikel",
      menuLink: "/artikel",
      menuIcon: <NewspaperIcon />,
    },
    {
      menuList: "Info Obat",
      menuLink: "/info",
      menuIcon: <MedicationLiquidIcon />,
    },
    {
      menuList: "Apotek",
      menuLink: "/cari",
      menuIcon: <TroubleshootIcon />,
    },
  ];

  const navRef = useRef(null);

  const handleNav = (event) => {
    if (navRef.current && navRef.current.contains(event.target)) {
      return;
    }
    setNav(!nav);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      setBgNav(true);
    } else {
      setBgNav(false);
    }
  });

  return (
    <nav className="fixed z-50 w-full text-white">
      {nav ? (
        <div
          className={`flex flex-col items-center justify-center w-full min-h-screen  bg-black/50 lg:hidden`}
          onClick={handleNav}
        >
          <div className="flex flex-col gap-4" ref={navRef}>
            <div className="flex flex-col items-center justify-center w-full max-w-sm gap-4">
              {navMenu.map((item, index) => {
                return (
                  <NavLink
                    onClick={() => {
                      setNav(!nav);
                    }}
                    key={index}
                    className={({ isActive }) =>
                      isActive
                        ? "flex flex-col items-center text-center justify-center w-24 h-24 transition-all duration-300 border rounded-xl hover:bg-primary bg-primary text-white hover:scale-125"
                        : "flex flex-col items-center text-center justify-center w-24 h-24 transition-all duration-300 border rounded-xl hover:bg-primary text-white hover:scale-125"
                    }
                    to={item.menuLink}
                    spy={true}
                    smooth={true}
                  >
                    {item.menuIcon}
                    {item.menuList}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
      {!nav && (
        <div
          className={`flex items-center justify-between w-full max-w-screen-xl px-4 mx-auto h-[92px] lg:hidden transition-all duration-700 `}
          // style={{ backgroundImage: `url('./loginBackground.png')` }}
        >
          <h1 className="text-2xl font-bold">Meddy</h1>
          <MenuIcon
            style={{ fontSize: "50px", cursor: "pointer" }}
            onClick={handleNav}
          />
        </div>
      )}

      <div
        className={`flex `}
        // style={{ backgroundImage: `url('./loginBackground.png')` }}
      >
        <div className="hidden lg:flex items-center justify-between  w-full max-w-screen-xl px-4 mx-auto h-[92px]">
          <img src="./logo.png" alt="logo" className="w-44" />
          <div className="flex gap-8 ">
            <div className="flex items-center gap-8">
              {navMenu.map((item, index) => {
                return (
                  <NavLink
                    key={index}
                    className={({ isActive }) =>
                      isActive
                        ? `text-xl cursor-pointer hover:text-[#D0F9F8] hover:border-b hover:border-black border-b font-bold text-[#8EDBF6]  over:font-bold`
                        : "text-xl cursor-pointer font-extralight hover:text-[#D0F9F8]  hover:border-b hover:border-black"
                    }
                    to={item.menuLink}
                    spy={true}
                    smooth={true}
                  >
                    {item.menuList}
                  </NavLink>
                );
              })}
            </div>
          </div>
          <div className="flex gap-3">
            <Search />
            <Switches />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
