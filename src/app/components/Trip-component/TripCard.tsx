import { Box, Typography } from "@mui/material";
import { TripCarBox } from "./TripCardStyle";
import Image from "next/image";
import React from "react";

const TripCard = () => {
  return (
    <Box sx={{ ...TripCarBox }}>
      <Image
        src={"assets/TripCards/TripCard1.svg"}
        alt="Trip Card 1"
        width={90}
        height={90}
      />
      <Box>
        <Typography variant="h6" color={"#112211"}>
          Istanbul, Turkey
        </Typography>
        <Typography variant="body2" color={"#000"}>
          <span>Flights</span> • <span>Hotels</span> • <span>Resorts</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default TripCard;
