import {
  Button,
  CardMedia,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

import search from "../../../../assets/images/search.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useState } from "react";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const categories = [
  {
    name: "Электроника",
    value: "electronics",
    id: 1,
  },
  {
    name: "Украшения",
    value: "jewelery",
    id: 2,
  },
  {
    name: "Мужская одежда",
    value: "men's clothing",
    id: 3,
  },
  {
    name: "Женская одежда",
    value: "women's clothing",
    id: 4,
  },
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const TopAnnouncements = () => {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  const [age, setAge] = useState("");
  const [type, setType] = useState("");
  const [region, setRegion] = useState("");

  const stateProducts = [
    {
      name: "Состояние",
      id: "",
    },
    {
      name: "Новое",
      id: 1,
    },
    {
      name: "Отличное",
      id: 2,
    },
    {
      name: "Хорошее",
      id: 3,
    },
    {
      name: "Удовлетворительное",
      id: 4,
    },
  ];

  const handleChangeBottom = (event) => {
    setAge(event.target.value);
  };

  const adType = [
    {
      name: "Тип объявщика",
      id: "",
    },
    {
      name: "Кредит",
      id: 1,
    },
    {
      name: "Аренда",
      id: 2,
    },
    {
      name: "Беспрлатно",
      id: 3,
    },
  ];

  const handleChangeAdType = (event) => {
    setType(event.target.value);
  };

  const regions = [
    {
      name: "Ташкент г.",
      id: "",
    },
    {
      name: "Андижанская об.",
      id: 2,
    },
    {
      name: "Бухарская об.",
      id: 3,
    },
    {
      name: "Ферганская об.",
      id: 4,
    },
    {
      name: "Джизакская об.",
      id: 5,
    },
    {
      name: "Навоийская об.",
      id: 6,
    },
    {
      name: "Наманганская об.",
      id: 7,
    },
    {
      name: "Кашкадарьинская об.",
      id: 8,
    },
    {
      name: "Самаркандская об.",
      id: 9,
    },
    {
      name: "Сырдарьинская об.",
      id: 10,
    },
    {
      name: "Сурхандарьинская об.",
      id: 11,
    },
    {
      name: "Ташкентская об.",
      id: 12,
    },
    {
      name: "Хорезмская об.",
      id: 13,
    },
    {
      name: "Р. Каракалпакстан",
      id: 14,
    },
  ];

  const handleChangeRegion = (event) => {
    setRegion(event.target.value);
  };

  return (
    <>
      <Box>
        <Box
          sx={{
            p: {
              xs: "10px 20px 20px",
              sm: "15px 20px 20px",
              md: "20px 24px 24px",
            },
            borderBottom: "1px solid rgba(151, 151, 151, 0.393739)",
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
              sx={{
                m: "10px",
                width: { xs: "15px", sm: "18px", md: "23px" },
                height: { xs: "15.3px", sm: "18.6px", md: "24px" },
              }}
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
              m: "0 -5px 20px",
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

          <Box
            sx={{
              mb: { xs: "16px", sm: "18px", md: "20px" },
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                mr: { xs: "2px", sm: "12px", md: "20px" },
                fontFamily: "IBM Plex Sans Arabic",
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                lineHeight: "19px",
                color: "#787993",
              }}
            >
              Вы сейчас в рубрике
            </Typography>

            <FormControl
              sx={{
                m: 1,
                minWidth: "200px",
              }}
            >
              <InputLabel
                id="demo-multiple-chip-label"
                sx={{ ml: "12px", fontFamily: "IBM Plex Sans Arabic" }}
              >
                Категории
              </InputLabel>
              <Select
                sx={{
                  borderRadius: "27px",
                }}
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={
                  <OutlinedInput
                    id="select-multiple-chip"
                    label="Любая категория"
                  />
                }
                renderValue={(selected) => (
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 0.5,
                      margin: "-7px",
                      paddingTop: "3px",
                    }}
                  >
                    {selected.map((value) => (
                      <Chip
                        key={value}
                        label={value}
                        sx={{
                          color: "#2979FF",
                          fontFamily: "IBM Plex Sans Arabic",
                          fontWeight: 500,
                          fontSize: "15px",
                          lineHeight: "18px",
                          border: "1px solid #B3D9FF",
                          borderRadius: "20.5px",
                          background: "#EBF5FF",
                        }}
                      />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {categories.map((category) => (
                  <MenuItem
                    key={category.id}
                    value={category.name}
                    style={getStyles(category, personName, theme)}
                    sx={{ fontFamily: "IBM Plex Sans Arabic" }}
                  >
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box
            sx={{
              mb: { xs: "16px", sm: "18px", md: "20px" },
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                mr: { xs: "12px", sm: "16px", md: "20px" },
                fontFamily: "IBM Plex Sans Arabic",
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                lineHeight: "19px",
                color: "#787993",
              }}
            >
              Выберите цену от и до
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <AttachMoneyIcon
                  sx={{
                    color: "action.active",
                    mr: 1,
                    my: 0.5,
                    width: { xs: "20px", sm: "22px", md: "24px" },
                  }}
                />
                <TextField
                  id="input-with-sx"
                  placeholder="0"
                  variant="standard"
                  sx={{ maxWidth: "100px" }}
                />
              </Box>
              <Box
                component="span"
                sx={{ m: { xs: "0 6px", sm: "0 8px", md: "0 10px" } }}
              >
                {"—"}
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <AttachMoneyIcon
                  sx={{
                    color: "action.active",
                    mr: 1,
                    my: 0.5,
                    width: { xs: "20px", sm: "22px", md: "24px" },
                  }}
                />
                <TextField
                  id="input-with-sx"
                  placeholder="0"
                  variant="standard"
                  sx={{ maxWidth: "100px" }}
                />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              m: "0 -5px",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              flexWrap: { xs: "wrap", sm: "nowrap" },
            }}
          >
            <Box sx={{ display: "flex", width: "100%" }}>
              <Select
                value={age}
                onChange={handleChangeBottom}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={{
                  m: "4px 5px",
                  borderRadius: "22px",
                  maxWidth: { xs: "280px", md: "275px" },
                  width: "100%",
                  height: { xs: "35px", sm: "40px", md: "45px" },
                  fontFamily: "IBM Plex Sans Arabic",
                  fontWeight: 700,
                  fontSize: { xs: "12px", sm: "13px", md: "14px" },
                  color: "#000",
                }}
              >
                {stateProducts.map((item) => (
                  <MenuItem
                    value={item.id}
                    key={item.id}
                    sx={{ fontFamily: "IBM Plex Sans Arabic" }}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </Select>

              <Select
                value={type}
                onChange={handleChangeAdType}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={{
                  m: "4px 5px",
                  borderRadius: "22px",
                  maxWidth: { xs: "280px", md: "275px" },
                  width: "100%",
                  height: { xs: "35px", sm: "40px", md: "45px" },
                  fontFamily: "IBM Plex Sans Arabic",
                  fontWeight: 700,
                  fontSize: { xs: "12px", sm: "13px", md: "14px" },
                  color: "#000",
                }}
              >
                {adType.map((item) => (
                  <MenuItem
                    value={item.id}
                    key={item.id}
                    sx={{ fontFamily: "IBM Plex Sans Arabic" }}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </Box>

            <Box sx={{ display: "flex", width: "100%" }}>
              <Select
                value={region}
                onChange={handleChangeRegion}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={{
                  m: "4px 5px",
                  borderRadius: "22px",
                  maxWidth: { xs: "280px", md: "275px" },
                  width: "100%",
                  height: { xs: "35px", sm: "40px", md: "45px" },
                  fontFamily: "IBM Plex Sans Arabic",
                  fontWeight: 700,
                  fontSize: { xs: "12px", sm: "13px", md: "14px" },
                  color: "#000",
                }}
              >
                {regions.map((item) => (
                  <MenuItem
                    value={item.id}
                    key={item.id}
                    sx={{ fontFamily: "IBM Plex Sans Arabic" }}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </Select>

              <Button
                variant="contained"
                sx={{
                  m: { xs: "4px 5px", md: "4px 5px 4px auto" },
                  p: "8px 24px",
                  maxWidth: { xs: "122px", sm: "122px" },
                  width: "100%",
                  height: { xs: "35px", sm: "40px", md: "45px" },
                  borderRadius: "22px",
                  textTransform: "capitalize",
                  fontFamily: "IBM Plex Sans Arabic",
                }}
              >
                Применить
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
