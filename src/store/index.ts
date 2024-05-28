import { configureStore } from '@reduxjs/toolkit';

import userReducer from './reducers/userReducer/';
import historyReducer from './reducers/historyReducer/';
import categoryNumberReducer from './reducers/categoryNumberReducer';

export const store = configureStore({
  reducer: {
    userReducer,
    historyReducer,
    categoryNumberReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
