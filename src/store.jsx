import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/car/carSlice";

// Custom middleware for logging actions
const logger = (storeAPI) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", storeAPI.getState());
  return result;
};

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
