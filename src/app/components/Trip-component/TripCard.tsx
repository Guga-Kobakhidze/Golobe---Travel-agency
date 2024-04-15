import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { TripCarBox } from "./TripCardStyle";
import { TripCardsData } from "@/app/interfaces/Interfaces";

const TripCard: React.FC<TripCardsData> = ({
  img,
  title,
  flight,
  hotel,
  resort,
}) => {
  return (
    <Box sx={{ ...TripCarBox }}>
      <Image src={img} alt="Trip Card 1" width={90} height={90} />
      <Box className="card-content">
        <Typography variant="h6" color={"#112211"}>
          {title}
        </Typography>
        <Typography variant="body2" color={"#000"}>
          <Link href={"#"} className="n-p">
            {flight}
          </Link>
          • <Link href={"#"}>{hotel}</Link> •<Link href={"#"}>{resort}</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default TripCard;
