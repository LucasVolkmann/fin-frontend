import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserType } from '../../../shared/types/UserType';

interface UserState {
  user?: UserType;
}

const initialState: UserState = {
  user: undefined,
};

export const counterSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUserAction: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
});

export const { setUserAction } = counterSlice.actions;

export default counterSlice.reducer;
