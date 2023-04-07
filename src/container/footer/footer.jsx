import { Link } from "react-router-dom";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FooterBottom } from "./footerBottom/footerBottom";

const electronics = [
  {
    name: "",
    id: "1",
  },
  {
    name: "Компьютеры",
    id: "2",
  },
  {
    name: "Ноутбуки, планшеты",
    id: "3",
  },
  {
    name: "Оргтехника и расходники",
    id: "4",
  },
  {
    name: "ТВ,Фото,Видео и Аудио",
    id: "5",
  },
  {
    name: "Игры и Приставки",
    id: "6",
  },
  {
    name: "Техника для дома и Для себя",
    id: "7",
  },
  {
    name: "Климатическое оборудование",
    id: "8",
  },
  {
    name: "Аксессуары и Комплектующие",
    id: "9",
  },
  {
    name: "Техника для наблюдения",
    id: "10",
  },
  {
    name: "Прочая электроника",
    id: "11",
  },
];

const decorations = [
  {
    name: "Кольса",
    id: "1",
  },
  {
    name: "Серьги",
    id: "2",
  },
  {
    name: "Браслеты",
    id: "3",
  },
  {
    name: "Цепочки",
    id: "4",
  },
  {
    name: "Колье, ожерелья",
    id: "5",
  },
  {
    name: "Украшение для волос",
    id: "6",
  },
  {
    name: "Бусы",
    id: "7",
  },
  {
    name: "Подвески, кулоны",
    id: "8",
  },
  {
    name: "Пирсы",
    id: "9",
  },
  {
    name: "Экзотика",
    id: "10",
  },
  {
    name: "Часы",
    id: "11",
  },
];

const menClothing = [
  {
    name: "Особенности верхней мужской одежды",
    id: "1",
  },
  {
    name: "Основные разновидности",
    id: "2",
  },
  {
    name: "Материал для верхней мужской одежды",
    id: "3",
  },
  {
    name: "Основные стили",
    id: "4",
  },
  {
    name: "Модные бренды",
    id: "5",
  },
  {
    name: "Правила выбора верхней мужской одежды",
    id: "6",
  },
  {
    name: "Стильные примеры",
    id: "7",
  },
];

const womenClothing = [
  {
    name: "Общая классификация одежды",
    id: "1",
  },
  {
    name: "Все виды женской одежды",
    id: "2",
  },
  {
    name: "Все виды одежды",
    id: "3",
  },
  {
    name: "Основные стили",
    id: "4",
  },
  {
    name: "Модные бренды",
    id: "5",
  },
  {
    name: "Правила выбора верхней мужской одежды",
    id: "6",
  },
  {
    name: "Стильные примеры",
    id: "7",
  },
];

export const Footer = () => {
  return (
    <Box>
      <Box
        sx={{
          p: {
            xs: "5px 20px",
            sm: "10px 23px",
            md: "15px 24px",
          },
          background: "#33383C",
          display: "flex",
          flexWrap: "wrap",
          borderBottom: "1px solid #4C565E",
        }}
      >
        <Box
          sx={{
            m: "0 5px 4px 0",
            width: { xs: "100%", sm: "49.1%", md: "32.7%", lg: "24.5%" },
          }}
        >
          <Accordion sx={{ background: "transparent", boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#FFFFFF" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ p: 0 }}
            >
              <Typography
                sx={{
                  fontFamily: "IBM Plex Sans Arabic",
                  fontWeight: 700,
                  fontSize: { xs: "12px", sm: "13px", md: "14px" },
                  lineHeight: { xs: "15px", sm: "16px", md: "17px" },
                  color: "#FFFFFF",
                  p: 0,
                  m: 0,
                }}
              >
                Электроника
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {electronics.map((item) => (
                <Link to="/" key={item.id} style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      fontFamily: "IBM Plex Sans Arabic",
                      fontWeight: 500,
                      fontSize: { xs: "12px", sm: "13px", md: "14px" },
                      lineHeight: { xs: "23px", sm: "27px", md: "29px" },
                      color: "#878F99",
                    }}
                  >
                    {item.name}
                  </Typography>
                </Link>
              ))}
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box
          sx={{
            m: "0 5px 4px 0",
            width: { xs: "100%", sm: "49.1%", md: "32.7%", lg: "24.5%" },
          }}
        >
          <Accordion sx={{ background: "transparent", boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#FFFFFF" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ p: 0 }}
            >
              <Typography
                sx={{
                  fontFamily: "IBM Plex Sans Arabic",
                  fontWeight: 700,
                  fontSize: { xs: "12px", sm: "13px", md: "14px" },
                  lineHeight: { xs: "15px", sm: "16px", md: "17px" },
                  color: "#FFFFFF",
                }}
              >
                Украшения
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {decorations.map((item) => (
                <Link to="/" key={item.id} style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      fontFamily: "IBM Plex Sans Arabic",
                      fontWeight: 500,
                      fontSize: { xs: "12px", sm: "13px", md: "14px" },
                      lineHeight: { xs: "23px", sm: "27px", md: "29px" },
                      color: "#878F99",
                    }}
                  >
                    {item.name}
                  </Typography>
                </Link>
              ))}
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box
          sx={{
            m: "0 5px 4px 0",
            width: { xs: "100%", sm: "49.1%", md: "32.7%", lg: "24.5%" },
          }}
        >
          <Accordion sx={{ background: "transparent", boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#FFFFFF" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ p: 0 }}
            >
              <Typography
                sx={{
                  fontFamily: "IBM Plex Sans Arabic",
                  fontWeight: 700,
                  fontSize: { xs: "12px", sm: "13px", md: "14px" },
                  lineHeight: { xs: "15px", sm: "16px", md: "17px" },
                  color: "#FFFFFF",
                }}
              >
                Мужская одежда
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {menClothing.map((item) => (
                <Link to="/" key={item.id} style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      fontFamily: "IBM Plex Sans Arabic",
                      fontWeight: 500,
                      fontSize: { xs: "12px", sm: "13px", md: "14px" },
                      lineHeight: { xs: "23px", sm: "27px", md: "29px" },
                      color: "#878F99",
                    }}
                  >
                    {item.name}
                  </Typography>
                </Link>
              ))}
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box
          sx={{
            m: "0 5px 4px 0",
            width: { xs: "100%", sm: "49.1%", md: "32.7%", lg: "24.5%" },
          }}
        >
          <Accordion sx={{ background: "transparent", boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#FFFFFF" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ p: 0 }}
            >
              <Typography
                sx={{
                  fontFamily: "IBM Plex Sans Arabic",
                  fontWeight: 700,
                  fontSize: { xs: "12px", sm: "13px", md: "14px" },
                  lineHeight: { xs: "15px", sm: "16px", md: "17px" },
                  color: "#FFFFFF",
                }}
              >
                Женская одежда
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {womenClothing.map((item) => (
                <Link to="#" key={item.id} style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      fontFamily: "IBM Plex Sans Arabic",
                      fontWeight: 500,
                      fontSize: { xs: "12px", sm: "13px", md: "14px" },
                      lineHeight: { xs: "23px", sm: "27px", md: "29px" },
                      color: "#878F99",
                    }}
                  >
                    {item.name}
                  </Typography>
                </Link>
              ))}
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>

      <FooterBottom />
    </Box>
  );
};
