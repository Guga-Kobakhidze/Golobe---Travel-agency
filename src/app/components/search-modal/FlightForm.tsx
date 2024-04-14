import React, { useEffect, useState } from "react";
import { SearchFormProps } from "@/app/interfaces/Interfaces";
import PromoCode from "./PromoCode";
import BtnComponent from "../button/BtnComponent";
import useSearchForm from "@/app/hooks/useSearchForm";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import {
  FormStyle,
  SearchFormStyle,
  Buttons,
  ButtonStyle,
} from "./SearchModalStyle";

const FlightForm: React.FC<SearchFormProps> = ({ locationData, passData }) => {
  const [dateChange, setDateChange] = useState<boolean>(false);
  const {
    DateRef,
    LocationRef,
    PersonRef,
    PromoCodeRef,
    ReturnRef,
    ShowPromo,
    onSubmit,
    setTitle,
    showPromo,
  } = useSearchForm();

  const NoIcon = () => null;

  useEffect(() => {
    locationData && setTitle("Flight");
  }, [locationData]);

  return (
    <Box component="form" onSubmit={onSubmit}>
      <Box sx={{ ...SearchFormStyle }}>
        <FormControl sx={{ ...FormStyle }}>
          <InputLabel id="label" className="inputLab">
            From - To
          </InputLabel>
          <Select
            labelId="label"
            defaultValue=""
            label="FromTo"
            inputRef={LocationRef}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {locationData.map((place, index) => (
              <MenuItem key={index} value={`${place.from} - ${place.to}`}>
                {`${place.from} - ${place.to}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ ...FormStyle, width: 140 }}>
          <InputLabel id="label1" className="inputLab">
            Trip
          </InputLabel>
          <Select
            labelId="label1"
            defaultValue=""
            label="FromTo"
            inputRef={ReturnRef}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="True">Return</MenuItem>
            <MenuItem value="False">No Return</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ ...FormStyle }}>
          <TextField
            id="label2"
            label="Depart"
            inputRef={DateRef}
            type={dateChange ? "date" : "text"}
            onFocus={() => setDateChange(true)}
            onBlur={() => setDateChange(false)}
          />
        </FormControl>
        <FormControl sx={{ ...FormStyle }}>
          <InputLabel id="label3" className="inputLab">
            Passenger - Class
          </InputLabel>
          <Select
            labelId="label3"
            defaultValue=""
            label="FromTo"
            IconComponent={NoIcon}
            inputRef={PersonRef}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {passData.map((pass, index) => (
              <MenuItem key={index} value={`${pass.passenger} - ${pass.class}`}>
                {`${pass.passenger} - ${pass.class}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ ...Buttons }}>
        {showPromo && <PromoCode currentRef={PromoCodeRef} />}
        <Button sx={{ ...ButtonStyle }} variant="text" onClick={ShowPromo}>
          + Add Promo Code
        </Button>
        <BtnComponent
          content="Show Filghts"
          variant="contained"
          bgColor="#8DD3BB"
          color="black"
        />
      </Box>
    </Box>
  );
};
export default FlightForm;
