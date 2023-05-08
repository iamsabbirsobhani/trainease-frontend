import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ActivitiesSlice {
  selectedRoutes: any;
  from: string;
  to: string;
}

const initialState: ActivitiesSlice = {
  selectedRoutes: [],
  from: '',
  to: '',
};

export const ActivitiesSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    selectRoute: (state, action: PayloadAction<any>) => {
      state.selectedRoutes = action.payload;
    },
    setFrom: (state, action: PayloadAction<string>) => {
      state.from = action.payload;
    },
    setTo: (state, action: PayloadAction<string>) => {
      state.to = action.payload;
    },
  },
});

export const { selectRoute, setFrom, setTo } = ActivitiesSlice.actions;

export default ActivitiesSlice.reducer;
