import { configureStore } from "@reduxjs/toolkit";


import ProductsSlice from "./actions/basketSorage";
import  ButtonSlice  from "./actions/buttonStorage";
// import AppStateLogic from "./actions/AppPseudoRender";
const store = configureStore({
  reducer: {
    // DataR: DateSliceLogic,
    ProductsS: ProductsSlice,
    ButtonS: ButtonSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;