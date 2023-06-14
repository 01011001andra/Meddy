import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Carousel = (props) => {
  const [responsive, setResponsive] = React.useState(false);

  const {
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    content1,
    content2,
    content3,
    content4,
    content5,
    content6,
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

  const slidesPerView = responsive ? 4 : 1;

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
          className="flex flex-col items-center justify-center py-10 text-white bg-no-repeat bg-cover rounded-2xl"
          style={{ backgroundImage: "url('./cardBg.png')" }}
        >
          <img src="./obat.png" alt="obat" />
          {slide1}
          <p className="text-white">{content1}</p>
        </SwiperSlide>
        <SwiperSlide
          className="flex flex-col items-center justify-center py-10 text-white bg-no-repeat bg-cover rounded-2xl"
          style={{ backgroundImage: "url('./cardBg.png')" }}
        >
          <img src="./obat.png" alt="obat" />
          {slide2}
          <p className="text-white">{content2}</p>
        </SwiperSlide>
        <SwiperSlide
          className="flex flex-col items-center justify-center py-10 text-white bg-no-repeat bg-cover rounded-2xl"
          style={{ backgroundImage: "url('./cardBg.png')" }}
        >
          <img src="./obat.png" alt="obat" />
          {slide3}
          <p className="text-white">{content3}</p>
        </SwiperSlide>
        <SwiperSlide
          className="flex flex-col items-center justify-center py-10 text-white bg-no-repeat bg-cover rounded-2xl"
          style={{ backgroundImage: "url('./cardBg.png')" }}
        >
          <img src="./obat.png" alt="obat" />
          {slide4}
          <p className="text-white">{content4}</p>
        </SwiperSlide>
        <SwiperSlide
          className="flex flex-col items-center justify-center py-10 text-white bg-no-repeat bg-cover border rounded-2xl"
          style={{ backgroundImage: "url('./cardBg.png')" }}
        >
          <img src="./obat.png" alt="obat" />
          {slide5}
          <p className="text-white">{content5}</p>
        </SwiperSlide>
        <SwiperSlide
          className="flex flex-col items-center justify-center py-10 text-white bg-no-repeat bg-cover rounded-2xl "
          style={{ backgroundImage: "url('./cardBg.png')" }}
        >
          <img src="./obat.png" alt="obat" />
          {slide6}
          <p className="text-white">{content6}</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
