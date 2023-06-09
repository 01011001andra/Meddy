import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button, Carousel, CarouselBerita } from "../../components";
import { styles } from "../../utils/mainStyle";
import { Link } from "react-router-dom";
import { Link as Scrolls } from "react-scroll";
import { useScrollToTop } from "../../hooks";
import AOS from "aos";

const UserHome = () => {
  useScrollToTop();
  console.log(import.meta.env.VITE_SOME_KEY);
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* Section 1 */}
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-primary dark:bg-slate-900">
        <div className="flex flex-col gap-3 md:hidden">
          <h1 className="text-4xl font-bold text-center text-white">Meddy</h1>
          <p className="flex w-full px-4 text-xl text-center text-white">
            Meddy membantu pengguna untuk mencari informasi dengan lebih mudah
            dan efisien serta memantau dan mengelola konsumsi obat dengan baik.
          </p>
        </div>
        <img
          src="./hero.png"
          alt="doctor"
          className="absolute bottom-0 w-[1050px] 2xl:w-[1400px]"
        />
        <div
          className="relative flex-col items-center justify-center hidden w-full h-full md:flex "
          data-aos="fade-up"
        >
          <img
            className="md:w-[600px] w-[500px] px-3 md:px-0"
            src="./heroAsset.png"
            alt="hero"
          />
          <h1 className="absolute text-2xl font-extrabold text-center text-white md:text-5xl top-10 md:top-14 ">
            Medicine <br />
            Teddy
          </h1>
          <p className="absolute max-w-xs text-sm text-center text-white md:max-w-lg md:text-lg">
            Meddy membantu pengguna untuk mencari informasi dengan lebih mudah
            dan efisien serta memantau dan mengelola konsumsi obat dengan baik.
          </p>
          <div className="absolute flex gap-10 bottom-16">
            <Scrolls
              to="test1"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="px-5 py-2 text-lg transition-all duration-300 bg-white rounded-full shadow-2xl cursor-pointer text-primary dark:text-primary dark:hover:text-white md:px-12 hover:bg-primary hover:text-white md:py-3"
            >
              Mulai
            </Scrolls>
            <Link
              target="_blank"
              to="https://play.google.com/store/apps/details?id=com.dts.freefireth&hl=en-ID"
              className="px-5 py-2 text-lg transition-all duration-300 bg-white rounded-full shadow-2xl cursor-pointer text-primary dark:text-primary dark:hover:text-white md:px-12 hover:bg-primary hover:text-white md:py-3"
            >
              Unduh
            </Link>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="w-full h-full bg-secondary dark:bg-slate-900" id="test1">
        <div className="flex flex-col-reverse items-center justify-center w-full h-full min-h-screen gap-12 mx-auto max-w-7xl md:flex-row py-7">
          <div
            data-aos="fade-right"
            className="flex flex-col items-center justify-center w-full h-full gap-4 px-4 md:w-1/2 xl:px-0"
          >
            <h1 className={`${styles.sectionHeadText}`}>Tentang Meddy</h1>
            <p className={`${styles.sectionSubText} text-center`}>
              Kami menyediakan informasi mengenai obat - obatan yang akurat dan
              terpercaya loh ! Meddy juga membantu untuk lebih mudah dan efisien
              dalam mencari informasi serta memantau dan mengatur konsumsi obat
              dengan baik dan benar.
            </p>
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
      {/* Section 3 */}
      <div className="w-full bg-secondary dark:bg-slate-900">
        <div className="flex flex-col items-center w-full min-h-screen gap-8 mx-auto max-w-7xl">
          <>
            <div
              className="flex flex-col items-center gap-3"
              data-aos="fade-up"
            >
              <h1 className={`${styles.sectionHeadText}`}>Informasi Obat</h1>
              <p className={`${styles.sectionSubText} text-center`}>
                Informasi dan kandungan mengenai obat agar lebih paham dalam
                mengkonsumsi obat
              </p>
            </div>
            <Carousel />
          </>
          <div className="flex justify-center w-full gap-2 md:justify-end">
            <Link
              to="/info"
              className="text-xl font-bold text-primary hover:text-primary/60"
            >
              Selengkapnya <ArrowForwardIcon />
            </Link>
          </div>
          <>
            <div
              className="flex flex-col items-center gap-3"
              data-aos="fade-up"
            >
              <h1 className={`${styles.sectionHeadText}`}>Berita</h1>
              <p className={`${styles.sectionSubText} text-center`}>
                Tahukah kamu bahwa jika kita mengkonsumsi obat tanpa informasi
                yang jelas dan akurat akan menimbulkan masalah yang sangat
                bahaya, yuk simak di bawah ini!
              </p>
            </div>
            <CarouselBerita />
            <div className="flex justify-center w-full gap-2 md:justify-end">
              <Link
                to="/berita"
                className="text-xl font-bold text-primary hover:text-primary/60"
              >
                Selengkapnya <ArrowForwardIcon />
              </Link>
            </div>
          </>
          <div className="pb-20"></div>
        </div>
      </div>
    </>
  );
};

export default UserHome;
