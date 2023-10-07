import { createSlice } from "@reduxjs/toolkit";
const toolBoxSlice = createSlice({
  name: "toolBox",
  initialState: {
    isToolBoxOpen: true,
    PENCIL: { size: 3, color: "black", cap: 10 },
    ERASER: { size: 3, color: "white", cap: 10 },
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
    changeCapSize: (state, action) => {
      state[action.payload.item].cap = action.payload.cap;
    },
  },
});

export const { hideToolBox, showToolBox, changePencilColor, changeBrushSize, changeCapSize } =
  toolBoxSlice.actions;
export default toolBoxSlice.reducer;
