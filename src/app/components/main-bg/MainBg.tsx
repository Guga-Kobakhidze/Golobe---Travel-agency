import React from "react";
import { Box, Typography } from "@mui/material";
import { mainbackground } from "./MainBgStyle";
import SearchModal from "../search-modal/SearchModal";

const MainBg = () => {
  return (
    <Box sx={{ ...mainbackground }} mb={40}>
      <Box position={"relative"} zIndex={5} pt={20}>
        <Typography fontWeight={700} variant="h3">
          Helping Others
        </Typography>
        <Typography fontWeight={700} variant="h1" mb={0.5}>
          Live & Travel
        </Typography>
        <Typography fontWeight={500} variant="h5">
          Special offers to suit your plan
        </Typography>
      </Box>
      <SearchModal />
      <Box className="bg-overlay"></Box>
    </Box>
  );
};

export default MainBg;
