import { SxProps } from "@mui/material";

export const mainbackground: SxProps = {
  position: "relative",
  height: "600px",
  width: "100%",
  color: "#fff",
  textAlign: "center",

  backgroundImage: "url('assets/main-bg.svg')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",

  ".bg-overlay": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.4)",
    zIndex: 0,
  },
};
