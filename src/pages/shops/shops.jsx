import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export const Shops = () => {
  return (
    <Box
      sx={{
        mt: {
          xs: "17px",
          sm: "22px",
          md: "39px",
        },
        p: {
          xs: "10px 20px 10px",
          sm: "15px 24px 15px",
          md: "25px 24px 20px",
        },
      }}
    >
      <Typography variant="h3">Shops page</Typography>
    </Box>
  );
};
