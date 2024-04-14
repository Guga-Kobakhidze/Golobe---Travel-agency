import React from "react";
import BtnComponent from "../button/BtnComponent";
import { Box, Typography } from "@mui/material";
import { SubtitleProps } from "@/app/interfaces/Interfaces";
import { SubtitileBox } from "./SubtitleStyle";

const Subtitle: React.FC<SubtitleProps> = ({
  title,
  paragraph,
  btnContent,
}) => {
  return (
    <Box sx={{ ...SubtitileBox }} mb={5}>
      <Box className="texts">
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1" color={"#112211"}>
          {paragraph}
        </Typography>
      </Box>
      <BtnComponent
        content={btnContent}
        variant="outlined"
        bgColor="transparent"
        color="black"
      />
    </Box>
  );
};

export default Subtitle;
