import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CategoryNumbersType } from '../../../shared/types/CategoryNumbersType';

interface CategoryNumberState {
  categoryNumbers?: CategoryNumbersType[];
}

const initialState: CategoryNumberState = {
  categoryNumbers: [],
};

export const counterSlice = createSlice({
  name: 'categoryNumbersReducer',
  initialState,
  reducers: {
    setCategoryNumbersAction: (state, action: PayloadAction<CategoryNumbersType[]>) => {
      state.categoryNumbers = action.payload;
    },
  },
});

export const { setCategoryNumbersAction } = counterSlice.actions;

export default counterSlice.reducer;
