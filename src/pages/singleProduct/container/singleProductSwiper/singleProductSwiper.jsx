import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { CardHome, SkeletonCard } from "../../../home/components/cardHome";
import { mainInformationActions } from "../../../../store/commonData";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, CardActionArea, CardContent, Skeleton } from "@mui/material";

export const SkeletonSingleCard = () => {
  return (
    <>
      <SwiperSlide>
        <Card
          sx={{
            margin: { xs: "3px", sm: "5px", md: "8px", lg: "10px" },
            width: { xs: "139px", sm: "155px", md: "175px", lg: "210px" },
            background: "white",
          }}
        >
          <CardActionArea>
            <Skeleton
              variant="rectangular"
              width="100%"
              sx={{
                height: { xs: "135px", sm: "150px", md: "170px", lg: "200px" },
              }}
            />
            <CardContent
              sx={{
                padding: { xs: "9px 6px", sm: "10px 7px", md: "12px 8px" },
              }}
            >
              <Skeleton
                sx={{
                  height: { xs: "13px", sm: "16px", md: "18px" },
                  width: "100%",
                }}
              />
              <Skeleton
                sx={{
                  height: { xs: "13px", sm: "16px", md: "18px" },
                  width: "60%",
                }}
              />
              <Skeleton style={{ margin: "8px 0 2px 0", width: "40%" }} />

              <Skeleton style={{ width: "30%", height: "25px" }} />
            </CardContent>
          </CardActionArea>
        </Card>
        <SkeletonCard />
      </SwiperSlide>
    </>
  );
};

export const SingleProductSwiper = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const singleProductCardSelector = useSelector(
    (state) => state.commonData.singleProductCatigory
  );

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_URL +
          "/category" +
          `/${singleProductCardSelector.category}`
      )
      .then((data) => {
        dispatch(mainInformationActions.singleProductCard(data.data));
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, [singleProductCardSelector.category]);

  const info = useSelector((state) => state.commonData.singleProduct).slice();
  const infoSkeleton = info.length > 0;

  const removeProduct = info.findIndex(
    (item) => item.id === singleProductCardSelector.id
  );
  info.splice(removeProduct, 1);

  const selectedProduct = (id) => {
    navigate(`/home/${id}/single-product`);
  };

  return (
    <Swiper
      watchSlidesProgress={true}
      className="mySwiper"
      sx={{ p: "0px" }}
      breakpoints={{
        318: {
          slidesPerView: `${1.5}`,
        },
        380: {
          slidesPerView: `${2}`,
        },
        520: {
          slidesPerView: `${2.5}`,
        },
        600: {
          slidesPerView: `${3}`,
        },
        750: {
          slidesPerView: `${4}`,
        },
        1000: {
          slidesPerView: `${4.5}`,
        },
        1130: {
          slidesPerView: `${5}`,
        },
      }}
    >
      {infoSkeleton ? (
        info.map((item) => (
          <SwiperSlide key={item.id}>
            <CardHome
              title={item.title}
              img={item.image}
              price={item.price}
              id={item.id}
              selected={selectedProduct.bind(null, item.id)}
            />
          </SwiperSlide>
        ))
      ) : (
        <>
          <SwiperSlide>
            <SkeletonCard />
          </SwiperSlide>
          <SwiperSlide>
            <SkeletonCard />
          </SwiperSlide>
          <SwiperSlide>
            <SkeletonCard />
          </SwiperSlide>
        </>
      )}
    </Swiper>
  );
};
