/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { postSavedLocation } from "../api/postSavedLocation";
export const AddressesAsync = createAsyncThunk(
  "addresses/AddressesAsync",
  async (data) => {
    try {
      const response = await postSavedLocation(data);
      return response;
    } catch (error) {
      console.log(error)
      throw error;
    }
  }
);
