import { configureStore } from "@reduxjs/toolkit";
import FSlice from "./Slice";

const store = configureStore({
  reducer : {
    items : FSlice.reducer
  }
})

export default store