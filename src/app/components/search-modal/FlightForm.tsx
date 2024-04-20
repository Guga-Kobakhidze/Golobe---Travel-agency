import React, { useEffect, useState } from "react";
import { SearchFormProps } from "@/app/interfaces/Interfaces";
import { FormStyle, SearchFormStyle, Buttons } from "./SearchModalStyle";
import PromoCode from "./PromoCode";
import BtnComponent from "../button/BtnComponent";
import useSearchForm from "@/app/hooks/useSearchForm";
import BtnToggle from "../button/BtnToggle";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const FlightForm: React.FC<SearchFormProps> = ({
  locationData,
  passData,
  path = "",
}) => {
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
    locationData && setTitle(path);
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
            {locationData.map((place) => (
              <MenuItem key={place.id} value={`${place.from} - ${place.to}`}>
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
            {passData.map((pass) => (
              <MenuItem
                key={pass.id}
                value={`${pass.passenger} - ${pass.class}`}
              >
                {`${pass.passenger} - ${pass.class}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ ...Buttons }}>
        {showPromo && <PromoCode currentRef={PromoCodeRef} />}
        <BtnToggle
          variant="text"
          toggle={ShowPromo}
          content="+ Add Promo Code"
          color="black"
          bgColor="transparent"
        />
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
