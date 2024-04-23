import {
  AboutUs,
  Activities,
  Blogs,
  ContactUs,
  Destinations,
} from "@/data/FooterNavData";
import { Box } from "@mui/material";
import { FooterNavStyle } from "./FooterStyle";
import React from "react";
import FooterNav from "./FooterNav";

const FooterNavList = () => {
  const DestinationsData = Destinations;
  const ActivitiesData = Activities;
  const BlogsData = Blogs;
  const AboutUsData = AboutUs;
  const ContactUsData = ContactUs;

  return (
    <Box sx={{ ...FooterNavStyle }}>
      <FooterNav links={DestinationsData} title="Our Destinations" />
      <FooterNav links={ActivitiesData} title="Our Activities" />
      <FooterNav links={BlogsData} title="Travel Blogs" />
      <FooterNav links={AboutUsData} title="About Us" />
      <FooterNav links={ContactUsData} title="Contact Us" />
    </Box>
  );
};

export default FooterNavList;
