import { SxProps } from "@mui/material";

export const Flex: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const Navigation = (color: string): SxProps => ({
  display: "flex",
  justifyContent: "start",
  gap: 5,

  a: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: 0.5,
    textDecoration: "none",
    color: color || "#fff",
    fontSize: 14,

    "&::before": {
      content: '""',
      position: "absolute",
      bottom: "-22px",
      left: 0,
      width: 0,
      height: 3,
      backgroundColor: "#8DD3BB",
      transition: "width 0.3s ease-in-out",
    },

    "&:hover::before": {
      width: "100%",
    },
  },

  ".active::before": {
    content: '""',
    position: "absolute",
    bottom: "-22px",
    left: 0,
    width: "100%",
    height: 3,
    backgroundColor: "#8DD3BB",
  },
});

export const HeaderMain: SxProps = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  padding: "36px 32px",
  zIndex: 999,
  transition: "0.3s",
};

export const HeaderContent: SxProps = {
  ...Flex,
  justifyContent: "space-between",
};

export const LogoStyle: SxProps = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
