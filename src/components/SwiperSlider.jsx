'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Destination from "./Destination";

const SwiperSlider = ({features}) => {
    return (
         <div className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        { features.slice(0, 6).map(destination => (
          <SwiperSlide key={destination._id}>
            <Destination destination={destination} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    );
};

export default SwiperSlider;