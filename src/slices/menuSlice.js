import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    activeMenuItem: "PENCIL",
  },
  reducers: {
    handleMenuItemClick: (state, action) => {
      state.activeMenuItem = action.payload;
    },
  },
});

export const { handleMenuItemClick } = menuSlice.actions;
export default menuSlice.reducer;
