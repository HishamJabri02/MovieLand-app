/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCitiesApi } from "../api/getAllCitiesApi";
export const getAllCitiesAsync = createAsyncThunk(
  "addresses/getAllCitiesAsync",
  async (id) => {
    try {
      const response = await getAllCitiesApi(id);
      return response;
    } catch (error) {
      throw error;
    }
  }
);
