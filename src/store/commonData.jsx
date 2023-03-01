import { createSlice } from "@reduxjs/toolkit";

const name = "common";

const initialState = {
  error: null,
  information: [],
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
  },
});
