import { createSlice } from "@reduxjs/toolkit";

const name = "common";

const initialState = {
  error: null,
  information: [],
  singleProduct: [],
  singleProductCatigory: "",
};

export const {
  reducer: mainInformationReducer,
  actions: mainInformationActions,
} = createSlice({
  name,
  initialState,
  reducers: {
    setInformations(state, action) {
      state.information = action.payload;
    },
    singleProductCard(state, action){
      state.singleProduct = action.payload
    },
    setSingleProductCatigory(state, action) {
      state.singleProductCatigory = action.payload;
    },
  },
});
