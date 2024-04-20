"use client";

import React from "react";
import ReviewsCard from "./ReviewsCard";
import { ReviewsCardProps } from "@/app/interfaces/Interfaces";
import { ReviewsSwiperBox } from "./ReviewsCardStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";

const ReviewsList: React.FC<ReviewsCardProps> = ({ reviewCardList }) => {
  return (
    <Box sx={{ ...ReviewsSwiperBox }}>
      <Swiper
        slidesPerView={3}
        spaceBetween={100}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper swiper-container"
        loop={true}
      >
        {reviewCardList.map((card) => (
          <SwiperSlide>
            <ReviewsCard
              id={card.id}
              title={card.title}
              desc={card.desc}
              link={card.link}
              stars={card.stars}
              author={card.author}
              company={card.company}
              locationImg={card.locationImg}
              locationTitle={card.locationTitle}
              locationLink={card.locationLink}
              img={card.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ReviewsList;
