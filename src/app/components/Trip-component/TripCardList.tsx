import { TripCardsProps } from "@/app/interfaces/Interfaces";
import { Box } from "@mui/material";
import React from "react";
import TripCard from "./TripCard";

const TripCardList: React.FC<TripCardsProps> = ({ cardsList }) => {
  return (
    <Box>
      <TripCard />
    </Box>
  );
};

export default TripCardList;
