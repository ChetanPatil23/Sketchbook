import { createSlice } from "@reduxjs/toolkit";
const toolBoxSlice = createSlice({
  name: "toolBox",
  initialState: {
    isToolBoxOpen: true,
    PENCIL: { size: 3, color: "black" },
    ERASER: { size: 3, color: "white" },
  },
  reducers: {
    hideToolBox: (state) => {
      state.isToolBoxOpen = false;
    },
    showToolBox: (state) => {
      state.isToolBoxOpen = true;
    },
    changePencilColor: (state, action) => {
      state.PENCIL.color = action.payload;
    },
    changeBrushSize: (state, action) => {
      state[action.payload.item].size = action.payload.size;
    },
  },
});

export const { hideToolBox, showToolBox, changePencilColor, changeBrushSize } =
  toolBoxSlice.actions;
export default toolBoxSlice.reducer;
