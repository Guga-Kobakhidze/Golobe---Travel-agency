import { SxProps } from "@mui/material";

export const FooterFormBox: SxProps = {
  position: "absolute",
  top: "-10px",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 10,

  width: "85%",
  display: "flex",
  justifyContent: "space-between",
  color: "#112211",
  padding: "24px",
  backgroundColor: "#CDEAE1",
  borderRadius: "20px",

  ".SubscribeForm": {
    button: {
      padding: "19px",
    },

    input: {
      height: "30px",
      width: "450px",
    },
  },
};

export const FooterNavStyle: SxProps = {
  bgcolor: "#8DD3BB",
  padding: "218px 90px 64px",
};
