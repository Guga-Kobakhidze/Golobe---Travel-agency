import React, { useEffect, useState } from "react";
import flightntIcon from "../../../../public/assets/airplane-icon.svg";
import flightntIconDark from "../../../../public/assets/airplane-icon-black.svg";
import bedIcon from "../../../../public/assets/bed-icon.svg";
import bedIconDark from "../../../../public/assets/bed-icon-black.svg";
import Image from "next/image";
import Link from "next/link";
import { Box } from "@mui/material";
import { Navigation } from "./HeaderStyle";
import { NavProps } from "@/app/interfaces/Interfaces";

const Nav: React.FC<NavProps> = ({ color, flight, stays }) => {
  const [icon, setIcon] = useState<boolean>(false);

  useEffect(() => {
    color == "black" ? setIcon(true) : setIcon(false);
  }, [color]);

  return (
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
  );
};

export default Nav;
