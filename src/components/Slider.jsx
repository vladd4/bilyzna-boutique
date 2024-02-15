"use client";

import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { hideCart } from "@/utils/hide_cart_header";

import { slider } from "@/static_store/slider_home";

const Slider = () => {
  return (
    <Swiper
      onClick={hideCart}
      style={{
        "--swiper-navigation-color": "#e8959f",
        "--swiper-pagination-color": "#e8959f",
      }}
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {slider.map((slide) => {
        return (
          <SwiperSlide key={slide.image}>
            <div
              className="swiper-slide"
              id="slide"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            ></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default Slider;
