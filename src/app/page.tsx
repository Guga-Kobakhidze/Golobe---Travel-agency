import { Box } from "@mui/material";
import MainBg from "./components/main-bg/MainBg";
import TripComponent from "./components/Trip-component/TripComponent";
import ReviewsComponent from "./components/reviews-component/ReviewsComponent";

export default function Home() {
  return (
    <Box>
      <MainBg />
      <Box className="container">
        <TripComponent />
        <ReviewsComponent />
      </Box>
    </Box>
  );
}
