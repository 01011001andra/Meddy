import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { styles } from "../../utils/mainStyle";
import AOS from "aos";
import "aos/dist/aos.css";

const UserCariApotek = () => {
  React.useEffect(() => {
    scroll.scrollToTop({
      duration: 1000, // durasi animasi scroll (ms)
      delay: 0, // jeda sebelum animasi dimulai (ms)
      smooth: "easeInOutQuint", // jenis easing pada animasi scroll
    });
  }, []);
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="min-h-screen pt-24 dark:bg-slate-900 bg-primary">
       <div
        className="relative flex flex-col items-center justify-center min-h-screen bg-primary dark:bg-slate-900"
        style={{ backgroundImage: "url('../loginPattern.png')" }}
      >
      <div className="flex md:flex-row flex-col gap-8 justify-center mx-16 pb-10 px-12">
        <div className={`${styles.sectionSubText} py-48 tracking-wider`}>
            <h1 className="font-bold text-white text-5xl">HI !</h1>
            <p className="text-white text-xl py-5">Temukan Apotik yang kamu tuju di aplikasi meddy. Silahkan download sekarang !</p>
            <img
                  src="./playstore.png"
                  alt="download"
                  className="cursor-pointer w-36 md:w-48"
            /> 
        </div>
        <div
            data-aos="fade-up"
            className="relative flex items-center justify-center w-2/3 h-full px-4 md:w-1/2 md:px-0"
          >
            <img src="./Group52.png" alt="hp1" />
          </div>
      </div>
      </div>
    </div>
  );
};

export default UserCariApotek;
