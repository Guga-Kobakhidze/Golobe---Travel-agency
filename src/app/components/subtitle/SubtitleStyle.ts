import { SxProps } from "@mui/material";

export const Flex: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export const SubtitileBox: SxProps = {
  padding: "0 55px",
  ...Flex,
  button: {
    border: "1px solid #8DD3BB",

    "&:hover": {
      border: "1px solid #8DD3BB",
    },
  },

  ".texts": {
    ...Flex,
    flexDirection: "column",
    alignItems: "start",
    gap: "10px",
  },

  "@media (max-width: 900px)": {
    padding: 0,
  },
};
