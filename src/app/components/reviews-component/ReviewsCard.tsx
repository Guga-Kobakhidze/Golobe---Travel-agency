import { Box, Rating, Stack, Typography } from "@mui/material";
import { ReviewsCardBox } from "./ReviewsCardStyle";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ReviewsCards } from "@/app/interfaces/Interfaces";

const ReviewsCard: React.FC<ReviewsCards> = ({
  id,
  title,
  desc,
  link,
  stars,
  author,
  company,
  locationImg,
  locationTitle,
  locationLink,
  img,
}) => {
  return (
    <Box sx={{ ...ReviewsCardBox }} mb={3} key={id}>
      <Typography variant="h4" className="title">
        {title}
      </Typography>
      <Typography variant="body2" className="paragraph">
        {desc}
      </Typography>
      <Link href={link} className="viewLink">
        View more
      </Link>
      <Stack className="Raiting">
        <Rating
          name="half-rating-read"
          defaultValue={stars}
          precision={0.5}
          readOnly
        />
      </Stack>
      <Box className="Author">
        <Typography variant="h5">{author}</Typography>
        <Typography variant="body1">{company}</Typography>
        <Link href={locationLink} className="locationIcon">
          <Image src={locationImg} width={24} height={24} alt={locationTitle} />
          {locationTitle}
        </Link>
      </Box>
      <Image src={img} width={377} height={200} alt={title} />
    </Box>
  );
};

export default ReviewsCard;
