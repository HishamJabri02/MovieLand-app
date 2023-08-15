/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCitiesWithRegions } from "../api/getCitieswithRegions";
export const AddressesAsync = createAsyncThunk(
  "addresses/AddressesAsync",
  async () => {
    try {
      const response = await getCitiesWithRegions();
      return response;
    } catch (error) {
      throw error;
    }
  }
);
