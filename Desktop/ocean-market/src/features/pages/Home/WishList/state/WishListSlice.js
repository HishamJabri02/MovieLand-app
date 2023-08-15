/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { WishListAsync } from "./WishListAsync";
const initialState = {
  loading: false,
  message: "",
  likes: [],
  error: null,
};
const WishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWish: (state, action) => {
      state.likes = [...state.likes, action.payload];
    },
    deleteFromBag: (state, action) => {
      state.likes = state.likes.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(WishListAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(WishListAsync.fulfilled, (state, action) => {
        state.message = action.payload;
        state.loading = false;
      })
      .addCase(WishListAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default WishListSlice.reducer;
