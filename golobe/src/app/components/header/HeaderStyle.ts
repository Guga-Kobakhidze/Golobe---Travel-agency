import { SxProps } from "@mui/material";

export const Flex: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const Navigation: SxProps = {
  ...Flex,
  justifyContent: "start",
  gap: 5,
  a: {
    position: "relative",
    ...Flex,
    gap: 0.5,
    textDecoration: "none",
    color: "#fff",
    fontsize: 14,

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
};

export const HeaderMain: SxProps = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  padding: "36px 32px",
  zIndex: 999,
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
