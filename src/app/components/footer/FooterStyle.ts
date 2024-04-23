import { SxProps } from "@mui/material";

export const FooterFormBox: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#112211",
  padding: "24px",
  backgroundColor: "#CDEAE1",
  width: "70%",
  borderRadius: "20px",

  ".SubscribeForm": {
    button: {
      padding: "19px",
    },

    input: {
      height: "30px",
      width: "400px",
    },
  },
};
