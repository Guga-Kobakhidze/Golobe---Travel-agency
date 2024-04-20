import { LinkCardsData } from "@/app/interfaces/Interfaces";
import { Box, Typography } from "@mui/material";
import { LinkCardBox } from "../Trip-component/TripCardStyle";
import React from "react";
import BtnComponent from "../button/BtnComponent";

const LinkCard: React.FC<LinkCardsData> = ({ img, title, desc, link, id }) => {
  return (
    <Box sx={{ ...LinkCardBox(img) }} key={id}>
      <Box zIndex={5}>
        <Typography variant="h3" mb={1}>
          {title}
        </Typography>
        <Typography variant="body1" mb={2} maxWidth={380}>
          {desc}
        </Typography>
        <BtnComponent
          content={`Show ${title}`}
          variant="contained"
          bgColor="#8DD3BB"
          color="black"
          href={link}
        />
      </Box>
      <Box className="bg-overlay"></Box>
    </Box>
  );
};

export default LinkCard;
