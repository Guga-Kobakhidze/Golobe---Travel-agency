import { Box } from "@mui/material";
import MainBg from "./components/main-bg/MainBg";
import TripComponent from "./components/Trip-component/TripComponent";

export default function Home() {
  return (
    <Box>
      <MainBg />
      <TripComponent />
    </Box>
  );
}
