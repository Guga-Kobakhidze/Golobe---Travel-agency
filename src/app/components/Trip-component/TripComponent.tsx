import React from "react";
import Subtitle from "../subtitle/Subtitle";
import TripCardList from "./TripCardList";
import { Box } from "@mui/material";
import { AllTripsData } from "@/data/TripsData";

const TripComponent = () => {
  const TripCardsData = AllTripsData;

  return (
    <Box className="container">
      <Subtitle
        title="Plan your perfect trip"
        paragraph="Search Flights & Places Hire to our most popular destinations"
        btnContent="See more places"
      />
      <TripCardList cardsList={TripCardsData} />
    </Box>
  );
};

export default TripComponent;
