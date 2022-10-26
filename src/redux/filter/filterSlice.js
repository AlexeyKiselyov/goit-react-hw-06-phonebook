import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: "",

}
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export default filterSlice.reducer;
export const { updateFilter } = filterSlice.actions;
