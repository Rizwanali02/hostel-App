'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
interface ImageSliderProps {
  imageUrls: { secureUrl: string; id:string; }[];
}
const ImageSlider = ({imageUrls}:ImageSliderProps) => {
  console.log('imageUrls--',imageUrls)
  // const images = 
  // [
  //     "/images/hostelimage3.png",
  //   "/images/hostelimage1.png",
  //   "/images/hostelimage2.png",
  // ];
  return (
    <div className="relative w-full h-[350px] bg-gray-200 rounded-lg overflow-hidden mt-4">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {imageUrls.map((image, index) => (
          <SwiperSlide key={image.id}>
            <div className="relative w-full h-full">
              <Image
                src={image.secureUrl}
                alt={`Property ${index + 1}`}
                fill
                className="object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.src = "/images/hostelimage1.png";
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
