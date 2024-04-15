import { Box } from "@mui/material";
import { LinkCardsProps } from "@/app/interfaces/Interfaces";
import { LinkCardComponentBox } from "../Trip-component/TripCardStyle";
import React from "react";
import LinkCard from "./LinkCard";

const LinkCardList: React.FC<LinkCardsProps> = ({ cardsList }) => {
  return (
    <Box sx={{ ...LinkCardComponentBox }}>
      {cardsList.map((card) => (
        <LinkCard
          img={card.img}
          title={card.title}
          desc={card.desc}
          link={card.link}
        />
      ))}
    </Box>
  );
};

export default LinkCardList;
