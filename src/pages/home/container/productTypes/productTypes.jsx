import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { CardMedia, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import Apple from "../../../../assets/images/apple.png";
import Bag from "../../../../assets/images/bag.png";
import Kreslo from "../../../../assets/images/kreslo.png";

export const ProductTypes = () => {
  return (
    <>
      <Box sx={{ background: "rgba(182, 202, 251, 0.159986)", padding: "30px 10px" }}>
        <Swiper
          watchSlidesProgress={true}
          className="mySwiper"
          breakpoints={{
            380: {
              slidesPerView: `${1.2}`,
            },
            520: {
              slidesPerView: `${1.7}`,
            },
            600: {
              slidesPerView: `${2}`,
            },
            750: {
              slidesPerView: `${2.5}`,
            },
            1000: {
              slidesPerView: `${2.8}`,
            },
            1130: {
              slidesPerView: `${3.2}`,
            },
          }}
        >
          <SwiperSlide>
            <Box
              sx={{
                m: "0 10px",
                p: {
                  xs: "15px 0 15px 20px",
                  sm: "20px 0 20px 25px",
                  md: "25px 0 25px 30px",
                },
                maxWidth: "350px",
                minHeight: "138px",
                background: "linear-gradient(130deg, #B4E2E1 60%, #FF9E83 60%)",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    maxWidth: { xs: "160px", sm: "150px", md: "180px" },
                    fontFamily: "IBM Plex Sans Arabic",
                    fontSize: {
                      xs: "19px",
                      sm: "20px",
                      md: "22px",
                      lg: "23px",
                    },
                    lineHeight: {
                      xs: "21px",
                      sm: "23px",
                      md: "25px",
                      lg: "26px",
                    },
                    fontWeight: 600,
                    color: "#4A4A4A",
                    textAlign: "left",
                    textTransform: "none",
                  }}
                >
                  Техника Apple по доступным ценам
                </Typography>
                <Link
                  href="/announcements/1/single-product-type"
                  sx={{
                    mt: "34%",
                    fontFamily: "IBM Plex Sans Arabic",
                    fontSize: {
                      xs: "12px",
                      sm: "13px",
                      md: "14px",
                      lg: "15px",
                    },
                    lineHeight: {
                      xs: "15px",
                      sm: "16px",
                      md: "17px",
                      lg: "18px",
                    },
                    fontWeight: 500,
                    color: "#4A4A4A",
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    textAlign: "left",
                    textTransform: "none",
                  }}
                >
                  987 обьявлениий{" "}
                  <ChevronRightIcon sx={{ ml: { sx: 0, sm: "4px" } }} />
                </Link>
              </Box>

              <CardMedia
                image={Apple}
                sx={{
                  margin: {
                    xs: "-15px -45px -30px -40px",
                    sm: "-20px -40px -30px -70px",
                    md: "0 -50px -30px -90px",
                  },
                  pt: { xs: "13px", md: "29px" },
                  pl: { xs: 0, md: "20px" },
                  width: { xs: "220px", md: "240px" },
                  height: { xs: "120px", md: "135px" },
                }}
              />
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              sx={{
                m: "0 10px",
                p: {
                  xs: "15px 0 15px 20px",
                  sm: "20px 0 20px 25px",
                  md: "25px 0 25px 30px",
                },
                maxWidth: "350px",
                minHeight: "138px",
                background: "linear-gradient(130deg, #F6DAC2 60%, #B6CAFB 60%)",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    maxWidth: { xs: "150px", sm: "150px", md: "180px" },
                    fontFamily: "IBM Plex Sans Arabic",
                    fontSize: {
                      xs: "19px",
                      sm: "20px",
                      md: "22px",
                      lg: "23px",
                    },
                    lineHeight: {
                      xs: "21px",
                      sm: "23px",
                      md: "25px",
                      lg: "26px",
                    },
                    fontWeight: 600,
                    color: "#4A4A4A",
                    textAlign: "left",
                    textTransform: "none",
                  }}
                >
                  Брендовые товары за копейки
                </Typography>
                <Link
                  href="/announcements/2/single-product-type"
                  sx={{
                    mt: "34%",
                    fontFamily: "IBM Plex Sans Arabic",
                    fontSize: {
                      xs: "12px",
                      sm: "13px",
                      md: "14px",
                      lg: "15px",
                    },
                    lineHeight: {
                      xs: "15px",
                      sm: "16px",
                      md: "17px",
                      lg: "18px",
                    },
                    fontWeight: 500,
                    color: "#4A4A4A",
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    textAlign: "left",
                    textTransform: "none",
                  }}
                >
                  987 обьявлениий{" "}
                  <ChevronRightIcon sx={{ ml: { sx: 0, sm: "4px" } }} />
                </Link>
              </Box>

              <CardMedia
                image={Bag}
                sx={{
                  margin: {
                    xs: "-48px 0 -30px -40px",
                    sm: "-45px -10px -30px -25px",
                    md: "-45px -10px -30px -25px",
                  },
                  pt: { xs: "83px", sm: "100px", md: "125px" },
                  pl: { xs: "20px", sm: "30px", md: "52px" },
                  width: { xs: "120px", md: "120px" },
                  height: { xs: "70px", md: "70px" },
                  zIndex: 8,
                }}
              />
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              sx={{
                m: "0 10px",
                p: {
                  xs: "15px 0 15px 20px",
                  sm: "20px 0 20px 25px",
                  md: "25px 0 25px 30px",
                },
                maxWidth: "350px",
                minHeight: "138px",
                background: "linear-gradient(130deg, #F7E233 60%, #05F3B3 60%)",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    maxWidth: { xs: "150px", sm: "150px", md: "180px" },
                    fontFamily: "IBM Plex Sans Arabic",
                    fontSize: {
                      xs: "19px",
                      sm: "20px",
                      md: "22px",
                      lg: "23px",
                    },
                    lineHeight: {
                      xs: "21px",
                      sm: "23px",
                      md: "25px",
                      lg: "26px",
                    },
                    fontWeight: 600,
                    color: "#4A4A4A",
                    textAlign: "left",
                    textTransform: "none",
                  }}
                >
                  Все товары для офиса в одном месте
                </Typography>
                <Link
                  href="/announcements/3/single-product-type"
                  sx={{
                    mt: "34%",
                    fontFamily: "IBM Plex Sans Arabic",
                    fontSize: {
                      xs: "12px",
                      sm: "13px",
                      md: "14px",
                      lg: "15px",
                    },
                    lineHeight: {
                      xs: "15px",
                      sm: "16px",
                      md: "17px",
                      lg: "18px",
                    },
                    fontWeight: 500,
                    color: "#4A4A4A",
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    textAlign: "left",
                    textTransform: "none",
                  }}
                >
                  987 обьявлениий{" "}
                  <ChevronRightIcon sx={{ ml: { sx: 0, sm: "4px" } }} />
                </Link>
              </Box>

              <CardMedia
                image={Kreslo}
                sx={{
                  margin: {
                    xs: "-6px 0 -30px -20px",
                    sm: "0 -10px -30px -25px",
                    md: "-15px -10px -50px -25px",
                  },
                  pt: { xs: "103px", sm: "100px", md: "140px" },
                  pl: { xs: "40px", sm: "30px", md: "52px" },
                  width: { xs: "110px", md: "120px" },
                  height: { xs: "70px", md: "70px" },
                  zIndex: 8,
                }}
              />
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              sx={{
                m: "0 10px",
                p: {
                  xs: "15px 0 15px 20px",
                  sm: "20px 0 20px 25px",
                  md: "25px 0 25px 30px",
                },
                maxWidth: "350px",
                minHeight: "138px",
                background: "linear-gradient(130deg, rgba(120, 121, 147, 0.368376) 60%, #FF9E83 60%)",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    maxWidth: { xs: "160px", sm: "150px", md: "180px" },
                    fontFamily: "IBM Plex Sans Arabic",
                    fontSize: {
                      xs: "19px",
                      sm: "20px",
                      md: "22px",
                      lg: "23px",
                    },
                    lineHeight: {
                      xs: "21px",
                      sm: "23px",
                      md: "25px",
                      lg: "26px",
                    },
                    fontWeight: 600,
                    color: "#4A4A4A",
                    textAlign: "left",
                    textTransform: "none",
                  }}
                >
                  Обуродквния из китая для малого бизнеса
                </Typography>
                <Link
                  href="/announcements/4/single-product-type"
                  sx={{
                    mt: "34%",
                    fontFamily: "IBM Plex Sans Arabic",
                    fontSize: {
                      xs: "12px",
                      sm: "13px",
                      md: "14px",
                      lg: "15px",
                    },
                    lineHeight: {
                      xs: "15px",
                      sm: "16px",
                      md: "17px",
                      lg: "18px",
                    },
                    fontWeight: 500,
                    color: "#4A4A4A",
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    textAlign: "left",
                    textTransform: "none",
                  }}
                >
                  987 обьявлениий{" "}
                  <ChevronRightIcon sx={{ ml: { sx: 0, sm: "4px" } }} />
                </Link>
              </Box>

              <CardMedia
                image={Apple}
                sx={{
                  margin: {
                    xs: "-15px -45px -30px -40px",
                    sm: "-20px -40px -30px -70px",
                    md: "0 -50px -30px -90px",
                  },
                  pt: { xs: "13px", md: "29px" },
                  pl: { xs: 0, md: "20px" },
                  width: { xs: "220px", md: "240px" },
                  height: { xs: "120px", md: "135px" },
                }}
              />
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};
