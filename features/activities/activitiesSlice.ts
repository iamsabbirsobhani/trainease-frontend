import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ActivitiesSlice {
  selectedRoutes: any;
}

const initialState: ActivitiesSlice = {
  selectedRoutes: [],
};

export const ActivitiesSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    selectRoute: (state, action: PayloadAction<any>) => {
      state.selectedRoutes = action.payload;
    },
  },
});

export const { selectRoute } = ActivitiesSlice.actions;

export default ActivitiesSlice.reducer;
