import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";

//creating redux store
export const store = configureStore({
  reducer: {
    home: homeSlice,
  },
});
