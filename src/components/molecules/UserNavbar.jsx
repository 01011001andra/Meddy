import React, { useRef, useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import { Link, NavLink } from "react-router-dom";
import { Switches } from "../atoms";

const UserNavbar = () => {
  const [nav, setNav] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [bgNav, setBgNav] = React.useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const navMenu = [
    {
      menuList: "Beranda",
      menuLink: "/",
      menuIcon: <HomeIcon />,
    },
    {
      menuList: "Berita",
      menuLink: "/berita",
      menuIcon: <NewspaperIcon />,
    },
    {
      menuList: "Informasi Obat",
      menuLink: "/info",
      menuIcon: <MedicationLiquidIcon />,
    },
    {
      menuList: "Temukan Apotek",
      menuLink: "/cari",
      menuIcon: <TroubleshootIcon />,
    },
  ];

  const navRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      setBgNav(true);
    } else {
      setBgNav(false);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      id="nav-scroll"
      className={`fixed z-50 w-full transition-all duration-700 text-white ${
        showNavbar ? "" : "-translate-y-56"
      } ${!bgNav ? "" : "bg-primary/60 dark:bg-black/60"} `}
    >
      {nav && (
        <div
          className="flex flex-col items-center justify-center w-full min-h-screen bg-black/50 lg:hidden"
          onClick={handleNav}
        >
          <div className="flex flex-col gap-4" ref={navRef}>
            <div className="flex flex-col items-center justify-center w-full max-w-sm gap-4">
              {navMenu.map((item, index) => (
                <NavLink
                  key={index}
                  onClick={() => {
                    setNav(!nav);
                  }}
                  className={`
                    flex flex-col items-center text-center  justify-center w-24 h-24 transition-all duration-300 border rounded-xl hover:bg-primary text-white hover:scale-125
                    ${item.menuLink === "/" ? "border-b-4 border-primary" : ""}
                  `}
                  to={item.menuLink}
                  spy={true}
                  smooth={true}
                >
                  {item.menuIcon}
                  {item.menuList}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}

      {!nav && (
        <div className="flex items-center justify-between w-full max-w-screen-xl px-4 mx-auto h-[92px] lg:hidden transition-all duration-700 ">
          <h1 className="text-2xl font-bold">Meddy</h1>
          <MenuIcon
            style={{ fontSize: "50px", cursor: "pointer" }}
            onClick={handleNav}
          />
        </div>
      )}

      <div className="hidden lg:flex items-center justify-between w-full max-w-screen-xl px-4 mx-auto h-[92px]">
        <img src="./logo.png" alt="logo" className="w-44" />
        <div className="flex gap-8">
          <div className="flex items-center gap-8">
            {navMenu.map((item, index) => (
              <NavLink
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? `text-xl cursor-pointer hover:text-[#D0F9F8] hover:border-b hover:border-black border-b font-bold text-[#8EDBF6] dark:text-[#8EDBF6] over:font-bold`
                    : "text-xl cursor-pointer text-white font-extralight hover:text-[#D0F9F8]  hover:border-b hover:border-black"
                }
                to={item.menuLink}
                spy={true}
                smooth={true}
              >
                {item.menuList}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Switches />
          <Link
            to="/login"
            className="px-10 py-4 font-bold rounded-full text-primary dark:text-black bg-secondary hover:bg-secondary/60"
          >
            LOGIN
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
