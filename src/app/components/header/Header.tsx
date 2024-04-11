"use client";

import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import Logo from "../../../../public/assets/Logo.svg";
import LogoDark from "../../../../public/assets/LogoDark.svg";
import { Box, Stack } from "@mui/material";
import { HeaderMain, LogoStyle, HeaderContent } from "./HeaderStyle";
import Link from "next/link";
import AnyBtn from "../button/Button";
import { useMainContext } from "@/app/context/MainContext";

const Header = () => {
  const { scroller } = useMainContext();

  return (
    <Box sx={{ ...HeaderMain }} bgcolor={scroller ? "#fff" : ""}>
      <Box className="container" sx={{ ...HeaderContent }}>
        <Nav color={scroller ? "black" : "white"} />
        <Box sx={{ ...LogoStyle }}>
          <Link href={"/"}>
            <Image
              width={110}
              height={36}
              src={scroller ? LogoDark : Logo}
              alt="Logo"
            />
          </Link>
        </Box>
        <Stack spacing={3} direction="row">
          <AnyBtn
            variant="text"
            content="Log In"
            color={scroller ? "black" : "white"}
            bgColor="transparent"
            href="log-in"
          />
          <AnyBtn
            variant="contained"
            content="Sign Up"
            bgColor={scroller ? "black" : "white"}
            color={scroller ? "white" : "black"}
            href="sign-up"
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Header;
