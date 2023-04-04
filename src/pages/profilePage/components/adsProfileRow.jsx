import {
  Box,
  Button,
  CardMedia,
  Divider,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";

import NorthIcon from "@mui/icons-material/North";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import adsIcon from "../../../assets/images/adsIcon.png";

const sellProfileContent = {
  p: { xs: "8px", sm: "12px", lg: "16px" },
  fontFamily: "IBM Plex Sans Arabic",
  fontWeight: 500,
  fontSize: { xs: "12px", md: "14px", lg: "16px" },
  lineHeight: { xs: "16px", md: "18px", lg: "20px" },
};

export const AdsProfileRow = () => {
  return (
    <>
      <TableBody >
        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 }, borderTop: "2px solid rgba(0, 0, 0, 0.1)" }}>
          <TableCell
            component="th"
            align="inherit"
            sx={{ p: { xs: "8px", sm: "12px", md: "16px" } }}
          >
            <CardMedia
              image={adsIcon}
              sx={{
                width: { xs: "35px", sm: "42px", md: "49px" },
                height: { xs: "35px", sm: "42px", md: "49px" },
              }}
            />
          </TableCell>
          <TableCell align="inherit" sx={sellProfileContent}>
            Срочно нужен программист yii2
          </TableCell>
          <TableCell align="right" sx={sellProfileContent}>
            {"200"} $ <Divider sx={{ border: "none" }} /> {"600"} $
          </TableCell>
          <TableCell align="right" sx={sellProfileContent}>
            # {"345002"} <Divider sx={{ border: "none" }} /> C: 28 июнь{" "}
            <Divider sx={{ border: "none" }} /> По: 28 июнь{" "}
          </TableCell>

          <TableCell
            align="right"
            sx={{
              display: "flex",
              alignItems: "center",
              p: { xs: "8px", sm: "12px", lg: "16px" },
            }}
          >
            <Tooltip title="Ещё ..." arrow>
              <Box
                sx={{
                  p: 0,
                  display: "flex",
                  borderRadius: "23px",
                  boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.196643)",

                  "&:hover": { opacity: 0.5 },
                }}
              >
                <MoreHorizIcon
                  sx={{
                    p: "10px",
                    borderRadius: "50%",
                    width: { xs: "20px", sm: "24px" },
                    height: { xs: "20px", sm: "24px" },
                  }}
                />
              </Box>
            </Tooltip>

            <Box>
              <Tooltip title="Рекламировать" arrow>
                <Box
                  sx={{
                    mr: "8px",
                    p: 0,
                    display: { xs: "flex", sm: "none" },
                    borderRadius: "23px",

                    "&:hover": { opacity: 0.8 },
                  }}
                >
                  <NorthIcon
                    fontSize="small"
                    sx={{
                      p: "10px",
                      borderRadius: "50%",
                      background: "#304FFF",
                    }}
                  />
                </Box>
              </Tooltip>

              <Button
                sx={{
                  m: "7px 8px 7.5px 0",
                  p: 0,
                  display: { xs: "none", sm: "flex" },
                  alignItems: "center",
                  borderRadius: "23px 5px 5px 23px",
                  border: "1px solid #304FFF",
                  textTransform: "inherit",
                  color: "#0A090B",
                }}
              >
                <NorthIcon
                  sx={{
                    p: "10px",
                    borderRadius: "50%",
                    background: "#304FFF",
                    color: "white",
                  }}
                />

                <Typography
                  sx={{
                    p: " 0 13px 0 8px",
                    fontWeight: 500,
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "14px",
                      lg: "16px",
                    },
                    lineHeight: {
                      xs: "14px",
                      sm: "16px",
                      md: "18px",
                      lg: "20px",
                    },
                  }}
                >
                  Рекламировать
                </Typography>
              </Button>
            </Box>

            <Box>
              <Tooltip title="Поднять" arrow>
                <Box
                  sx={{
                    mr: "8px",
                    p: 0,
                    display: { xs: "flex", sm: "none" },
                    borderRadius: "23px",
                    "&:hover": { opacity: 0.8 },
                  }}
                >
                  <NorthIcon
                    fontSize="small"
                    sx={{
                      p: "10px",
                      borderRadius: "50%",
                      background: "#41D481",
                    }}
                  />
                </Box>
              </Tooltip>

              <Button
                sx={{
                  m: " 7px 8px 7.5px auto",
                  p: 0,
                  display: { xs: "none", sm: "flex" },
                  alignItems: "center",
                  borderRadius: "23px 5px 5px 23px",
                  border: "1px solid #41D481",
                  textTransform: "inherit",
                  color: "#0A090B",
                }}
              >
                <NorthIcon
                  sx={{
                    p: "10px",
                    borderRadius: "50%",
                    background: "#41D481",
                    color: "white",
                  }}
                />

                <Typography
                  sx={{
                    ml: "-27px",
                    p: " 0 13px 0 35px",
                    fontWeight: 500,
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "14px",
                      lg: "16px",
                    },
                    lineHeight: {
                      xs: "14px",
                      sm: "16px",
                      md: "18px",
                      lg: "20px",
                    },
                  }}
                >
                  Поднять
                </Typography>
              </Button>
            </Box>
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  );
};
