import React from "react";
import { animateScroll as scroll } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Carousel } from "../../components";
import { styles } from "../../utils/mainStyle";

const UserHome = () => {
  // React.useEffect(() => {
  //   scroll.scrollToTop({
  //     duration: 1000, // durasi animasi scroll (ms)
  //     delay: 0, // jeda sebelum animasi dimulai (ms)
  //     smooth: "easeInOutQuint", // jenis easing pada animasi scroll
  //   });
  // }, []);
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* Section 1 */}
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-primary dark:bg-slate-900">
        <img
          src="./hero.png"
          alt="doctor"
          className="absolute md:bottom-0 w-[1050px] 2xl:w-[1400px]"
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
            Meddycine <br />
            Teddy
          </h1>
          <p className="absolute max-w-xs text-sm text-center text-white md:max-w-lg md:text-lg">
            Meddy membantu pengguna untuk mencari informasi dengan lebih mudah
            dan efisien serta memantau dan mengelola konsumsi obat dengan baik.
          </p>
          <div className="absolute flex gap-10 bottom-16">
            <Button
              content={"Tentang"}
              style="bg-white px-5 text-primary dark:text-primary dark:hover:text-white md:px-12 shadow-2xl hover:bg-primary hover:text-white"
            />
            <Button
              content={"Unduh"}
              style="bg-white px-5 text-primary dark:text-primary dark:hover:text-white md:px-12 shadow-2xl hover:bg-primary hover:text-white"
            />
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="w-full h-full bg-secondary dark:bg-slate-900">
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
            <div className="flex flex-col items-center gap-3">
              <h1 className={`${styles.sectionHeadText}`}>Informasi Obat</h1>
              <p className={`${styles.sectionSubText} text-center`}>
                Informasi dan kandungan mengenai obat agar lebih paham dalam
                mengkonsumsi obat
              </p>
            </div>
            <Carousel
              slide1="Procold Flu"
              slide2="Procold Flu"
              slide3="Procold Flu"
              slide4="Procold Flu"
              slide5="Procold Flu"
              slide6="Procold Flu"
              content1="6 Kaplet Procold Flu"
              content2="6 Kaplet Procold Flu"
              content3="6 Kaplet Procold Flu"
              content4="6 Kaplet Procold Flu"
              content5="6 Kaplet Procold Flu"
              content6="6 Kaplet Procold Flu"
            />
          </>
          <>
            <div className="flex flex-col items-center gap-3">
              <h1 className={`${styles.sectionHeadText}`}>Berita</h1>
              <p className={`${styles.sectionSubText} text-center`}>
                Tahukah kamu bahwa jika kita mengkonsumsi obat tanpa informasi
                yang jelas dan akurat akan menimbulkan masalah yang sangat
                bahaya, yuk simak di bawah ini!
              </p>
            </div>
            <Carousel
              slide1="Procold Flu"
              slide2="Procold Flu"
              slide3="Procold Flu"
              slide4="Procold Flu"
              slide5="Procold Flu"
              slide6="Procold Flu"
              content1="6 Kaplet Procold Flu"
              content2="6 Kaplet Procold Flu"
              content3="6 Kaplet Procold Flu"
              content4="6 Kaplet Procold Flu"
              content5="6 Kaplet Procold Flu"
              content6="6 Kaplet Procold Flu"
            />
          </>
          <div className="pb-20"></div>
        </div>
      </div>
    </>
  );
};

export default UserHome;
