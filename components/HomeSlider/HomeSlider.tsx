import React from "react";
import slider1 from "@/assets/sliderTemp/slider1.png";
import slider2 from "@/assets/sliderTemp/slider2.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const width = window.innerWidth;
const height = window.innerHeight;

const HomeSlider = () => {
  return (
    <div>
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image
          src={slider1}
          alt=""
          width={width}
          height={height / 2}
          style={{
            objectFit: "cover",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={slider2}
          alt=""
          width={width}
          height={height / 2}
          style={{
            objectFit: "cover",
          }}
        />
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default HomeSlider;
