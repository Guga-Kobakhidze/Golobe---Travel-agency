import { SxProps } from "@mui/material";

export const ReviewsCardBox: SxProps = {
  position: "relative",
  width: 378,
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  padding: "24px",
  backgroundColor: "white",
  borderRadius: "20px",
  boxShadow: "2px 4px 16px rgba(17, 21, 17, 0.1)",

  ".title": {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    letterSpacing: "1.5px",
  },

  ".paragraph": {
    marginBottom: "12px",
    opacity: 0.5,
  },

  a: {
    textDecoration: "none",
  },

  ".viewLink": {
    alignSelf: "end",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#112211",
    marginBottom: "8px",
    transition: "0.3s",

    "&:hover": {
      color: "#8DD3BB",
    },
  },

  ".Raiting .css-15befwp-MuiRating-root": {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",

    svg: {
      color: "#FFC107",
      fontSize: "24px",
    },
  },

  ".Author": {
    h5: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#112211",
      marginBottom: "4px",
    },

    p: {
      fontSize: "12px",
      color: "rgba(128, 128, 128, 0.7)",
    },

    ".locationIcon": {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      margin: "12px 0 20px",
      color: "rgba(128, 128, 128, 0.7)",
      transition: "0.3s",

      "&:hover": {
        color: "#8DD3BB",
      },
    },
  },

  "&::before": {
    content: '""',
    position: "absolute",
    top: "22px",
    left: "35px",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(141, 211, 187, 0.4)",
    borderRadius: "20px",
    zIndex: -1,
  },
};
