import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import Logo from "../../../../public/assets/Logo.svg";
import { Box, Stack } from "@mui/material";
import { HeaderMain, LogoStyle, HeaderContent } from "./HeaderStyle";
import Link from "next/link";
import AnyBtn from "../button/Button";

const Header = () => {
  return (
    <Box sx={{ ...HeaderMain }}>
      <Box className="container" sx={{ ...HeaderContent }}>
        <Nav />
        <Box sx={{ ...LogoStyle }}>
          <Link href={"/"}>
            <Image width={110} height={36} src={Logo} alt="Logo" />
          </Link>
        </Box>
        <Stack spacing={3} direction="row">
          <AnyBtn
            variant="text"
            content="Log In"
            color="white"
            bgColor="transparent"
            href="log-in"
          />
          <AnyBtn
            variant="contained"
            content="Sign Up"
            bgColor="white"
            color="black"
            href="sign-up"
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Header;
