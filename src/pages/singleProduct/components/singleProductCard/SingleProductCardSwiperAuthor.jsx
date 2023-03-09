import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import { CardHome } from "../../../home/components/cardHome";

export const SingleProductCardSwiperAuthor = () => {
  const navigate = useNavigate();

  const singleProductCard = [
    useSelector((state) => state.commonData.singleProductCatigory),
  ];
  // console.log("dddddd");

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
      {singleProductCard.map((item) => (
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
