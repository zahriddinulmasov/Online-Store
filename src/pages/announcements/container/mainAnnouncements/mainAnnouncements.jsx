import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardHome } from "../../../home/components/cardHome";
import PropTypes from "prop-types";

import { Button } from "@mui/material";
import { Box } from "@mui/system";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// import newPhone from "../../../../assets/images/newPhone.png";
// import newMost from "../../../../assets/images/newMost.png";
// import newKFC from "../../../../assets/images/newKFC.png";
// import newVelik from "../../../../assets/images/newVelik.png";

// Confidence. The goal. Movement

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

export const MainAnnouncements = ({ data }) => {
  const [showMore, setShowMore] = useState(15);
  const navigate = useNavigate();

  const changeShowMore = () => {
    if (showMore === 15) {
      return setShowMore(showMore + 10);
    } else {
      return setShowMore(showMore - 10);
    }
  };

  // const newObject = [
  //   {
  //     category: "electronics",
  //     description:
  //       "Iphone Xs..kha Rangi-gold  Pamyat-256gb  Batareya-76 rodnoy  Koropka dokument bor usta kurmagan NARXINI KELISHAMIZ !",
  //     id: 21,
  //     state: "new",
  //     image: newPhone,
  //     price: 205,
  //     rating: { rate: 4.9, count: 150 },
  //     title: "Iphone Xs 256 gb",
  //   },
  //   {
  //     category: "electronics",
  //     description:
  //       "Aybi yoq holati ideal bekor turibdi sotiladi dostlik metro dostlik park oldida telegramdan lokatsiya bor",
  //     id: 22,
  //     state: "new",
  //     image: newMost,
  //     price: 85,
  //     rating: { rate: 1.9, count: 200 },
  //     title: "Manitor 24 sotiladi",
  //   },
  //   {
  //     category: "electronics",
  //     description:
  //       "KFC aparat sotiladi holati ideal kop ishlamagan 2 dona bor ishlashiga jovob beramiz",
  //     id: 23,
  //     state: "new",
  //     image: newKFC,
  //     price: 1085,
  //     rating: { rate: 4.5, count: 350 },
  //     title: "KFC pishiradigan aparat sotiladi",
  //   },
  //   {
  //     category: "electronics",
  //     description:
  //       "Немецкий велосипед SPRICK. 26 размер. Рама алюминь, вилка амортизатор. Продаю в связи с тем что мне тяжело стало тащить велик на 4й этаж и из за боли в ногах.",
  //     id: 24,
  //     state: "new",
  //     image: newVelik,
  //     price: 480,
  //     rating: { rate: 5.9, count: 400 },
  //     title:
  //       "Горный велосипед система SRAM X5, гидравлические тормоза, велокомп",
  //   },
  // ];

  const newInformations = data.slice(0, showMore);


  const selectedProduct = (id) => {
    navigate(`/home/${id}/single-product`);
  };

  return (
    <>
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
          // alignItems: "center"
        }}
      >
        {newInformations.map((item) => (
          <Box
            index={0}
            key={item.id}
          >
            <CardHome
              title={item.title}
              img={item.image}
              price={item.price}
              id={item.id}
              selected={selectedProduct.bind(null, item.id)}
            />
          </Box>
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
          {showMore === 15 ? "Покозать еще" : "Свернуть"}
          {showMore === 15 ? (
            <KeyboardArrowDownIcon sx={{ ml: "6px" }} />
          ) : (
            <ExpandLessIcon sx={{ ml: "6px" }} />
          )}
        </Button>
      </Box>
    </>
  );
};
