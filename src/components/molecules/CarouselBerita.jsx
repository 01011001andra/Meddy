import axios from "axios";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const CarouselBerita = () => {
  const [responsive, setResponsive] = React.useState(false);
  const [berita, setBerita] = React.useState([]);

  const getData = () => {
    axios
      .get("http://vijayasena.marsanix.com/api/beritas")
      .then((res) => {
        console.info(res.data);
        setBerita(res.data);
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
      setResponsive(window.innerWidth >= 900);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener on component unmount
    };
  }, []);

  const slidesPerView = responsive ? 3 : 1;

  return (
    <div className={`w-full`}>
      <Swiper
        spaceBetween={50}
        slidesPerView={slidesPerView}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="px-4 pb-5 xl:px-0"
      >
        {berita.map((item) => {
          return (
            <SwiperSlide className="flex flex-col gap-3 px-3 py-4 pb-8 text-2xl font-bold bg-no-repeat bg-cover shadow-md rounded-2xl">
              <img src={item.gambar} alt="obat" className="h-56 rounded-md" />
              <p className="text-base font-normal">{item.judul}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CarouselBerita;
