import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    activeMenuItem: "PENCIL",
    actionMenuItem: null,
  },
  reducers: {
    handleMenuItemClick: (state, action) => {
      state.activeMenuItem = action.payload;
    },
    handleActionMenuItemClick: (state,action) => {
      state.actionMenuItem = action.payload;
    },
  },
});

export const { handleMenuItemClick, handleActionMenuItemClick } = menuSlice.actions;
export default menuSlice.reducer;
