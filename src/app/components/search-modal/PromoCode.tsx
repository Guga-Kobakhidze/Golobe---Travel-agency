import React from "react";
import { Box, TextField } from "@mui/material";
import { PromoCodeStyle } from "./SearchModalStyle";
import { PromoCodeProps } from "@/app/interfaces/Interfaces";

const PromoCode: React.FC<PromoCodeProps> = ({ currentRef }) => {
  return (
    <Box sx={{ ...PromoCodeStyle }}>
      <TextField
        id="PromoCode"
        label="Enter Promo Code"
        type="text"
        inputRef={currentRef}
      />
    </Box>
  );
};

export default PromoCode;
