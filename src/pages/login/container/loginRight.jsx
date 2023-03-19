import { Button, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";

import LoginBackg from "../../../assets/images/loginBackg.png";
import kiviLogin from "../../../assets/images/kiviLogin.png";

const styles = {
  paperContainer: {
    backgroundImage: `url(${LoginBackg})`,
    backgroundRepeat: "no-repeat",
    width: "50%",
    height: "945px",
  },
};

export const LoginRight = () => {
  return (
    <Box
      style={styles.paperContainer}
      sx={{
        p: {
          xs: "0 20px",
          sm: "0 20px",
          md: "0 20px",
        },
        display: {xs: "none", sm: "block"}
      }}
    >
      <Box
        sx={{
          maxWidth: "270px",
          maxHeight: "270px",
          height: "100%",
          background: "white",
          display: "flex",
          alignItems: "center",
          borderRadius: "220px 220px 220px 25px",
          position: "relative",
          top: "45%",
        }}
      >
        <Box sx={{ m: "0 auto", maxWidth: "180px" }}>
          <CardMedia
            image={kiviLogin}
            sx={{ mb: "8px", width: "50px", height: "26px" }}
          />
          <Typography
            sx={{
              mb: "16px",
              fontWeight: 700,
              fontSize: "19px",
              lineHeight: "21px",
              fontFamily: "IBM Plex Sans Arabic",
              color: "#787993",
            }}
          >
            Откройте для себя целую плошадку для продаже
          </Typography>

          <Button
            sx={{
              color: "#41D481",
              border: "2px solid #41D481",
              textTransform: "inherit",
            }}
          >
            Как это делать?
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
