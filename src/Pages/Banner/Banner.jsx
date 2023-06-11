import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

import img1 from '../../../src/assets/banner/banner.png';
import img2 from '../../../src/assets/banner/banner2.png';
import img3 from '../../../src/assets/banner/banner3.png';
import img4 from '../../../src/assets/banner/banner4.png';

// Initialize Swiper core modules
SwiperCore.use([Pagination, Autoplay]);

const Banner = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const { current: swiperInstance } = swiperRef;
    if (swiperInstance && swiperInstance.swiper) {
      swiperInstance.swiper.autoplay.start();
    }
  }, []);

  return (
    <Swiper
      ref={swiperRef}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      speed={2000} // Set the transition speed to 1000 milliseconds (1 second)
    >
      <SwiperSlide>
        <img className="w-full" src={img1} alt="Banner 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="Banner 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="Banner 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="Banner 4" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full" src={img1} alt="Banner 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="Banner 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="Banner 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
