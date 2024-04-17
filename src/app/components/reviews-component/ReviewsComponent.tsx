import { Box } from "@mui/material";
import React from "react";
import ReviewsList from "./ReviewsList";
import Subtitle from "../subtitle/Subtitle";

const ReviewsComponent = () => {
  return (
    <Box>
      <Subtitle
        title="Reviews"
        paragraph="What people says about Golobe facilities"
        btnContent="See All"
      />
      <Box p={"0 55px"}>
        <ReviewsList />
      </Box>
    </Box>
  );
};

export default ReviewsComponent;
