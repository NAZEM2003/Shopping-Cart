import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
// import required modules
import { Autoplay, Pagination } from "swiper";
//images
import slide1 from '../assets/images/tamanna-rumee-lpGm415q9JA-unsplash.jpg';
import slide2 from '../assets/images/c-d-x-PDX_a_82obo-unsplash.jpg';
import slide3 from '../assets/images/paul-cuoco-aY0UX6xzGik-unsplash.jpg';
import slide4 from '../assets/images/revolt-164_6wVEHfI-unsplash.jpg';


 const Slider = ()=> {

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay , Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide1} alt="slider"/></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="slider"/></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="slider"/></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="slider"/></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider