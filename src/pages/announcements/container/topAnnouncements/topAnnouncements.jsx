import { CardMedia, InputBase, Slider } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

import search from "../../../../assets/images/search.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const TopAnnouncements = () => {

  return (
    <>
      <Box sx={{ mt: "79px" }}>
        <Box
          sx={{
            p: {
              xs: "10px 20px 10px",
              sm: "15px 20px 15px",
              md: "20px 24px 20px",
            },
            backgroundColor: "lightpink",
          }}
        >
          <Box
            sx={{
              mb: "12px",
              display: "flex",
              border: "1px solid rgba(151, 151, 151, 0.496575)",
              borderRadius: "6px",
            }}
          >
            <CardMedia
              image={search}
              sx={{ m: "10px", width: "23px", height: "24px" }}
            />
            <InputBase
              sx={{
                mr: 1,
                flex: 1,
                color: "#787993",
                width: "100%",
              }}
              placeholder="Введите название обявления"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Box>

          <Box
            sx={{
              m: "0 -5px",
              p: 0,
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="#"
              style={{
                margin: "4px 5px",
                padding: "2px 11px",
                textDecoration: "none",
                fontFamily: "IBM Plex Sans Arabic",
                fontWeight: 700,
                fontSize: "13px",
                lineHeight: "16px",
                backgroundColor: "#E5E3FF",
                color: "#704FFF",
                borderRadius: "3px",
              }}
            >
              Интересное
            </Link>
            <Link
              to="#"
              style={{
                margin: "4px 5px",
                padding: "2px 11px",
                textDecoration: "none",
                fontFamily: "IBM Plex Sans Arabic",
                fontWeight: 700,
                fontSize: "13px",
                lineHeight: "16px",
                backgroundColor: "#E4F6FF",
                color: "#57B4E2",
                borderRadius: "3px",
              }}
            >
              Топ
            </Link>

            <Link
              to="#"
              style={{
                margin: "4px 5px",
                padding: "2px 11px",
                textDecoration: "none",
                fontFamily: "IBM Plex Sans Arabic",
                fontWeight: 700,
                fontSize: "13px",
                lineHeight: "16px",
                backgroundColor: "#D2FFDB",
                color: "#47B95E",
                borderRadius: "3px",
                // width: "143px"
              }}
            >
              Отличные предложение
            </Link>

            <Link
              to="#"
              style={{
                margin: "4px 5px",
                padding: "2px 11px",
                textDecoration: "none",
                fontFamily: "IBM Plex Sans Arabic",
                fontWeight: 700,
                fontSize: "13px",
                lineHeight: "16px",
                backgroundColor: "#F6DAC2",
                color: "#874C1A",
                borderRadius: "3px",
              }}
            >
              Супер цена
            </Link>
            <Link
              to="https://goo.gl/maps/pQ24H7qTJLXgGMyY8"
              style={{
                margin: "4px 5px",
                padding: "2px 11px",
                textDecoration: "none",
                fontFamily: "IBM Plex Sans Arabic",
                fontWeight: 700,
                fontSize: "13px",
                lineHeight: "16px",
                backgroundColor: "#D8D8D8",
                color: "#787993",
                borderRadius: "3px",
                display: "flex",
                alignItems: "center",
              }}
            >
              г.Ташкент{" "}
              <LocationOnIcon
                style={{
                  marginLeft: "10px",
                  width: "12px",
                  height: "14px",
                  color: "#414D6A",
                }}
              />
            </Link>
            <Link
              to="https://goo.gl/maps/j3J4G3wmoFjsLprA8"
              style={{
                margin: "4px 5px",
                padding: "2px 11px",
                textDecoration: "none",
                fontFamily: "IBM Plex Sans Arabic",
                fontWeight: 700,
                fontSize: "13px",
                lineHeight: "16px",
                backgroundColor: "#D8D8D8",
                color: "#787993",
                borderRadius: "3px",
                display: "flex",
                alignItems: "center",
              }}
            >
              г.Термез{" "}
              <LocationOnIcon
                style={{
                  marginLeft: "10px",
                  width: "12px",
                  height: "14px",
                  color: "#414D6A",
                }}
              />
            </Link>
            <Link
              to="https://goo.gl/maps/U25wHB1PfFdBva529"
              style={{
                margin: "4px 5px",
                padding: "2px 11px",
                textDecoration: "none",
                fontFamily: "IBM Plex Sans Arabic",
                fontWeight: 700,
                fontSize: "13px",
                lineHeight: "16px",
                backgroundColor: "#D8D8D8",
                color: "#787993",
                borderRadius: "3px",
                display: "flex",
                alignItems: "center",
              }}
            >
              г.Самарканд{" "}
              <LocationOnIcon
                style={{
                  marginLeft: "10px",
                  width: "12px",
                  height: "14px",
                  color: "#414D6A",
                }}
              />
            </Link>
          </Box>

          <Box>
            
          </Box>
        </Box>
      </Box>
    </>
  );
};
