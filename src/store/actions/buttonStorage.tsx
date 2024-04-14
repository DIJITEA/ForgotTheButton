import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductsState {
  value: string;
}

const initialState: ProductsState = {
  value: "[]",
};

export const ButtonSlice = createSlice({
  name: "ButtonSlice",
  initialState,
  reducers: {
    AddButtonClick: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { AddButtonClick } = ButtonSlice.actions;

export default ButtonSlice.reducer;
