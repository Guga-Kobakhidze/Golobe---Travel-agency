import { Box } from "@mui/material";
import React from "react";
import Subscription from "./Subscription";
import FooterNavList from "./FooterNavList";

const Footer = () => {
  return (
    <Box position={"relative"}>
      <Subscription />
      <FooterNavList />
    </Box>
  );
};

export default Footer;
