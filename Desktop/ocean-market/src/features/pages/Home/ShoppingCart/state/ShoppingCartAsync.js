/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { shoppingCartApi } from "../api/shoppingCartApi";
export const ShoppingCartAsync = createAsyncThunk(
  "cart/ShoppingCartAsync",
  async () => {
    try {
      const response = await shoppingCartApi();
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
