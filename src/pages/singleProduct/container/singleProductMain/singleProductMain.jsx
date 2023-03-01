import {
  Box,
  Button,
  CardMedia,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { experimentalStyled as styled } from "@mui/material/styles";

export const SingleProductMain = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const [number1, setNumber1] = useState("** **");
  const [number2, setNumber2] = useState("** **");
  const params = useParams();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_URL + `/${params.homeId}`)
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  function changeHiddenNumber1() {
    if (number1 !== "66 66") {
      setNumber1("66 66");
    } else {
      setNumber1("** **");
    }
  }

  function changeHiddenNumber2() {
    if (number2 !== "88 88") {
      setNumber2("88 88");
    } else {
      setNumber2("** **");
    }
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  }));

  return (
    <Box
      sx={{
        p: {
          xs: "10px 20px 10px",
          sm: "15px 24px 15px",
          md: "25px 24px 20px",
        },
        background: "lightpink",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "IBM Plex Sans Arabic",
          fontWeight: 500,
          fontSize: "34px",
          lineHeight: "41px",
          color: "#414D6A",
        }}
      >
        {data.title}
      </Typography>

      <Box sx={{ display: "flex" }}>
        <CardMedia
          image={data.image}
          component="img"
          alt={data.title}
          sx={{ width: 450, height: 500, mr: "16px" }}
        />

        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              mb: "16px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "IBM Plex Sans Arabic",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "17px",
                color: "#414D6A",
              }}
            >
              Актикул: {"4418970"}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontFamily: "IBM Plex Sans Arabic",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "17px",
                color: "#414D6A",
              }}
            >
              Добавлено: {"28.04.17"}
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h4"
              sx={{
                mb: "4px",
                fontFamily: "IBM Plex Sans Arabic",
                fontWeight: 500,
                fontSize: "40px",
                lineHeight: "49px",
                color: "#444444",
              }}
            >
              {data.price} $
            </Typography>

            <Link
              href="https://goo.gl/maps/vN6GnnjMcmPs57qt5"
              sx={{
                fontFamily: "IBM Plex Sans Arabic",
                fontSize: "14px",
                lineHeight: "16px",
                color: "#4E72CA",
              }}
            >
              Ташкент, Ташкентская область, Юнусабадский район
            </Link>

            <Box m="16px 0">
              <Box
                sx={{
                  mb: "8px",
                  maxWidth: "334px",
                  pl: "20px",
                  fontFamily: "IBM Plex Sans Arabic",
                  fontSize: "16px",
                  lineHeight: "20px",
                  fontWeight: 700,
                  color: "#000000",
                  display: "flex",
                  alignItems: "center",
                  background: "#65E99F",
                  borderRadius: "18.5px",
                }}
              >
                +998 91 166 {number1}{" "}
                <Button
                  onClick={changeHiddenNumber1}
                  sx={{
                    ml: "12px",
                    p: "9px 20px",
                    fontFamily: "IBM Plex Sans Arabic",
                    fontSize: "15px",
                    lineHeight: "18px",
                    color: "#000000",
                    background: "#41D481",
                    borderRadius: "18.5px",
                    textTransform: "capitalize",
                    ":hover": { background: "#41D481", opacity: 0.7 },
                  }}
                >
                  Покозать польностю
                </Button>
              </Box>

              <Box
                sx={{
                  mb: "8px",
                  maxWidth: "334px",
                  pl: "20px",
                  fontFamily: "IBM Plex Sans Arabic",
                  fontSize: "16px",
                  lineHeight: "20px",
                  fontWeight: 700,
                  color: "#000000",
                  display: "flex",
                  alignItems: "center",
                  background: "#65E99F",
                  borderRadius: "18.5px",
                }}
              >
                +998 91 166 {number2}{" "}
                <Button
                  onClick={changeHiddenNumber2}
                  sx={{
                    ml: "12px",
                    p: "9px 20px",
                    fontFamily: "IBM Plex Sans Arabic",
                    fontSize: "15px",
                    lineHeight: "18px",
                    color: "#000000",
                    background: "#41D481",
                    borderRadius: "18.5px",
                    textTransform: "capitalize",
                    ":hover": { background: "#41D481", opacity: 0.7 },
                  }}
                >
                  Покозать польностю
                </Button>
              </Box>
            </Box>

            <Box sx={{ display: "flex", mb: "20px" }}>
              <Typography
                sx={{
                  mr: "4px",
                  fontFamily: "IBM Plex Sans Arabic",
                  fontSize: "14px",
                  lineHeight: "16px",
                  color: "#000000",
                }}
              >
                Автор обьявлении:
              </Typography>
              <Link
                href="#"
                sx={{
                  fontFamily: "IBM Plex Sans Arabic",
                  fontWeight: 700,
                  fontSize: "14px",
                  lineHeight: "16px",
                  color: "#2AAE63",
                }}
              >
                Зухриддин Темиров
              </Link>
            </Box>

            <Box mb="24px">
              <Button
                sx={{
                  mr: "10px",
                  p: "14px 28px",
                  fontFamily: "IBM Plex Sans Arabic",
                  fontWeight: 700,
                  fontSize: "14px",
                  lineHeight: "16px",
                  color: "#FFFFFF",
                  textTransform: "capitalize",
                  backgroundColor: "#304FFF",
                  borderRadius: "23.5px",
                  ":hover": { background: "#4E72CA" },
                }}
              >
                Написать автору
              </Button>

              <Button
                sx={{
                  p: "14px 28px",
                  fontFamily: "IBM Plex Sans Arabic",
                  fontWeight: 700,
                  fontSize: "14px",
                  lineHeight: "16px",
                  color: "#FFFFFF",
                  textTransform: "capitalize",
                  backgroundColor: "#304FFF",
                  borderRadius: "23.5px",
                  ":hover": { background: "#4E72CA" },
                }}
              >
                Предложить свою цену
              </Button>
            </Box>

            <Grid display="flex">
              <Item sx={{ width: "100%" }}>
                <Typography>Состояние:</Typography>
              </Item>
              <Item sx={{ width: "100%" }}>
                <Typography>рейтинг продукта:</Typography>
              </Item>
              <Item sx={{ width: "100%" }}>
                <Typography>Состояние:</Typography>
              </Item>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
