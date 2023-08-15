/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { currencyApi } from "../api/currencyApi"; 
export const currencyAsync = createAsyncThunk(
  "currency/currencyAsync",
  async () => {
    try {
      const response = await currencyApi();
      return response;
    } catch (error) {
      throw error;
    }
  }
);
