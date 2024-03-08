import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheStorage: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheStorage } = searchSlice.actions;
export default searchSlice.reducer;
