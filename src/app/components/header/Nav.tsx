import React, { useEffect, useState } from "react";
import flightntIcon from "../../../../public/assets/airplane-icon.svg";
import flightntIconDark from "../../../../public/assets/airplane-icon-black.svg";
import bedIcon from "../../../../public/assets/bed-icon.svg";
import bedIconDark from "../../../../public/assets/bed-icon-black.svg";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { Navigation } from "./HeaderStyle";
import { NavProps } from "@/app/interfaces/Interfaces";

const Nav: React.FC<NavProps> = ({
  color,
  flight,
  stays,
  navigation,
  flyClick,
  stayClick,
}) => {
  const [icon, setIcon] = useState<boolean>(false);

  useEffect(() => {
    color == "black" ? setIcon(true) : setIcon(false);
  }, [color]);

  return (
    <>
      {navigation ? (
        <Box sx={{ ...Navigation(color) }}>
          <Link href={"/flight"} className={flight ? "active" : ""}>
            <Image
              width={24}
              height={24}
              src={icon ? flightntIconDark : flightntIcon}
              alt="Icon"
            />
            Find Flight
          </Link>
          <Link href={"/stays"} className={stays ? "active" : ""}>
            <Image
              width={24}
              height={24}
              src={icon ? bedIconDark : bedIcon}
              alt="Icon"
            />
            Find Stays
          </Link>
        </Box>
      ) : (
        <Box sx={{ ...Navigation(color) }}>
          <Typography
            variant="h4"
            onClick={flyClick}
            className={flight ? "active" : ""}
          >
            <Image width={24} height={24} src={flightntIconDark} alt="Icon" />
            Find Flight
          </Typography>
          <Box className="line"></Box>
          <Typography
            variant="h4"
            onClick={stayClick}
            className={stays ? "active" : ""}
          >
            <Image width={24} height={24} src={bedIconDark} alt="Icon" />
            Find Stays
          </Typography>
        </Box>
      )}
    </>
  );
};

export default Nav;
