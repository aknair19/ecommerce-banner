import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    products: [],
    searchProducts: [],
    searchInput: "",
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    getProductsOnSearch: (state, action) => {
      state.searchProducts = action.payload;
    },
    getSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});

export const { getProducts, getProductsOnSearch,getSearchInput } = appSlice.actions;
export default appSlice.reducer;
