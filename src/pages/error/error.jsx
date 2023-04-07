import { Box, Typography } from "@mui/material";

export const Error = () => {
  return (
    <Box
      sx={{
        mt: { xs: "10px", sm: "14px", md: "29px" },
        p: {
          xs: "10px 20px 10px",
          sm: "15px 24px 15px",
          md: "25px 24px 20px",
        },
        maxHeight: "2000px",
        height: "100%",
      }}
    >
      <Typography variant="h3" sx={{ color: "red" }}>
        Error pages
      </Typography>
    </Box>
  );
};
