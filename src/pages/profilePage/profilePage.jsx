import * as React from "react";
import PropTypes from "prop-types";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";

import { SingleProductTop } from "../singleProduct/container/singleProductTop";
import { ProfileBtn } from "./components/profileBtn";
import { AdsProfile } from "./components/adsProfile";

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
        <Box sx={{ p: 1 }}>
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

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

export const ProfilePage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const profileNav = [
    { name: "Объявления", id: 0 },
    { name: "Сообщения", id: 1 },
    { name: "Платежи и счёт", id: 2 },
    { name: "Настройки", id: 3 },
    { name: "Мой бизнес", id: 4 },
  ];

  return (
    <>
      <SingleProductTop />

      <Box
        sx={{
          p: {
            xs: "8px 20px ",
            sm: "12px 24px ",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              mr: { xs: "12px", sm: "12px", md: "30px" },
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                mr: "8px",
                p: "5px 0",
                fontFamily: "IBM Plex Sans Arabic",
                fontWeight: 700,
                fontSize: { xs: "13px", sm: "15.5px", md: "17px" },
                lineHeight: { xs: "17px", sm: "19px", md: "21px" },
                color: "#414D6A",
              }}
            >
              Здравствуйте Зухриддин Темиров
            </Typography>

            <Box
              component="span"
              sx={{
                p: "5px 0",
                fontFamily: "IBM Plex Sans Arabic",
                fontWeight: 500,
                fontSize: { xs: "13px", sm: "15.5px", md: "17px" },
                lineHeight: { xs: "17px", sm: "19px", md: "21px" },
                color: "#304FFF",
              }}
            >
              Ваш счет: {"2 3000"} $
            </Box>
          </Box>

          <ProfileBtn />
        </Box>
      </Box>

      <Divider />

      <Box
        sx={{
          p: {
            xs: "8px 20px ",
            sm: "12px 24px ",
            // md: "25px 24px 20px",
          },
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            aria-label="basic tabs example"
          >
            {profileNav.map((item) => (
              <Tab
                key={item.id}
                sx={{
                  p: { xs: "8px 12px", sm: "12px 16px" },
                  fontFamily: "IBM Plex Sans Arabic",
                  fontWeight: 500,
                  fontSize: { xs: "14px", sm: "15.5px", md: "17px" },
                  lineHeight: { xs: "17px", sm: "19px", md: "21px" },
                  textTransform: "inherit",
                  color: "#414D6A",
                }}
                label={item.name}
              />
            ))}
          </Tabs>
        </Box>

        <Box>
          <TabPanel value={value} index={0} style={{ p: "22px" }}>
            <AdsProfile />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Страница сообщении
          </TabPanel>
          <TabPanel value={value} index={2}>
            Страница платежей и счёта
          </TabPanel>
          <TabPanel value={value} index={3}>
            Страница настроек
          </TabPanel>
          <TabPanel value={value} index={4}>
            Страница моего бизнеса
          </TabPanel>
        </Box>
      </Box>
    </>
  );
};
