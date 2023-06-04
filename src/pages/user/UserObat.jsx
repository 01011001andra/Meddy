import React from "react";
import { animateScroll as scroll } from "react-scroll";

const UserObat = () => {
  React.useEffect(() => {
    scroll.scrollToTop({
      duration: 1000, // durasi animasi scroll (ms)
      delay: 0, // jeda sebelum animasi dimulai (ms)
      smooth: "easeInOutQuint", // jenis easing pada animasi scroll
    });
  }, []);
  return (
    <div className="min-h-screen pt-24 dark:bg-slate-900">
      <h1>Informasi Obat</h1>
    </div>
  );
};

export default UserObat;
