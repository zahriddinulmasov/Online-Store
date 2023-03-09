import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { CardHome } from "../../../home/components/cardHome";
import { mainInformationActions } from "../../../../store/commonData";
import { useNavigate } from "react-router-dom";

export const SingleProductSwiper = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();



  const singleProductCardSelector = useSelector(
    (state) => state.commonData.singleProductCatigory
  );
  // console.log("aaaaaaa");

  useEffect(() => {
    fetch(
      `https://fakestoreapi.com/products/category/${singleProductCardSelector.category}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(mainInformationActions.singleProductCard(data));
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, [singleProductCardSelector.category]);

  const info = useSelector((state) => state.commonData.singleProduct).slice();

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
      {info.map((item) => (
        <SwiperSlide key={item.id}>
          <CardHome
            title={item.title}
            img={item.image}
            price={item.price}
            id={item.id}
            selected={selectedProduct.bind(null, item.id)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
