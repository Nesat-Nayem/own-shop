import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slice'
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        products:productReducer,
        users:userSlice
    },
  })
export default store;
