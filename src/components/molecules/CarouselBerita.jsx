import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const CarouselBerita = (props) => {
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
        <SwiperSlide className="flex flex-col gap-3 px-3 py-4 pb-8 text-2xl font-bold bg-no-repeat bg-cover shadow-md rounded-2xl">
          <img
            src="https://media.gettyimages.com/id/1289018115/photo/female-anchor-presenting-breaking-news-about-severe-weather-causing-power-outage.jpg?s=612x612&w=gi&k=20&c=uSD-HSZhWuEb4Y5b7Xdr2uFByap0NjZ9CTOJJyQZytk="
            alt="obat"
            className="rounded-md"
          />
          {slide1}
          <p className="text-base font-normal">{content1}</p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col gap-3 px-3 py-4 pb-8 text-2xl font-bold bg-no-repeat bg-cover shadow-md rounded-2xl">
          <img
            src="https://media.gettyimages.com/id/1289018115/photo/female-anchor-presenting-breaking-news-about-severe-weather-causing-power-outage.jpg?s=612x612&w=gi&k=20&c=uSD-HSZhWuEb4Y5b7Xdr2uFByap0NjZ9CTOJJyQZytk="
            alt="obat"
            className="rounded-md"
          />
          {slide1}
          <p className="text-base font-normal">{content1}</p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col gap-3 px-3 py-4 pb-8 text-2xl font-bold bg-no-repeat bg-cover shadow-md rounded-2xl">
          <img
            src="https://media.gettyimages.com/id/1289018115/photo/female-anchor-presenting-breaking-news-about-severe-weather-causing-power-outage.jpg?s=612x612&w=gi&k=20&c=uSD-HSZhWuEb4Y5b7Xdr2uFByap0NjZ9CTOJJyQZytk="
            alt="obat"
            className="rounded-md"
          />
          {slide1}
          <p className="text-base font-normal">{content1}</p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col gap-3 px-3 py-4 pb-8 text-2xl font-bold bg-no-repeat bg-cover shadow-md rounded-2xl">
          <img
            src="https://media.gettyimages.com/id/1289018115/photo/female-anchor-presenting-breaking-news-about-severe-weather-causing-power-outage.jpg?s=612x612&w=gi&k=20&c=uSD-HSZhWuEb4Y5b7Xdr2uFByap0NjZ9CTOJJyQZytk="
            alt="obat"
            className="rounded-md"
          />
          {slide1}
          <p className="text-base font-normal">{content1}</p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col gap-3 px-3 py-4 pb-8 text-2xl font-bold bg-no-repeat bg-cover shadow-md rounded-2xl">
          <img
            src="https://media.gettyimages.com/id/1289018115/photo/female-anchor-presenting-breaking-news-about-severe-weather-causing-power-outage.jpg?s=612x612&w=gi&k=20&c=uSD-HSZhWuEb4Y5b7Xdr2uFByap0NjZ9CTOJJyQZytk="
            alt="obat"
            className="rounded-md"
          />
          {slide1}
          <p className="text-base font-normal">{content1}</p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col gap-3 px-3 py-4 pb-8 text-2xl font-bold bg-no-repeat bg-cover shadow-md rounded-2xl">
          <img
            src="https://media.gettyimages.com/id/1289018115/photo/female-anchor-presenting-breaking-news-about-severe-weather-causing-power-outage.jpg?s=612x612&w=gi&k=20&c=uSD-HSZhWuEb4Y5b7Xdr2uFByap0NjZ9CTOJJyQZytk="
            alt="obat"
            className="rounded-md"
          />
          {slide1}
          <p className="text-base font-normal">{content1}</p>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col gap-3 px-3 py-4 pb-8 text-2xl font-bold bg-no-repeat bg-cover shadow-md rounded-2xl">
          <img
            src="https://media.gettyimages.com/id/1289018115/photo/female-anchor-presenting-breaking-news-about-severe-weather-causing-power-outage.jpg?s=612x612&w=gi&k=20&c=uSD-HSZhWuEb4Y5b7Xdr2uFByap0NjZ9CTOJJyQZytk="
            alt="obat"
            className="rounded-md"
          />
          {slide1}
          <p className="text-base font-normal">{content1}</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselBerita;
