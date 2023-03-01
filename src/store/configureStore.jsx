import { configureStore } from "@reduxjs/toolkit";
import { mainInformationReducer } from "./commonData";

export const store = configureStore({
  reducer: {
    commonData: mainInformationReducer,
  },
});
