import { SxProps } from "@mui/material";

export const Flex: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const TripCardsListBox: SxProps = {
  ...Flex,
  flexWrap: "wrap",
  gap: "32px",
  width: "100%",
  marginBottom: 10,
};

export const TripCarBox: SxProps = {
  padding: "16px",
  backgroundColor: "white",
  maxWidth: 390,
  width: "100%",
  borderRadius: "12px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "0.3s",
  cursor: "pointer",

  "&:hover": {
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
  },

  ...Flex,
  justifyContent: "start",
  gap: "16px",

  ".card-content": {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  a: {
    padding: "0 8px",
    color: "#112211",
    fontSize: "16px",
    fontweight: "bold",
    textDecoration: "none",
    transition: "0.3s",

    "&:hover": {
      color: "#8DD3BB",
    },
  },

  ".n-p": {
    paddingLeft: "0",
  },

  "@media (max-width: 900px)": {
    maxWidth: "100%",
  },
};

export const LinkCardComponentBox: SxProps = {
  ...Flex,
  gap: 2.5,
  padding: "0 50px",

  "@media (max-width: 900px)": {
    flexDirection: "column",
    padding: 0,
  },
};

export const LinkCardBox = (image: string): SxProps => ({
  position: "relative",
  backgroundImage: `url("${image}")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "560px",
  borderRadius: "20px",
  overflow: "hidden",
  color: "white",

  ...Flex,
  flexDirection: "column",
  justifyContent: "end",
  textAlign: "center",
  paddingBottom: "24px",

  ".bg-overlay": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.3)",
    zIndex: 0,
  },
});
