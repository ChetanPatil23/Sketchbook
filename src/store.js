import { configureStore } from "@reduxjs/toolkit";
import toolBoxSlice from "./slices/toolBoxSlice";
import menuSlice from "./slices/menuSlice";

export const store = configureStore({
  reducer: {
    toolBox: toolBoxSlice,
    menu: menuSlice,
  },
});
