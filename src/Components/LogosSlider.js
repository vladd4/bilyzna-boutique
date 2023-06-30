import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Slide1 from "../imgs/3.jpg";
import Slide2 from "../imgs/4.jpg";
import Slide3 from "../imgs/5.jpg";
import Slide4 from "../imgs/7.jpg";
import Slide5 from "../imgs/cornette.png";
import Slide6 from "../imgs/logo_gorsenia.png";
import Slide7 from "../imgs/ava_logo.png";
import Slide8 from "../imgs/gaia.png";
import "../LogoSlider.css";
const LogosSlider = () => {
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
      slidesPerView={4}
    >
      <SwiperSlide>
        <div className="swiper-slide logo-slide">
          <img className="logo-img " alt="" src={Slide2}></img>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide logo-slide">
          {" "}
          <img className="logo-img cornette" alt="" src={Slide5}></img>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide logo-slide">
          {" "}
          <img className="logo-img gorsenia" alt="" src={Slide6}></img>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide logo-slide">
          {" "}
          <img className="logo-img" alt="" src={Slide4}></img>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide logo-slide">
          <img className="logo-img" alt="" src={Slide1}></img>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide logo-slide">
          {" "}
          <img className="logo-img" alt="" src={Slide3}></img>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide logo-slide">
          {" "}
          <img className="logo-img" alt="" src={Slide7}></img>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide logo-slide">
          {" "}
          <img className="logo-img gaia" alt="" src={Slide8}></img>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default LogosSlider;
