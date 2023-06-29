import CarsCard from "../CarsCard/CarsCard";
import { ICar } from "@/app/page";
import { StyledContainer } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";

import React, { useRef, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

import Image from "next/image";

interface ICarsListProps {
  cars: ICar[];
}

export default function CarsList({ cars }: ICarsListProps) {
  return (
    <StyledContainer>
      {/* {cars.map((car) => (
        <CarsCard key={car.id} car={car} />
      ))} */}

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
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </StyledContainer>
  );
}
