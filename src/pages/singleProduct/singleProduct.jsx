import { Box } from "@mui/material";
import { AppHome } from "../home/container/appHome";
import { SingleProductBottom } from "./container/singleProductBottom";
import { SingleProductMain } from "./container/singleProductMain";
import { SingleProductTop } from "./container/singleProductTop";

export const SingleProduct = () => {
  return (
    <Box
      sx={{
        m: { xs: "70px 0 0", sm: "85px 0 0", md: "100px 0 0" },
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
