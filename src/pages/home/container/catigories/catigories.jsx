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
  const [value, setValue] = useState(0);
  const [showMore, setShowMore] = useState(15);

  const changeShowMore = () => {
    if (showMore === 15) {
      return setShowMore(showMore + 5);
    } else {
      return setShowMore(showMore - 5);
    }
  };

  const categories = [
    {
      name: "Общий",
      background: "#B4E2E1",
      image: common,
      value: "",
      id: 1,
    },
    {
      name: "Электроника",
      background: "#F6DAC2",
      image: electronics,
      value: "electronics",
      id: 2,
    },
    {
      name: "Украшения",
      background: "#F7E233",
      image: jewelery,
      value: "jewelery",
      id: 3,
    },
    {
      name: "Мужская одежда",
      background: "#B6CAFB",
      image: men,
      value: "men's clothing",
      id: 4,
    },
    {
      name: "Женская одежда",
      background: "#FF9E83",
      image: women,
      value: "women's clothing",
      id: 5,
    },
  ];

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  const selectedProduct = (id) => {
    navigate(`/home/${id}/single-product`);
  };

  return (
    <Box>
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
          {categories.map((item) => (
            <Tab
              key={item.id}
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
                      background: `${item.background}`,
                      width: { xs: "55px", sm: "65px", md: "75px" },
                      height: { xs: "55px", sm: "65px", md: "75px" },
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "20px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={item.image}
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
                    {item.name}
                  </Typography>
                </Box>
              }
            />
          ))}
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
            fontSize: { xs: "14px", md: "15px" },
            lineHeight: { xs: "17px", md: "18px" },
            fontWeight: 600,
            textTransform: "inherit",
          }}
        >
          {showMore === 15 ? "Покозать еще" : "Свернуть"}
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
