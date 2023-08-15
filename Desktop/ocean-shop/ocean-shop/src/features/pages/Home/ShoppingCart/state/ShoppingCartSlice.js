/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  details: [],
}; // Todo if you can customize this function logic
const ShoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addToBag: (state, action) => {
      // make unique id for the same product in the different color or size
      const itemKey = `${action.payload.details._id}-${action.payload.selectedColor._id}-${action.payload.selectedSize._id}`;
      const existingItem = state.details.find(
        (item) =>
          item.id === action.payload.details.id &&
          item.selectedColor._id === action.payload.selectedColor._id &&
          item.selectedSize._id === action.payload.selectedSize._id
      );
      if (existingItem) {
        existingItem.counter += action.payload.quantity;
      } else {
        state.details = [
          ...state.details,
          {
            ...action.payload.details,
            selectedColor: action.payload.selectedColor,
            selectedSize: action.payload.selectedSize,
            counter: action.payload.quantity,
            key: itemKey,
          },
        ];
      }
    },
    deleteFromBag: (state, action) => {
      state.details = state.details.filter((item) => {
        return item.key !== action.payload;
      });
    },
    clearBag: (state) => {
      state.details = [];
    },
    updateProduct: (state, action) => {
      const index = state.details.findIndex(
        (item) => item.key === action.payload.key
      );
      // put the updated data with changing the key
      state.details[index] = {
        ...action.payload,
        key: `${action.payload._id}-${action.payload.selectedColor._id}-${action.payload.selectedSize._id}`,
      };
      //filter the key and increment the counter by similarity count
      const uniqueDetails = state.details.reduce((acc, item) => {
        const existingItem = acc.find((i) => i.key === item.key);
        if (existingItem) {
          existingItem.counter += 1;
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
      state.details = uniqueDetails;
    },
  },
});
export const { addToBag } = ShoppingCartSlice.actions;
export const { deleteFromBag } = ShoppingCartSlice.actions;
export const { updateProduct } = ShoppingCartSlice.actions;
export const { clearBag } = ShoppingCartSlice.actions;
export default ShoppingCartSlice.reducer;
