import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count = state.count + action.payload;
    },

    decrement: (state, action) => {
      state.count = state.count - action.payload;
      if (state.count === 0) {
        state.count = 0;
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
