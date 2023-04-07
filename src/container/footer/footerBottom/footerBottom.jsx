import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const footerNav = [
  {
    name: "Подать объявление",
    id: 1,
  },
  {
    name: "Объявления",
    id: 2,
  },
  {
    name: "Магазины",
    id: 3,
  },
  {
    name: "Помощь",
    id: 4,
  },
  {
    name: "Безопасность",
    id: 5,
  },
  {
    name: "Реклама на сайте",
    id: 6,
  },
  {
    name: "О компонии",
    id: 7,
  },
];

export const FooterBottom = () => {
  return (
    <>
      <Box
        sx={{
          p: {
            xs: "15px 20px ",
            sm: "17px 24px ",
            md: "18px 24px ",
          },
          background: "#33383C",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {footerNav.map((item) => (
          <Link to="#" style={{ textDecoration: "none" }} key={item.id}>
            <Typography
              sx={{padding: {xs: "3px 12px 3px 0", sm: "4px 12px 4px 0", md: "6px 12px 6px 0"},
                fontWeight: 500,
                width: {xs: "110px", sm: "122px", md: "137px"},
                fontSize: { xs: "13px", sm: "14px", md: "15px" },
                lineHeight: { xs: "16px", sm: "17px", md: "18px" },
                color: "#878F99",
                fontFamily: "IBM Plex Sans Arabic",
              }}
            >
              {item.name}
            </Typography>
          </Link>
        ))}
      </Box>
    </>
  );
};
