import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { SingleProductSwiper } from "../singleProductSwiper/singleProductSwiper";
import { useState } from "react";
import { SingleProductCardSwiperAuthor } from "../../components/singleProductCard";

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const SingleProductBottom = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        p: {
          xs: " 0 20px",
          sm: " 0 20px",
          md: " 0 24px",
        },
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label={
                <Typography
                  variant="h5"
                  sx={{
                    textTransform: "capitalize",
                    fontFamily: "IBM Plex Sans Arabic",
                    fontWeight: 700,
                    fontSize: { xs: "17px", sm: "21px", md: "24px" },
                    lineHeight: { xs: "22px", sm: "26px", md: "30px" },
                  }}
                >
                  Похожие объявления
                </Typography>
              }
              {...a11yProps(0)}
              sx={{}}
            />
            <Tab
              label={
                <Typography
                  variant="h5"
                  sx={{
                    textTransform: "capitalize",
                    fontFamily: "IBM Plex Sans Arabic",
                    fontWeight: 700,
                    fontSize: { xs: "17px", sm: "21px", md: "24px" },
                    lineHeight: { xs: "22px", sm: "26px", md: "30px" },
                  }}
                >
                  Обьявление автора
                </Typography>
              }
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <SingleProductSwiper />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SingleProductCardSwiperAuthor />
        </TabPanel>
      </Box>
    </Box>
  );
};
