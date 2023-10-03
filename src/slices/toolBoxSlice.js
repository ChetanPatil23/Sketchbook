import { createSlice } from "@reduxjs/toolkit";
const toolBoxSlice = createSlice({
  name: "toolBox",
  initialState: {
    isToolBoxOpen: true,
  },
  reducers: {
    hideToolBox: (state) => {
      state.isToolBoxOpen = false;
    },
    showToolBox: (state) => {
      state.isToolBoxOpen = true;
    },
  },
});

export const { hideToolBox, showToolBox } = toolBoxSlice.actions;
export default toolBoxSlice.reducer;
