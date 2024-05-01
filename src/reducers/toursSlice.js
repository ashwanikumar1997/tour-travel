/**
 *
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:56:13
 * @modify date 2019-09-03 10:56:13
 * @desc [description]
 *
 **/

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tours: [],
  status: null,
  loading: true,
};

export const toursPackageSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {
    getAlltours: (state, action) => {
      state.tours = action.payload;
      state.status = 200 
      state.loading = false
    },
    filterTours: (state, action) => {
      state.tours = action.payload;
      state.status = 200 
      state.loading = false
    },
  },
});

export const { getAlltours, filterTours } = toursPackageSlice.actions;

export default toursPackageSlice.reducer;
