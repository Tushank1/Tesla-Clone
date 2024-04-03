import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../src/features/car/carSlice";
// import carSlice from "./features/car/carSlice";

const store = configureStore({
  reducer: {
    car: carReducer,
  },
});

export default store;
