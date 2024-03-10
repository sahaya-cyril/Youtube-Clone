import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    filterbtn: false,
    filterbtnSearch: null,
  },
  reducers: {
    cacheStorage: (state, action) => {
      state = Object.assign(state, action.payload);
    },
    filterSearch: (state, action) => {
      state.filterbtn = true;
      state.filterbtnSearch = action.payload;
    },
  },
});

export const { cacheStorage, filterSearch } = searchSlice.actions;
export default searchSlice.reducer;
