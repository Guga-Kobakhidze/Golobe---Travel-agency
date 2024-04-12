import { SxProps } from "@mui/material";

export const SearchContent: SxProps = {
  //   height: 280,
  width: "70%",
  position: "absolute",
  top: "105%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 10,

  bgcolor: "white",
  boxShadow: "5px 20px 50px gray",
  borderRadius: "16px",
  padding: "32px",
};

export const SearchFormStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "24px",
  marginTop: "60px",
  marginBottom: "32px",
};

export const FormStyle: SxProps = {
  position: "relative",
  width: 324,
  height: 56,

  // span: {
  //   position: "absolute",
  //   right: "16px",
  //   top: "18px",
  // },

  ".MuiSelect-select": {
    textAlign: "start",
  },

  ".inputLab": {
    backgroundColor: "white",
  },

  label: {
    backgroundColor: "white",
  },
};

export const Buttons: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  gap: "10px",
};

export const PromoCodeStyle: SxProps = {
  position: "absolute",
  bottom: 20,
  right: 360,
};
