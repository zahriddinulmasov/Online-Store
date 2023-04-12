import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  Box,
  Button,
  CardMedia,
  Grid,
  Link,
  Paper,
  Skeleton,
  Tooltip,
  Typography,
} from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { mainInformationActions } from "../../../../store/commonData";

export const SingleProductMain = () => {
  const dispatch = useDispatch();
  const params = useParams().homeId;
  const [data, setData] = useState([]);
  const [number1, setNumber1] = useState("** **");
  const [number2, setNumber2] = useState("** **");

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_URL + `/${params}`)
      .then((data) => {
        setData(data.data);
        dispatch(mainInformationActions.setSingleProductCatigory(data.data));
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, [params]);

  const infoSkeleton = data.length !== 0;

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
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      {/* Skeleton */}

      {infoSkeleton ? (
        <Box
          sx={{
            p: {
              xs: "10px 20px 10px",
              sm: "15px 20px 15px",
              md: "25px 24px 20px",
            },
            background: "#FFFFFF",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: "12px",
              fontFamily: "IBM Plex Sans Arabic",
              fontWeight: 500,
              fontSize: { xs: "22px", sm: "28px", md: "32px", lg: "34px" },
              lineHeight: { xs: "25px", sm: "32px", md: "37px", lg: "41px" },
              color: "#414D6A",
            }}
          >
            {data.title}
          </Typography>

          <Box
            sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
          >
            <CardMedia
              image={data.image}
              component="img"
              alt={data.title}
              sx={{
                width: { xs: 250, md: 350, lg: 450 },
                height: { xs: 320, md: 448, lg: 576 },
                m: { xs: "0 auto 16px", sm: "0 8px 0 0 ", md: "0 24px 0 0" },
              }}
            />

            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  mb: { xs: "12px", sm: "16px" },
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "IBM Plex Sans Arabic",
                    fontWeight: 500,
                    fontSize: { xs: "14px", sm: "15px" },
                    lineHeight: { xs: "16px", sm: "17px" },
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
                    fontSize: { xs: "14px", sm: "15px" },
                    lineHeight: { xs: "16px", sm: "17px" },
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
                    mb: "6px",
                    fontFamily: "IBM Plex Sans Arabic",
                    fontWeight: 500,
                    fontSize: {
                      xs: "30px",
                      sm: "34px",
                      ms: "38px",
                      lg: "40px",
                    },
                    lineHeight: {
                      xs: "36px",
                      sm: "40px",
                      ms: "46px",
                      lg: "49px",
                    },
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
                  Ташкент, Ташкентская об, Юнусабадский р.
                </Link>
              </Box>

              <Box m="16px 0">
                <Box
                  sx={{
                    mb: "8px",
                    maxWidth: "357px",
                    pl: "20px",
                    fontFamily: "IBM Plex Sans Arabic",
                    fontSize: { xs: "15px", md: "16px" },
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
                      display: { xs: "none", md: "flex" },

                      ":hover": { background: "#41D481", opacity: 0.7 },
                    }}
                  >
                    Покозать польностю
                  </Button>
                  <Tooltip
                    title="Покозать польностю"
                    placement="top-end"
                    sx={{}}
                  >
                    <Button
                      onClick={changeHiddenNumber1}
                      sx={{
                        ml: "auto",
                        borderRadius: "18.5px",
                        display: { xs: "flex", md: "none" },
                        background: "#41D481",
                        ":hover": { background: "#41D481", opacity: 0.7 },
                      }}
                    >
                      {number1 === "** **" ? (
                        <KeyboardArrowRightIcon />
                      ) : (
                        <KeyboardArrowLeftIcon />
                      )}
                    </Button>
                  </Tooltip>
                </Box>

                <Box
                  sx={{
                    mb: "8px",
                    maxWidth: "357px",
                    pl: "20px",
                    fontFamily: "IBM Plex Sans Arabic",
                    fontSize: { xs: "15px", md: "16px" },
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
                      display: { xs: "none", md: "flex" },
                      ":hover": { background: "#41D481", opacity: 0.7 },
                    }}
                  >
                    Покозать польностю
                  </Button>
                  <Tooltip
                    title="Покозать польностю"
                    placement="top-end"
                    sx={{}}
                  >
                    <Button
                      onClick={changeHiddenNumber2}
                      sx={{
                        ml: "auto",
                        borderRadius: "18.5px",
                        display: { xs: "flex", md: "none" },
                        background: "#41D481",
                        ":hover": { background: "#41D481", opacity: 0.7 },
                      }}
                    >
                      {number2 === "** **" ? (
                        <KeyboardArrowRightIcon />
                      ) : (
                        <KeyboardArrowLeftIcon />
                      )}
                    </Button>
                  </Tooltip>
                </Box>
              </Box>

              <Box sx={{ display: "flex", mb: { xs: "16px", sm: "20px" } }}>
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
                    fontSize: "15px",
                    lineHeight: "16px",
                    color: "#2AAE63",
                  }}
                >
                  Зухриддин Темиров
                </Link>
              </Box>

              <Box sx={{ mb: { xs: "16px", sm: "20px", md: "32px" } }}>
                <Button
                  sx={{
                    mr: { xs: "6px", sm: "8px", md: "10px" },
                    p: { xs: "7px 12px", md: "12px 28px" },
                    fontFamily: "IBM Plex Sans Arabic",
                    fontWeight: { xs: 600, md: 700 },
                    fontSize: {
                      xs: "11.3px",
                      sm: "12px",
                      md: "13px",
                      lg: "14px",
                    },
                    lineHeight: "16px",
                    color: "#FFFFFF",
                    textTransform: "inherit",
                    backgroundColor: "#304FFF",
                    borderRadius: "23.5px",
                    ":hover": { background: "#4E72CA" },
                  }}
                >
                  Написать автору
                </Button>

                <Button
                  sx={{
                    p: { xs: "7px 12px", md: "12px 28px" },
                    fontFamily: "IBM Plex Sans Arabic",
                    fontWeight: { xs: 600, md: 700 },
                    fontSize: {
                      xs: "11.3px",
                      sm: "12px",
                      md: "13px",
                      lg: "14px",
                    },
                    lineHeight: "16px",
                    color: "#FFFFFF",
                    textTransform: "inherit",
                    backgroundColor: "#304FFF",
                    borderRadius: "23.5px",
                    ":hover": { background: "#4E72CA" },
                  }}
                >
                  Предложить свою цену
                </Button>
              </Box>

              <Grid sx={{ display: "flex" }}>
                <Item
                  sx={{
                    p: { xs: "8px", sm: "12px" },
                    width: "100%",
                    borderRadius: 0,
                    boxShadow: "none",
                    border: "1px solid rgba(151, 151, 151, 0.250226)",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "IBM Plex Sans Arabic",
                      fontSize: { xs: "15px", sm: "16px" },
                    }}
                  >
                    Состояние:
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mt: { xs: "4px", sm: "6px", md: "8px" },
                      fontFamily: "IBM Plex Sans Arabic",
                      // eslint-disable-next-line
                      fontFamily: 600,
                      fontSize: { xs: "17px", sm: "18px" },
                      lineHeight: "22px",
                      color: "#444444",
                    }}
                  >
                    Новое
                  </Typography>
                </Item>
                <Item
                  sx={{
                    p: { xs: "8px", sm: "12px" },
                    width: "100%",
                    borderRadius: 0,
                    boxShadow: "none",
                    borderTop: "1px solid rgba(151, 151, 151, 0.250226)",
                    borderBottom: "1px solid rgba(151, 151, 151, 0.250226)",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "IBM Plex Sans Arabic",
                      fontSize: { xs: "15px", sm: "16px" },
                    }}
                  >
                    Рейтинг:
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mt: { xs: "4px", sm: "6px", md: "8px" },
                      fontFamily: "IBM Plex Sans Arabic",
                      // eslint-disable-next-line
                      fontFamily: 600,
                      fontSize: { xs: "17px", sm: "18px" },
                      lineHeight: "22px",
                      color: "#444444",
                    }}
                  >
                    {data.rating?.rate}
                  </Typography>
                </Item>
                <Item
                  sx={{
                    p: { xs: "8px", sm: "12px" },
                    width: "100%",
                    borderRadius: 0,
                    boxShadow: "none",
                    border: "1px solid rgba(151, 151, 151, 0.250226)",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "IBM Plex Sans Arabic",
                      fontSize: { xs: "15px", sm: "16px" },
                    }}
                  >
                    Распроданы:
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mt: { xs: "4px", sm: "6px", md: "8px" },
                      fontFamily: "IBM Plex Sans Arabic",
                      // eslint-disable-next-line
                      fontFamily: 600,
                      fontSize: { xs: "17px", sm: "18px" },
                      lineHeight: "22px",
                      color: "#444444",
                    }}
                  >
                    {data.rating?.count}
                  </Typography>
                </Item>
              </Grid>

              <Typography
                sx={{
                  m: { xs: "12px 0", md: "30px 0 16px" },
                  minHeight: "100px",
                  fontFamily: "IBM Plex Sans Arabic",
                  fontSize: { xs: "15px", sm: "16px", md: "17px" },
                  lineHeight: { xs: "18px", sm: "23px", md: "25px" },
                  color: "#414D6A",
                }}
              >
                {`${data.description}`}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "space-between" },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "IBM Plex Sans Arabic",
                    fontWeight: 500,
                    fontSize: { xs: "13px", sm: "14px" },
                    lineHeight: "17px",
                    color: "#000000",
                  }}
                >
                  Посмотры: {"10958"}
                </Typography>
                <Button
                  sx={{
                    textTransform: "capitalize",
                    fontFamily: "IBM Plex Sans Arabic",
                    fontWeight: 500,
                    fontSize: "15px",
                    lineHeight: "17px",
                    color: "red",
                  }}
                >
                  Пожаловаться
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            p: {
              xs: "10px 20px 10px",
              sm: "15px 20px 15px",
              md: "25px 24px 20px",
            },
            background: "#FFFFFF",
          }}
        >
          <Box sx={{ mb: "12px" }}>
            <Skeleton
              sx={{
                height: { xs: "25px", sm: "32px", md: "37px", lg: "41px" },
              }}
            />
            <Skeleton
              variant="h2"
              sx={{
                height: { xs: "25px", sm: "32px", md: "37px", lg: "41px" },
                width: "30%",
              }}
            />
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
          >
            <Skeleton
              variant="rectangular"
              sx={{
                maxWidth: { xs: "250px", md: "350px", lg: "450px" },
                width: "100%",
                height: { xs: "320px", md: "448px", lg: "576px" },
                m: { xs: "0 auto 16px", sm: "0 8px 0 0 ", md: "0 24px 0 0" },
              }}
            />

            <Box sx={{ width: "100%" }}>
              <Skeleton
                variant="rectangular"
                sx={{
                  height: {
                    xs: "16px",
                    sm: "17px",
                    mb: { xs: "12px", sm: "16px" },
                  },
                }}
              />

              <Box>
                <Skeleton
                  variant="rectangular"
                  sx={{
                    m: "10px 0 6px",
                    height: {
                      xs: "36px",
                      sm: "40px",
                      ms: "46px",
                      lg: "49px",
                    },
                    width: "20%",
                  }}
                />

                <Skeleton
                  variant="rectangular"
                  sx={{
                    width: "70%",
                    height: {
                      xs: "16px",
                      sm: "17px",
                      mb: { xs: "12px", sm: "16px" },
                    },
                  }}
                />
              </Box>

              <Box m="16px 0">
                <Skeleton
                  variant="rectangular"
                  sx={{
                    m: "10px 0 6px",
                    height: {
                      xs: "22px",
                      sm: "26px",
                      ms: "32px",
                      lg: "36px",
                    },
                    width: "85%",
                  }}
                />{" "}
                <Skeleton
                  variant="rectangular"
                  sx={{
                    m: "10px 0 6px",
                    height: {
                      xs: "22px",
                      sm: "26px",
                      ms: "32px",
                      lg: "36px",
                    },
                    width: "85%",
                  }}
                />
              </Box>

              <Skeleton
                variant="rectangular"
                sx={{
                  mb: { xs: "16px", sm: "20px" },
                  width: "60%",
                  height: {
                    xs: "16px",
                    sm: "17px",
                    mb: { xs: "12px", sm: "16px" },
                  },
                }}
              />

              <Skeleton
                variant="rectangular"
                sx={{
                  mb: { xs: "16px", sm: "20px", md: "25px" },
                  height: {
                    xs: "22px",
                    sm: "26px",
                    ms: "32px",
                    lg: "36px",
                  },
                  width: "85%",
                }}
              />

              <Skeleton
                variant="rectangular"
                sx={{
                  mb: { xs: "16px", sm: "20px", md: "25px" },
                  height: {
                    xs: "80px",
                    sm: "90px",
                    ms: "100px",
                    lg: "110px",
                  },
                  width: "100%",
                }}
              />

              <Skeleton
                variant="rectangular"
                sx={{
                  m: { xs: "12px 0", md: "25px 0 12px" },
                  height: { xs: "70px", sm: "80px", md: "90px" },
                }}
              />
              <Skeleton
                sx={{
                  height: { xs: "20px", sm: "22px", md: "27px", lg: "31px" },
                }}
              />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
