/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { WishListApi } from "../api/WishListApi";
export const WishListAsync = createAsyncThunk(
  "wishList/WishListAsync",
  async (id) => {
    try {
      const response = await WishListApi(id);
      return response;
    } catch (error) {
      throw error;
    }
  }
);
