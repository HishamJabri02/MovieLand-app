/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { sliderApi } from "../api/SliderApi";
export const sliderAsync = createAsyncThunk("slider/sliderAsync", async () => {
  try {
    const response = await sliderApi();
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
});
