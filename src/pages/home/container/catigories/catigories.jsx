import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import { Button, CardMedia, Tab, Typography } from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import { CardHome } from "../../components/cardHome";

import common from "../../../../assets/images/common.png";
import electronics from "../../../../assets/images/electronics.jpg";
import jewelery from "../../../../assets/images/jewelery.png";
import men from "../../../../assets/images/men.png";
import women from "../../../../assets/images/women.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export const Catigories = () => {
  const [showMore, setShowMore] = useState(15);

  const changeShowMore = () => {
    if (showMore === 15) {
      return setShowMore(showMore + 5);
    } else {
      return setShowMore(showMore - 5);
    }
  };

  const informations = useSelector((state) => state.commonData.information);

  const copyInformations = informations.slice(0, showMore);

  const categoryElectronics = informations.filter(
    (item) => item.category === "electronics"
  );

  const categoryJewelery = informations.filter(
    (item) => item.category === "jewelery"
  );

  const categoryMenClothing = informations.filter(
    (item) => item.category === "men's clothing"
  );

  const categoryWomenClothing = informations.filter(
    (item) => item.category === "women's clothing"
  );

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  const selectedProduct = (id) => {
    navigate(`/home/${id}/single-product`);
  };

  return (
    <Box sx={{ mt: "56px" }}>
      <Box
        sx={{
          p: {
            xs: "10px 20px 10px",
            sm: "15px 24px 15px",
            md: "25px 24px 20px",
          },
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          aria-label="basic tabs example"
        >
          <Tab
            sx={{
              p: { xs: "7px 8px", sm: "10px 12px", md: "12px 16px" },
            }}
            label={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    mb: "6px",
                    background: "#B4E2E1",
                    width: { xs: "55px", sm: "65px", md: "75px" },
                    height: { xs: "55px", sm: "65px", md: "75px" },
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "20px",
                  }}
                >
                  <CardMedia
                    component="img"
                    src={common}
                    alt="Photo All"
                    sx={{
                      m: "0 auto",
                      width: { xs: "30px", sm: "40px", md: "45px" },
                    }}
                  />
                </Box>
                <Typography
                  variant="p"
                  sx={{
                    fontFamily: "IBM Plex Sans Arabic",
                    fontWeight: 700,
                    fontSize: { xs: "11px", sm: "13px", md: "14px" },
                    lineHeight: "17px",
                    textTransform: "capitalize",
                  }}
                >
                  Общий
                </Typography>
              </Box>
            }
          />

          <Tab
            sx={{
              p: { xs: "7px 8px", sm: "10px 12px", md: "12px 16px" },
            }}
            label={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    mb: "6px",
                    background: "#F6DAC2",
                    width: { xs: "55px", sm: "65px", md: "75px" },
                    height: { xs: "55px", sm: "65px", md: "75px" },
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "20px",
                  }}
                >
                  <CardMedia
                    component="img"
                    src={electronics}
                    alt="Photo electronics"
                    sx={{
                      m: "0 auto",
                      width: { xs: "30px", sm: "40px", md: "45px" },
                    }}
                  />
                </Box>
                <Typography
                  variant="p"
                  sx={{
                    fontFamily: "IBM Plex Sans Arabic",
                    fontWeight: 700,
                    fontSize: { xs: "11px", sm: "13px", md: "14px" },
                    lineHeight: "17px",
                    textTransform: "capitalize",
                  }}
                >
                  Электроника
                </Typography>
              </Box>
            }
          />

          <Tab
            sx={{
              p: { xs: "7px 8px", sm: "10px 12px", md: "12px 16px" },
            }}
            label={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    mb: "6px",
                    background: "#F7E233",
                    width: { xs: "55px", sm: "65px", md: "75px" },
                    height: { xs: "55px", sm: "65px", md: "75px" },
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "20px",
                  }}
                >
                  <CardMedia
                    component="img"
                    src={jewelery}
                    alt="Photo jewelery"
                    sx={{
                      m: "0 auto",
                      width: { xs: "30px", sm: "40px", md: "45px" },
                    }}
                  />
                </Box>
                <Typography
                  variant="p"
                  sx={{
                    fontFamily: "IBM Plex Sans Arabic",
                    fontWeight: 700,
                    fontSize: { xs: "11px", sm: "13px", md: "14px" },
                    lineHeight: "17px",
                    textTransform: "capitalize",
                  }}
                >
                  Украшения
                </Typography>
              </Box>
            }
          />

          <Tab
            sx={{
              p: { xs: "7px 8px", sm: "10px 12px", md: "12px 16px" },
            }}
            label={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    mb: "6px",
                    background: "#B6CAFB",
                    width: { xs: "55px", sm: "65px", md: "75px" },
                    height: { xs: "55px", sm: "65px", md: "75px" },
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "20px",
                  }}
                >
                  <CardMedia
                    component="img"
                    src={men}
                    alt="Photo men's clothing"
                    sx={{
                      m: "0 auto",
                      width: { xs: "30px", sm: "40px", md: "45px" },
                    }}
                  />
                </Box>
                <Typography
                  variant="p"
                  sx={{
                    fontFamily: "IBM Plex Sans Arabic",
                    fontWeight: 700,
                    fontSize: { xs: "11px", sm: "13px", md: "14px" },
                    lineHeight: "17px",
                    textTransform: "capitalize",
                  }}
                >
                  мужская одежда
                </Typography>
              </Box>
            }
          />

          <Tab
            sx={{
              p: { xs: "7px 8px", sm: "10px 12px", md: "12px 16px" },
            }}
            label={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    mb: "6px",
                    background: "#FF9E83",
                    width: { xs: "55px", sm: "65px", md: "75px" },
                    height: { xs: "55px", sm: "65px", md: "75px" },
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "20px",
                  }}
                >
                  <CardMedia
                    component="img"
                    src={women}
                    alt="Photo women's clothing"
                    sx={{
                      m: "0 auto",
                      width: { xs: "37px", sm: "47px", md: "52px" },
                    }}
                  />
                </Box>
                <Typography
                  variant="p"
                  sx={{
                    fontFamily: "IBM Plex Sans Arabic",
                    fontWeight: 700,
                    fontSize: { xs: "11px", sm: "13px", md: "14px" },
                    lineHeight: "17px",
                    textTransform: "capitalize",
                  }}
                >
                  Женская одежда
                </Typography>
              </Box>
            }
          />
        </Tabs>
      </Box>

      <Box
        sx={{
          p: {
            xs: "10px 14px 10px",
            sm: "15px 16px 15px",
            md: "25px 14px 20px",
          },
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {copyInformations.map((item) => (
          <TabPanel
            value={value}
            index={0}
            key={item.id}
            sx={{ width: "100%" }}
          >
            <CardHome
              title={item.title}
              img={item.image}
              price={item.price}
              id={item.id}
              selected={selectedProduct.bind(null, item.id)}
            />
          </TabPanel>
        ))}

        {categoryElectronics.map((item) => (
          <TabPanel
            value={value}
            index={1}
            key={item.id}
            sx={{ width: "100%" }}
          >
            <CardHome
              title={item.title}
              img={item.image}
              price={item.price}
              id={item.id}
              selected={selectedProduct.bind(null, item.id)}
            />
          </TabPanel>
        ))}

        {categoryJewelery.map((item) => (
          <TabPanel
            value={value}
            index={2}
            key={item.id}
            sx={{ width: "100%" }}
          >
            <CardHome
              title={item.title}
              img={item.image}
              price={item.price}
              id={item.id}
              selected={selectedProduct.bind(null, item.id)}
            />
          </TabPanel>
        ))}

        {categoryMenClothing.map((item) => (
          <TabPanel
            value={value}
            index={3}
            key={item.id}
            sx={{ width: "100%" }}
          >
            <CardHome
              title={item.title}
              img={item.image}
              price={item.price}
              id={item.id}
              selected={selectedProduct.bind(null, item.id)}
            />
          </TabPanel>
        ))}

        {categoryWomenClothing.map((item) => (
          <TabPanel
            value={value}
            index={4}
            key={item.id}
            sx={{ width: "100%" }}
          >
            <CardHome
              title={item.title}
              img={item.image}
              price={item.price}
              id={item.id}
              selected={selectedProduct.bind(null, item.id)}
            />
          </TabPanel>
        ))}
      </Box>

      <Box
        sx={{
          p: {
            xs: "10px 20px 10px",
            sm: "15px 24px 15px",
            md: "20px 24px 20px",
          },
          borderTop: "1px solid rgba(182, 202, 251, 0.606827)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={changeShowMore}
          variant="text"
          disableRipple
          sx={{
            fontFamily: "IBM Plex Sans Arabic",
            fontSize: { xs: "13px", sm: "14px", md: "15px" },
            lineHeight: { xs: "16px", sm: "17px", md: "18px" },
            fontWeight: 600,
          }}
        >
          Покозать еще
          {showMore === 15 ? (
            <KeyboardArrowDownIcon sx={{ ml: "6px" }} />
          ) : (
            <ExpandLessIcon sx={{ ml: "6px" }} />
          )}
        </Button>
      </Box>
    </Box>
  );
};
