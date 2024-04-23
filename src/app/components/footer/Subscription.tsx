"use client";

import { Box, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { FooterFormBox } from "./FooterStyle";
import BtnComponent from "../button/BtnComponent";
import Image from "next/image";

const Subscription = () => {
  const [email, setEmail] = useState("");
  const EmailRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let subEmail = EmailRef.current?.value;

    console.log(subEmail);
    setEmail("");
  };

  return (
    <Box sx={{ ...FooterFormBox }}>
      <Box>
        <Typography variant="h2" fontWeight={"bold"} maxWidth={360} mb={1.5}>
          Subscribe Newsletter
        </Typography>
        <Typography variant="h6" fontWeight={"bold"} sx={{ opacity: "0.8" }}>
          The Travel
        </Typography>
        <Typography variant="body1" sx={{ opacity: "0.8" }}>
          Get inspired! Receive travel discounts, tips and behind the scenes
          stories.
        </Typography>
        <Box
          component="form"
          className="SubscribeForm"
          onSubmit={onSubmit}
          mt={1}
        >
          <TextField
            sx={{ mr: 1 }}
            label="Your email address"
            variant="outlined"
            inputRef={EmailRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <BtnComponent
            bgColor="#112211"
            color="white"
            content="Subscribe"
            variant="contained"
          />
        </Box>
      </Box>
      <Box>
        <img src="/assets/subscribeImg.svg" alt="subscrImage" />
      </Box>
    </Box>
  );
};

export default Subscription;
