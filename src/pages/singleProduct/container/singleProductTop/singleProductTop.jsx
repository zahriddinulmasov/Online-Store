import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Box, Button, OutlinedInput, Tooltip, Typography } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

const regions = [
  {
    name: "Ташкент г.",
    id: 1,
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

const styleSelectItems = {
  fontFamily: "IBM Plex Sans Arabic",
  fontWeight: 500,
  fontSize: { xs: "12px", sm: "13px", md: "15px" },
  lineHeight: { xs: "14px", sm: "16px", md: "18px" },
  color: "#000",
};

export const SingleProductTop = () => {
  const [age, setAge] = useState("");
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box
      sx={{
        p: {
          xs: "0 20px",
          sm: "0 20px ",
          md: "0 24px ",
        },
        display: "flex",
      }}
    >
      <Box
        sx={{
          mr: "12px",
          borderRadius: "22px",
          display: "flex",
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ display: "flex", width: "100%", mb: "8px" }}>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              pl: "4px",
              height: {xs: "35px", sm: "40px", md: "45px"},
              border: "none",
              borderRadius: "22px  0 0 22px",
              width: "50%",
              fontFamily: "IBM Plex Sans Arabic",
              fontWeight: 500,
              fontSize: { xs: "12px", sm: "13px", md: "15px" },
              lineHeight: { xs: "14px", sm: "16px", md: "18px" },
              color: "#000",
            }}
          >
            <MenuItem value="" sx={styleSelectItems}>
              Любая категория
            </MenuItem>
            <MenuItem value={1} sx={styleSelectItems}>
              Электроника
            </MenuItem>
            <MenuItem value={2} sx={styleSelectItems}>
              Украшения
            </MenuItem>
            <MenuItem value={3} sx={styleSelectItems}>
              Мужская одежда
            </MenuItem>
            <MenuItem value={4} sx={styleSelectItems}>
              Женская одежда
            </MenuItem>
          </Select>

          <Select
            value={category}
            onChange={handleChangeCategory}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              pl: "4px",
              height: {xs: "35px", sm: "40px", md: "45px"},
              borderRadius: { xs: "0 22px 22px 0", md: 0 },
              width: "50%",
              fontFamily: "IBM Plex Sans Arabic",
              fontWeight: 500,
              fontSize: { xs: "12px", sm: "13px", md: "15px" },
              lineHeight: { xs: "14px", sm: "16px", md: "18px" },
              color: "#000",
            }}
          >
            <MenuItem value="" sx={styleSelectItems}>
              По всем Узбекистану
            </MenuItem>
            {regions.map((item) => (
              <MenuItem value={item.id} key={item.id} sx={styleSelectItems}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </Box>

        <Box sx={{ display: "flex", width: { xs: "100%" }, mb: "8px" }}>
          <OutlinedInput
            placeholder="Что будем искать?"
            sx={{
              pr: "70px",
              mr: { xs: "-88px", sm: "-108px" },
              borderRadius: { xs: "22px", md: "0 22px 22px 0" },
              height: {xs: "35px", sm: "40px", md: "45px"},
              width: { xs: "100%" },
              fontFamily: "IBM Plex Sans Arabic",
              fontWeight: 500,
              fontSize: { xs: "12px", sm: "13px", md: "15px" },
              lineHeight: { xs: "14px", sm: "16px", md: "18px" },
              color: "#000",
            }}
          />

          <Button
            variant="contained"
            sx={{
              height: {xs: "35px", sm: "40px", md: "45px"},
              background: "#19D476",
              borderRadius: "22px",
              ":hover": { background: "#19D476", opacity: 0.8 },
              width: "108px",
              fontFamily: "IBM Plex Sans Arabic",
              fontWeight: 700,
              fontSize: { xs: "12px", sm: "13px", md: "15px" },
              lineHeight: { xs: "14px", sm: "16px", md: "18px" },
              color: "#FFFFFF",
              textTransform: "capitalize",
            }}
          >
            Найти
          </Button>

          <Tooltip title="Добавить обьявления">
            <Box
              component="button"
              sx={{
                p: 0,
                m: " 0 0 8px 12px",
                borderRadius: "22px",
                display: { xs: "flex", sm: "none" },

                border: "0",
                cursor: "pointer",
                ":hover": { opacity: 0.8 },
              }}
            >
              <Box
                component="span"
                sx={{
                  width: {xs: "35px", sm: "40px", md: "45px"},
                  height: {xs: "35px", sm: "40px", md: "45px"},
                  background: "#11B463",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AddIcon style={{ color: "white" }} />
              </Box>
            </Box>
          </Tooltip>
        </Box>
      </Box>

      <Box
        component="button"
        sx={{
          mb: "8px",
          maxWidth: { xs: "170px", md: "240px" },
          width: "100%",
          background: "#19D476",
          borderRadius: "22px",
          display: { xs: "none", sm: "flex" },
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          border: "0",
          cursor: "pointer",
          ":hover": { opacity: 0.8 },
        }}
      >
        <Box
          component="span"
          sx={{
            m: { xs: "auto 0 4px ", md: "0 6px 0 -6px" },
            width: "44px",
            height: "44px",
            background: "#11B463",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AddIcon style={{ color: "white" }} />
        </Box>
        <Typography
          sx={{
            mb: { xs: "auto", md: "0" },
            fontFamily: "IBM Plex Sans Arabic",
            fontWeight: 700,
            fontSize: { xs: "12px", sm: "13px", md: "15px" },
            lineHeight: { xs: "14px", sm: "16px", md: "18px" },
            color: "#FFFFFF",
          }}
        >
          Добавить обьявления
        </Typography>
      </Box>
    </Box>
  );
};
