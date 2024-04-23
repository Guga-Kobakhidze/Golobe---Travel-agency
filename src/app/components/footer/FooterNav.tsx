import { FooterNavProps } from "@/app/interfaces/Interfaces";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const FooterNav: React.FC<FooterNavProps> = ({ links, title }) => {
  return (
    <Box>
      <Typography>{title}</Typography>
      {links.map((link) => (
        <Link href={link.link}>{link.title}</Link>
      ))}
    </Box>
  );
};

export default FooterNav;
