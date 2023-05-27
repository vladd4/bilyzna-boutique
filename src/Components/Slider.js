import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Slide2 from "../imgs/slide2_1.jpg";
import Slide3 from "../imgs/slide2_2.jpg";

const Slider = () => {
  return (
    <Swiper
      onClick={(e) => {
        document.querySelector(".drop-menu-nav").classList.remove("drop-show");
      }}
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
      <SwiperSlide>
        <div
          className="swiper-slide"
          id="slide"
          style={{ backgroundImage: `url(${Slide2})` }}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="swiper-slide"
          id="slide"
          style={{ backgroundImage: `url(${Slide3})` }}
        ></div>
      </SwiperSlide>
    </Swiper>
  );
};
export default Slider;
