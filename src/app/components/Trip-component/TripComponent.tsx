import { Box } from "@mui/material";
import React from "react";
import Subtitle from "../subtitle/Subtitle";

const TripComponent = () => {
  return (
    <Box className="container">
      <Subtitle
        title="Plan your perfect trip"
        paragraph="Search Flights & Places Hire to our most popular destinations"
        btnContent="See more places"
      />
    </Box>
  );
};

export default TripComponent;
