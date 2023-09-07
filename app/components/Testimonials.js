"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../testimonials.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import testimonials from "../lib/testimonials.js";

export default function Testimonials() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const content = testimonials.map((testimonial) => (
    <SwiperSlide key={testimonial.name}>
      <div className="flex flex-col items-center justify-center p-4 ">
        <h1
          className={`my-4  sm:text-3xl font-bold text-gray-800 max-w-[800px] px-5  ]`}
        >
          {testimonial.message}
        </h1>
        <p className="mt-2 text-center text-amber-500 max-w-[300px]">
          {testimonial.name}
        </p>
        <p className="mt-2 text-sm text-center text-gray-400 max-w-[300px]">
          {testimonial.company}
        </p>
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="py-10 text-center bg-pattern-light">
      <h1>
        <span className="px-3 py-2 rounded-full text-amber-500 bg-amber-100">
          Testimonials
        </span>
      </h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className={`mySwiper `}
      >
        {content}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
