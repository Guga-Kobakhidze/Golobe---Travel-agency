import { SxProps } from "@mui/material";

export const SearchContent: SxProps = {
  //   height: 280,
  width: "85%",
  position: "absolute",
  top: "105%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 10,

  bgcolor: "white",
  boxShadow: "0px 4px 8px rgba(141, 211, 187, 0.3)",
  borderRadius: "16px",
  padding: "32px",

  "@media (max-width: 1024px)": {
    width: "95%",
  },
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

export const ButtonStyle: SxProps = {
  backgroundColor: "transparent",
  color: "black",
};
