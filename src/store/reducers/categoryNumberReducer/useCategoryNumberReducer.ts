import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../hooks';
import { setCategoryNumbersAction } from '.';
import { CategoryNumbersType } from '../../../shared/types/CategoryNumbersType';

export const useUserReducer = () => {
  const dispatch = useDispatch();
  const { categoryNumbers } = useAppSelector((state) => state.categoryNumberReducer);

  const setCategoryNumbers = (categoryNumbers: CategoryNumbersType[]) => {
    dispatch(setCategoryNumbersAction(categoryNumbers));
  };

  return { categoryNumbers, setCategoryNumbers };
};
