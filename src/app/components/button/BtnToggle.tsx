import { BtnToggleProps } from "@/app/interfaces/Interfaces";
import { Button } from "@mui/material";
import React from "react";

const BtnToggle: React.FC<BtnToggleProps> = ({
  toggle,
  variant,
  bgColor,
  color,
  content,
}) => {
  return (
    <Button
      sx={{
        bgcolor: bgColor,
        color: color,
        "&:hover": {
          backgroundColor: bgColor,
          opacity: 0.9,
        },
      }}
      variant={variant}
      onClick={toggle}
    >
      {content}
    </Button>
  );
};

export default BtnToggle;
