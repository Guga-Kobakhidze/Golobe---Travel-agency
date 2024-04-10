import React from "react";
import { Box, Typography } from "@mui/material";
import { mainbackground } from "./MainBgStyle";

const MainBg = () => {
  return (
    <Box sx={{ ...mainbackground }}>
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
      <Box className="bg-overlay"></Box>
    </Box>
  );
};

export default MainBg;
