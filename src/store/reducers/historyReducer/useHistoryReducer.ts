import { useDispatch } from 'react-redux';

import { HistoryElementType } from '../../../shared/types/HistoryElementType';
import { useAppSelector } from '../../hooks';
import { setHistoryAction } from '.';

export const useHistoryReducer = () => {
  const dispatch = useDispatch();
  const { history } = useAppSelector((state) => state.historyReducer);

  const setHistory = (history: HistoryElementType[]) => {
    dispatch(setHistoryAction(history));
  };

  return { history, setHistory };
};
