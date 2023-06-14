import React from "react";
import { styles } from "../../utils/mainStyle";
import AOS from "aos";
import "aos/dist/aos.css";
import { useScrollToTop } from "../../hooks";

const UserCariApotek = () => {
  useScrollToTop();
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="min-h-screen pt-24 dark:bg-slate-900 bg-primary">
      <div
        className="relative flex flex-col items-center justify-center min-h-screen bg-primary dark:bg-slate-900"
        style={{ backgroundImage: "url('../loginPattern.png')" }}
      >
        <div className="flex flex-col-reverse items-center justify-center gap-8 pb-10 mx-16 md:flex-row">
          <div className={`${styles.sectionSubText} tracking-wider`}>
            <h1 className="text-5xl font-bold text-white">HI !</h1>
            <p className="py-5 text-xl text-white">
              Temukan Apotik yang kamu tuju di aplikasi meddy. Silahkan download
              sekarang !
            </p>
            <img
              src="./playstore.png"
              alt="download"
              className="cursor-pointer w-36 md:w-48"
            />
          </div>
          <div
            data-aos="fade-up"
            className="relative flex items-center justify-center w-2/3 h-full px-4 mx-auto md:w-1/2 md:px-0"
          >
            <img src="./Group52.png" alt="hp1" className="w-96 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCariApotek;
