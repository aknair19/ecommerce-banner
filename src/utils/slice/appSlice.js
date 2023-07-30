import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    products: [],
    searchProducts: [],
    searchInput: "",
    category: "",
    itemsInCart: [],
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
    getCategory: (state, action) => {
      state.category = action.payload;
    },
    addItems: (state, action) => {
      state.itemsInCart.push(action.payload);
    },
    clearCart: (state, action) => {
      state.itemsInCart = [];
    },
  },
});

export const {
  getProducts,
  getProductsOnSearch,
  getSearchInput,
  addItems,
  getCategory,
  clearCart
} = appSlice.actions;
export default appSlice.reducer;
