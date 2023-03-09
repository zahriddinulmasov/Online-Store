import { Link } from "react-router-dom";

import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";

import siteLogo from "../../../../assets/images/kivi.svg";
import appleIcon from "../../../../assets/images/appleIcon.svg";
import playMarket from "../../../../assets/images/playMarket.svg";

export const AppHome = () => {
  return (
    <>
      <Box
        sx={{
          p: {
            xs: "10px 20px 10px",
            sm: "15px 24px 15px",
            md: "25px 24px 20px",
          },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            image={siteLogo}
            alt="Site logo"
            sx={{
              m: "0 8px 0 0",
              width: { xs: "35px", sm: "42px", md: "48px" },
              display: "flex",
            }}
          />
          <Typography
            variant="h5"
            component="a"
            href="/"
            sx={{
              mr: 1,
              display: "flex",
              flexGrow: 1,
              fontFamily: "IBM Plex Sans Arabic",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              maxWidth: "165px",
              lineHeight: "14px",
              fontSize: { xs: "14px", sm: "15px" },
            }}
          >
            Продай, найди, купи все что пожелаешь…
          </Typography>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Link to="https://www.apple.com/store">
            <Box
              sx={{
                mr: "4px",
                padding: "7px 11px",
                width: { xs: "148px", md: "157px" },
                background: "#212121",
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                borderRadius: "100px",
              }}
            >
              <CardMedia
                image={appleIcon}
                sx={{
                  width: { xs: "33px", md: "40px" },
                  height: { xs: "33px", md: "40px" },
                  mr: "8px",
                }}
              />

              <Box sx={{ color: "white" }}>
                <Typography
                  sx={{
                    fontSize: { xs: "7px", md: "7.5px" },
                    fontFamily: "IBM Plex Sans Arabic",
                  }}
                >
                  Available on the
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "12px", md: "13px" },
                    fontFamily: "IBM Plex Sans Arabic",
                  }}
                >
                  Apple Store
                </Typography>
              </Box>
            </Box>
          </Link>

          <Link to="https://play.google.com/store/games">
            <Box
              sx={{
                padding: "7px 11px",
                width: { xs: "148px", md: "157px" },
                background: "#212121",
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                borderRadius: "100px",
              }}
            >
              <CardMedia
                image={playMarket}
                sx={{
                  width: { xs: "33px", md: "40px" },
                  height: { xs: "33px", md: "40px" },
                  mr: "8px",
                }}
              />

              <Box sx={{ color: "white" }}>
                <Typography
                  sx={{
                    fontSize: { xs: "7px", md: "7.5px" },
                    fontFamily: "IBM Plex Sans Arabic",
                  }}
                >
                  Android App on
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "12px", md: "13px" },
                    fontFamily: "IBM Plex Sans Arabic",
                  }}
                >
                  GOOGLE PLAY
                </Typography>
              </Box>
            </Box>
          </Link>

          <Box
            sx={{
              display: {
                xs: "flex",
                sm: "none",
                background: "#212121",
                padding: "6px 9px",
                borderRadius: "100px",
              },
            }}
          >
            <Link to="https://www.apple.com/store">
              <CardMedia
                image={appleIcon}
                sx={{
                  width: "27px",
                  height: "27px",
                  mr: "12px",
                }}
              />
            </Link>
            <Link to="https://play.google.com/store/games">
              <CardMedia
                image={playMarket}
                sx={{
                  width: "27px",
                  height: "27px",
                }}
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};
