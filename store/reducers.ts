import { combineReducers } from '@reduxjs/toolkit';
import uiReducer from '../features/ui/uiSlice';
import activitiesSlice from '@/features/activities/activitiesSlice';

const rootReducer = combineReducers({
  ui: uiReducer,
  activities: activitiesSlice,
});

export default rootReducer;
