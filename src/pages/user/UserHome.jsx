import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { Button } from "../../components";

const UserHome = () => {
  React.useEffect(() => {
    scroll.scrollToTop({
      duration: 1000, // durasi animasi scroll (ms)
      delay: 0, // jeda sebelum animasi dimulai (ms)
      smooth: "easeInOutQuint", // jenis easing pada animasi scroll
    });
  }, []);
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-primary dark:bg-slate-900">
        <img
          src="./hero.png"
          alt="doctor"
          className="absolute md:bottom-0 w-[1050px] 2xl:w-[1400px]"
        />
        <div className="relative flex flex-col items-center justify-center w-full h-full ">
          <img
            className="md:w-[600px] w-[500px] px-3 md:px-0"
            src="./heroAsset.png"
            alt="hero"
          />
          <h1 className="absolute text-2xl font-extrabold text-center dark:text-white md:text-5xl top-10 md:top-14 ">
            Meddycine <br />
            Teddy
          </h1>
          <p className="absolute max-w-xs text-sm text-center dark:text-white md:max-w-lg md:text-lg">
            Meddy membantu pengguna untuk mencari informasi dengan lebih mudah
            dan efisien serta memantau dan mengelola konsumsi obat dengan baik.
          </p>
          <div className="absolute flex gap-10 bottom-16">
            <Button
              content={"Tentang"}
              style="bg-white px-5 dark:text-black md:px-12 shadow-2xl hover:bg-primary hover:text-white"
            />
            <Button
              content={"Unduh"}
              style="bg-white px-5 dark:text-black md:px-12 shadow-2xl hover:bg-primary hover:text-white"
            />
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-secondary">test</div>
    </>
  );
};

export default UserHome;
