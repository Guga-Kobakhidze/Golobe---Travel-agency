"use client";
import React from "react";
import fligntIcon from "../../../../public/assets/airplane-icon.svg";
import bedIcon from "../../../../public/assets/bed-icon.svg";
import Image from "next/image";
import Link from "next/link";
import { Box } from "@mui/material";
import { Navigation } from "./HeaderStyle";

const Nav = () => {
  return (
    <Box sx={{ ...Navigation }}>
      <Link href={"/flight"}>
        <Image width={24} height={24} src={fligntIcon} alt="Icon" />
        Find Flight
      </Link>
      <Link href={"/stays"}>
        <Image width={24} height={24} src={bedIcon} alt="Icon" />
        Find Stays
      </Link>
    </Box>
  );
};

export default Nav;
