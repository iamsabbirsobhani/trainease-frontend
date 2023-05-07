import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  selectedRoutes: string[];
}

const initialState: UiState = {
  selectedRoutes: [],
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    selectRoute: (state, action: PayloadAction<string>) => {
      state.selectedRoutes.push(action.payload);
    },
  },
});

export const { selectRoute } = uiSlice.actions;

export default uiSlice.reducer;
