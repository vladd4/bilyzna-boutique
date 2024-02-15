"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Slide1 from "@/../public/3.webp";
import Slide2 from "@/../public/4.webp";
import Slide3 from "@/../public/5.webp";
import Slide4 from "@/../public/6.webp";
import Slide5 from "@/../public/cornette.webp";
import Slide6 from "@/../public/logo_gorsenia.webp";
import Slide7 from "@/../public/ava_logo.webp";
import Slide8 from "@/../public/gaia.webp";

import Image from "next/image";

import "../styles/logoSlider.css";

export default function LogosSlider() {
  return (
    <Swiper
      id="logo-swiper"
      style={{
        "--swiper-navigation-color": "#e8959f",
        "--swiper-pagination-color": "#e8959f",
        "--swiper-navigation-size": "30px",
      }}
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      spaceBetween={0}
      slidesPerView={2}
      breakpoints={{
        600: {
          slidesPerView: 4,
        },
      }}
      loop={true}
    >
      <SwiperSlide>
        <div className="swiper-slide logo-slide">
          <Image
            className="logo-img "
            alt="Ava"
            width={200}
            height={70}
            src={Slide2}
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide logo-slide">
          <Image
            width={200}
            height={70}
            className="logo-img cornette"
            alt="Cornette"
            src={Slide5}
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide logo-slide">
          <Image
            width={200}
            height={70}
            className="logo-img gorsenia"
            alt="Gorsenia"
            src={Slide6}
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide logo-slide">
          <Image
            width={200}
            height={70}
            className="logo-img"
            alt="Gaia"
            src={Slide4}
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide logo-slide">
          <Image
            className="logo-img"
            alt="Gata"
            width={200}
            height={70}
            src={Slide1}
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide logo-slide">
          <Image
            width={200}
            height={70}
            className="logo-img"
            alt="Logo"
            src={Slide3}
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide logo-slide">
          <Image
            width={200}
            height={70}
            id="slide-7"
            className="logo-img"
            alt="Logo"
            src={Slide7}
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide logo-slide">
          {" "}
          <Image
            width={200}
            height={70}
            id="slide-8"
            className="logo-img gaia"
            alt="Logo"
            src={Slide8}
          ></Image>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
