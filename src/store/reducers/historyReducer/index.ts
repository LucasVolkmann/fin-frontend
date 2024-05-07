import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { HistoryElementType } from '../../../shared/types/HistoryElementType';

interface HistoryState {
  history?: HistoryElementType[];
}

const initialState: HistoryState = {
  history: [],
};

export const counterSlice = createSlice({
  name: 'historyReducer',
  initialState,
  reducers: {
    setHistoryAction: (state, action: PayloadAction<HistoryElementType[]>) => {
      state.history = action.payload;
    },
  },
});

export const { setHistoryAction } = counterSlice.actions;

export default counterSlice.reducer;
