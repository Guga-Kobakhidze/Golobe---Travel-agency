import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { FormStyle, SearchFormStyle, Buttons } from "./SearchModalStyle";
import { SearchFormProps } from "@/app/interfaces/Interfaces";
import PromoCode from "./PromoCode";
import BtnComponent from "../button/BtnComponent";
import useSearchForm from "@/app/hooks/useSearchForm";

const StaysForm: React.FC<SearchFormProps> = ({ locationData, passData }) => {
  const [dateChange, setDateChange] = useState<boolean>(false);
  const [returnDateChange, setReturnDateChange] = useState<boolean>(false);
  const {
    DateRef,
    LocationRef,
    PersonRef,
    PromoCodeRef,
    ReturnRef,
    ShowPromo,
    filledForm,
    onSubmit,
    setTitle,
    showPromo,
  } = useSearchForm();

  const NoIcon = () => null;

  useEffect(() => {
    locationData && setTitle("Stays");
  }, [locationData]);

  return (
    <Box component="form" onSubmit={onSubmit}>
      <Box sx={{ ...SearchFormStyle }}>
        <FormControl sx={{ ...FormStyle }}>
          <InputLabel id="label21" className="inputLab">
            Enter Destination
          </InputLabel>
          <Select
            labelId="label21"
            defaultValue=""
            label="FromTo"
            inputRef={LocationRef}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {locationData.map((place, index) => (
              <MenuItem key={index} value={`${place.to}`}>
                {`${place.to}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ ...FormStyle }}>
          <TextField
            id="label22"
            label="Check In"
            inputRef={DateRef}
            type={dateChange ? "date" : "text"}
            onFocus={() => setDateChange(true)}
            onBlur={() => setDateChange(false)}
          />
        </FormControl>
        <FormControl sx={{ ...FormStyle }}>
          <TextField
            id="label23"
            label="Check Out"
            inputRef={ReturnRef}
            type={returnDateChange ? "date" : "text"}
            onFocus={() => setReturnDateChange(true)}
            onBlur={() => setReturnDateChange(false)}
          />
        </FormControl>
        <FormControl sx={{ ...FormStyle }}>
          <InputLabel id="label24" className="inputLab">
            Rooms & Guests
          </InputLabel>
          <Select
            labelId="label24"
            defaultValue=""
            label="FromTo"
            IconComponent={NoIcon}
            inputRef={PersonRef}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {passData.map((pass, index) => (
              <MenuItem key={index} value={`${pass.guest} - ${pass.room}`}>
                {`${pass.guest} - ${pass.room}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {showPromo && <PromoCode currentRef={PromoCodeRef} />}
      </Box>
      <Box sx={{ ...Buttons }}>
        <BtnComponent
          content="+ Add Promo Code"
          variant="text"
          bgColor="transparent"
          color="black"
          btnFunc={ShowPromo}
        />
        <BtnComponent
          content="Show Places"
          variant="contained"
          bgColor="#8DD3BB"
          color="black"
        />
      </Box>
    </Box>
  );
};
export default StaysForm;
