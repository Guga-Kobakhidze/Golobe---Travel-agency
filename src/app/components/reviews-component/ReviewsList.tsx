import { Box } from "@mui/material";
import React from "react";
import ReviewsCard from "./ReviewsCard";
import { ReviewsCardProps } from "@/app/interfaces/Interfaces";

const ReviewsList: React.FC<ReviewsCardProps> = ({ reviewCardList }) => {
  return (
    <Box display={"flex"} gap={6} sx={{ overflow: "hidden" }}>
      {reviewCardList.map((card) => (
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
      ))}
    </Box>
  );
};

export default ReviewsList;
