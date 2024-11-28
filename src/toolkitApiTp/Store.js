import { configureStore } from "@reduxjs/toolkit";
import Pslice from "./Pslice";

export const store = configureStore({
  reducer: {
    users: Pslice.reducer,
  },
});
