import { configureStore } from "@reduxjs/toolkit";
import Tslice from "./Tslice";

const store = configureStore({
  reducer : {
    sTaches : Tslice.reducer
  }
})

export default store