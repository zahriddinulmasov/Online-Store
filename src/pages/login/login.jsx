import { Box } from "@mui/material";
import { LoginLeft } from "./container/loginLeft";
import { LoginRight } from "./container/loginRight";


export const Login = () => {
  return (
    <Box
      sx={{
        mt: { xs: "57px", md: "79px" },
        maxWidth: "1188px",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: {xs: "column-reverse", sm: "row"},
        alignItems: "center",
      }}
    >
      <LoginLeft />
      <LoginRight />
    </Box>
  );
};
