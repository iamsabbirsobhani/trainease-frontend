import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  isNavOpen: boolean;
}

const initialState: UiState = {
  isNavOpen: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openNav: (state) => {
      state.isNavOpen = true;
    },
  },
});

export const { openNav } = uiSlice.actions;

export default uiSlice.reducer;
