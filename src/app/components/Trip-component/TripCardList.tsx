import { TripCardsProps } from "@/app/interfaces/Interfaces";
import { Box } from "@mui/material";
import { TripCardsListBox } from "./TripCardStyle";
import React from "react";
import TripCard from "./TripCard";

const TripCardList: React.FC<TripCardsProps> = ({ cardsList }) => {
  return (
    <Box sx={{ ...TripCardsListBox }}>
      {cardsList.map((card) => (
        <TripCard
          id={card.id}
          img={card.img}
          title={card.title}
          flight={card.flight}
          hotel={card.hotel}
          resort={card.resort}
        />
      ))}
    </Box>
  );
};

export default TripCardList;
