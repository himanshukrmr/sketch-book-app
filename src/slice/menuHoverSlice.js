// hoverSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hoveredDiv: null,
};

const hoverSlice = createSlice({
  name: 'hover',
  initialState,
  reducers: {
    setHoveredDiv: (state, action) => {
      state.hoveredDiv = action.payload;
    },
  },
});

export const { setHoveredDiv } = hoverSlice.actions;
export default hoverSlice.reducer;
