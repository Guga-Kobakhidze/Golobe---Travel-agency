"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";
import { Flights, Passenger, RoomGuests, Stays } from "@/data/FormData";
import { SearchContent } from "./SearchModalStyle";
import Nav from "../header/Nav";
import FlightForm from "./FlightForm";
import StaysForm from "./StaysForm";

const SearchModal = () => {
  const [flightForm, setFlightForm] = useState<boolean>(true);
  const [staysForm, setStaysForm] = useState<boolean>(false);
  const [pathName, setPathName] = useState<string>("flight");

  const FlightData = Flights;
  const PassengerData = Passenger;
  const RoomGuestsData = RoomGuests;
  const StaysData = Stays;

  const flightClick = () => {
    setFlightForm(true);
    setStaysForm(false);
    setPathName("flight");
  };

  const staysClick = () => {
    setStaysForm(true);
    setFlightForm(false);
    setPathName("stays");
  };

  return (
    <Box sx={{ ...SearchContent }}>
      <Nav
        color="black"
        navigation={false}
        flyClick={flightClick}
        stayClick={staysClick}
        flight={flightForm}
        stays={staysForm}
      />
      <Box>
        {pathName === "flight" ? (
          <FlightForm locationData={FlightData} passData={PassengerData} />
        ) : (
          <StaysForm locationData={StaysData} passData={RoomGuestsData} />
        )}
      </Box>
    </Box>
  );
};

export default SearchModal;
