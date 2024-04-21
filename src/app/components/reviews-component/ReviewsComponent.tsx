import { Box } from "@mui/material";
import React from "react";
import ReviewsList from "./ReviewsList";
import Subtitle from "../subtitle/Subtitle";
import { ReviewsCards } from "@/data/ReviewsData";

const ReviewsComponent = () => {
  const ReviewsCardData = ReviewsCards;

  return (
    <Box mb={12}>
      <Subtitle
        title="Reviews"
        paragraph="What people says about Golobe facilities"
        btnContent="See All"
      />
      <Box p={"0 55px"}>
        <ReviewsList reviewCardList={ReviewsCardData} />
      </Box>
    </Box>
  );
};

export default ReviewsComponent;
