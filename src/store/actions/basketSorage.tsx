import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductsState {
  value: string;
}

const initialState: ProductsState = {
  value: "[]",
};

export const ProductsSlice = createSlice({
  name: "ProductsSlice",
  initialState,
  reducers: {
    Addproduct: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { Addproduct } = ProductsSlice.actions;

export default ProductsSlice.reducer;
