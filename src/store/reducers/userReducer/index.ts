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
    setUsersAction: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
});

export const { setUsersAction } = counterSlice.actions;

export default counterSlice.reducer;
