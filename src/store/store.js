import { configureStore } from "@reduxjs/toolkit";
import dogBreedsReducer from "./dogBreedsSlice";

export const store = configureStore({
  reducer: {
    dogBreeds: dogBreedsReducer,
  },
});

export default store;
