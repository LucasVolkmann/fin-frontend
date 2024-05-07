import { configureStore } from '@reduxjs/toolkit';

import userReducer from './reducers/userReducer/';
import historyReducer from './reducers/historyReducer/';

export const store = configureStore({
  reducer: {
    userReducer,
    historyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
