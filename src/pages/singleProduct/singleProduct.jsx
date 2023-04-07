import { Box } from "@mui/material";
import { AppHome } from "../home/container/appHome";
import { SingleProductBottom } from "./container/singleProductBottom";
import { SingleProductMain } from "./container/singleProductMain";
import { SingleProductTop } from "./container/singleProductTop";

export const SingleProduct = () => {
  return (
    <Box
      sx={{
        mt: {
          xs: "17px",
          sm: "22px",
          md: "39px",
        },
      }}
    >
      <SingleProductTop />
      <SingleProductMain />
      <SingleProductBottom />
      <Box sx={{ background: "#282B30", color: "white" }}>
        <AppHome />
      </Box>
    </Box>
  );
};
