"use client";

import React, { useEffect, useState } from "react";
import { HeaderMain, LogoStyle, HeaderContent } from "./HeaderStyle";
import { useMainContext } from "@/app/context/MainContext";
import { Box, Stack } from "@mui/material";
import { usePathname } from "next/navigation";
import Nav from "./Nav";
import Image from "next/image";
import Logo from "../../../../public/assets/Logo.svg";
import LogoDark from "../../../../public/assets/LogoDark.svg";
import Link from "next/link";
import BtnComponent from "../button/BtnComponent";

const Header = () => {
  const [flight, setFlight] = useState<boolean>(false);
  const [stays, setStays] = useState<boolean>(false);

  const { scroller } = useMainContext();
  const pathName = usePathname();

  useEffect(() => {
    pathName == "/flight" ? setFlight(true) : setFlight(false);
    pathName == "/stays" ? setStays(true) : setStays(false);
  }, [pathName]);

  return (
    <Box sx={{ ...HeaderMain }} bgcolor={scroller ? "#fff" : ""}>
      <Box className="container" sx={{ ...HeaderContent }}>
        <Nav
          color={scroller ? "black" : "white"}
          flight={flight}
          stays={stays}
          navigation={true}
        />
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
          <BtnComponent
            variant="text"
            content="Log In"
            color={scroller ? "black" : "white"}
            bgColor="transparent"
            href="log-in"
          />
          <BtnComponent
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
