import CarsCard from "../CarsCard/CarsCard";
import { StyledContainer } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { ICar } from "../../page";

import React, { useRef, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

interface ICarsListProps {
  cars: ICar[];
}

export default function CarsList({ cars }: ICarsListProps) {
  return (
    <StyledContainer>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {cars.map((car) => (
          <SwiperSlide key={car.id}>
            <CarsCard car={car} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledContainer>
  );
}
