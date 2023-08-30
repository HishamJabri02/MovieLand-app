/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createOrder } from "../api/createOrder";
export const CheckOutAsync = createAsyncThunk(
  "checkOut/CheckOutAsync",
  async (data) => {
    try {
      const response = await createOrder(data);
      console.log(response);
      return response;
    } catch (error) {
      throw error;
    }
  }
);
