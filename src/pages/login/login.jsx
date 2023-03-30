import { Box } from "@mui/material";
import { LoginLeft } from "./container/loginLeft";
import { LoginRight } from "./container/loginRight";

export const Login = () => {
  return (
    <Box
      sx={{
        maxWidth: "1188px",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: { xs: "column-reverse", sm: "row" },
        alignItems: "center",
      }}
    >
      <LoginLeft />
      <LoginRight />
    </Box>
  );
};
