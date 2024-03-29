import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import { mainInformationActions } from "../../store/commonData";
import { Catigories } from "./container/catigories";
import { ProductTypes } from "./container/productTypes";

import { AppHome } from "./container/appHome";
import { SingleProductTop } from "../singleProduct/container/singleProductTop/singleProductTop";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_URL)
      .then((data) => {
        dispatch(mainInformationActions.setInformations(data.data));
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  return (
    <Box>
      <SingleProductTop/>
      <Catigories />
      <ProductTypes />
      <AppHome />
    </Box>
  );
};
