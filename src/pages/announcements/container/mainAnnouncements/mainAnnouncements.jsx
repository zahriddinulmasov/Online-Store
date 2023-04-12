import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { Button } from "@mui/material";
import { Box } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import { CardHome } from "../../../home/components/cardHome";
import { SkeletonCard } from "../../../home/components/cardHome";

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
  const infoSkeleton = data.length > 0;

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
        }}
      >
        {infoSkeleton ? (
          newInformations.map((item) => (
            <Box index={0} key={item.id}>
              <CardHome
                title={item.title}
                img={item.image}
                price={item.price}
                id={item.id}
                selected={selectedProduct.bind(null, item.id)}
              />
            </Box>
          ))
        ) : (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        )}
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
