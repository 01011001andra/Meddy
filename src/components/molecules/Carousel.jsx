import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import axios from "axios";

const Carousel = () => {
  const [responsive, setResponsive] = React.useState(false);
  const [obat, setObat] = React.useState([]);

  const getData = () => {
    axios
      .get("http://vijayasena.marsanix.com/api/obats")
      .then((res) => {
        console.info(res.data);
        setObat(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  React.useEffect(() => {
    getData();
  }, []);

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
        {obat.map((item) => {
          return (
            <SwiperSlide
              className="flex flex-col items-center justify-center gap-4 py-10 text-white bg-no-repeat bg-cover rounded-2xl"
              style={{ backgroundImage: "url('./cardBg.png')" }}
            >
              <img src={item.gambar} alt={item.name} className="h-48" />
              <p className="text-lg text-white">{item.name}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
