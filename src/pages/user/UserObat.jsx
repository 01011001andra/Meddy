import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { styles } from "../../utils/mainStyle";

const UserObat = () => {
  React.useEffect(() => {
    scroll.scrollToTop({
      duration: 1000, // durasi animasi scroll (ms)
      delay: 0, // jeda sebelum animasi dimulai (ms)
      smooth: "easeInOutQuint", // jenis easing pada animasi scroll
    });
  }, []);
  return (
    <div className="min-h-screen pt-24 dark:bg-slate-900 bg-primary">
       <div
        className="h-[20vh] flex items-center justify-center bg-primary dark:bg-slate-900"
        style={{ backgroundImage: "url('../loginPattern.png')" }}
      >
        <h1 className={`${styles.sectionHeadText} text-white`}>Informasi Obat</h1>
      </div>
      <div className="w-full min-h-screen bg-secondary dark:bg-slate-800">
      </div>
    </div>
  );
};

export default UserObat;
