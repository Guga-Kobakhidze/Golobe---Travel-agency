import React from "react";
import Subtitle from "../subtitle/Subtitle";
import TripCardList from "./TripCardList";
import { Box } from "@mui/material";
import { AllLinksCard, AllTripsData } from "@/data/TripsData";
import LinkCardList from "../link-card/LinkCardList";

const TripComponent = () => {
  const TripCardsData = AllTripsData;
  const LinkCardsData = AllLinksCard;

  return (
    <Box mb={10}>
      <Box>
        <Subtitle
          title="Plan your perfect trip"
          paragraph="Search Flights & Places Hire to our most popular destinations"
          btnContent="See more places"
        />
        <TripCardList cardsList={TripCardsData} />
        <LinkCardList cardsList={LinkCardsData} />
      </Box>
    </Box>
  );
};

export default TripComponent;
