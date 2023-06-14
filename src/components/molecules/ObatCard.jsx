import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const ObatCard = (props) => {
  const [responsive, setResponsive] = React.useState(false);

  const {
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    content1,
    content2,
    content3,
    content4,
    content5,
  } = props;

  React.useEffect(() => {
    const handleResize = () => {
      setResponsive(window.innerWidth >= 900); // Adjust the breakpoint as per your requirements
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener on component unmount
    };
  }, []);

  const slidesPerView = responsive ? 5 : 1;

  return (
    <div className={`w-full`}>
      <Swiper
        spaceBetween={50}
        slidesPerView={slidesPerView}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="px-4 pb-5 xl:px-0"
      >
        <SwiperSlide
          className="flex flex-col items-center shadow-md justify-center py-10 text-white bg-no-repeat bg-cover rounded-2xl border-solid border-2 border-sky-500 "
        >
          <img src="../bodrex.png" alt="obat" />
          <p className="text-black font-semibold text-lg">{slide1}</p>
          <p className="text-black text-sm">{content1}</p>
        </SwiperSlide>
        <SwiperSlide
          className="flex flex-col items-center shadow-md justify-center py-10 text-white bg-no-repeat bg-cover rounded-2xl border-solid border-2 border-sky-500 "
        >
          <img src="../termorex.png" alt="obat" className="pb-9" />
          <p className="text-black font-semibold text-lg">{slide2}</p>
          <p className="text-black text-sm">{content2}</p>
        </SwiperSlide>
        <SwiperSlide
          className="flex flex-col items-center shadow-md justify-center py-10 text-white bg-no-repeat bg-cover rounded-2xl border-solid border-2 border-sky-500 "
        >
          <img src="../tolak angin.png" alt="obat"  className="pb-6" />
          <p className="text-black font-semibold text-lg">{slide3}</p>
          <p className="text-black text-sm">{content3}</p>
        </SwiperSlide>
        <SwiperSlide
          className="flex flex-col items-center shadow-md justify-center py-10 text-white bg-no-repeat bg-cover rounded-2xl border-solid border-2 border-sky-500 "
        >
          <img src="../promag.png" alt="obat" className="pb-3" />
          <p className="text-black font-semibold text-lg">{slide4}</p>
          <p className="text-black text-sm">{content4}</p>
        </SwiperSlide>
        <SwiperSlide
          className="flex flex-col items-center shadow-md justify-center py-10 text-white bg-no-repeat bg-cover rounded-2xl border-solid border-2 border-sky-500 "
        >
          <img src="../cucurma.png" alt="obat" className="pb-8" />
          <p className="text-black font-semibold text-lg">{slide5}</p>
          <p className="text-black text-sm">{content5}</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ObatCard;
