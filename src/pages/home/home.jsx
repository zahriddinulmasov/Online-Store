import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import { mainInformationActions } from "../../store/commonData";
import { Catigories } from "./container/catigories";
import { ProductTypes } from "./container/productTypes";

import {AppHome} from "./container/appHome"

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
      .then((data) => {
        dispatch(mainInformationActions.setInformations(data));
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Box>
        <Catigories/>
        <ProductTypes/>
        <AppHome/>
      </Box>
    </>
  );
};
