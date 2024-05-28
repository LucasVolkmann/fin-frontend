import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../hooks';
import { setCategoryNumbersAction } from '.';
import { CategorySummaryType } from '../../../shared/types/CategorySummaryType';

export const useCategoryNumberReducer = () => {
  const dispatch = useDispatch();
  const { categoryNumbers } = useAppSelector((state) => state.categoryNumberReducer);

  const setCategoryNumbers = (categoryNumbers: CategorySummaryType) => {
    dispatch(setCategoryNumbersAction(categoryNumbers.generalCategoryNumbers));
  };

  return { categoryNumbers, setCategoryNumbers };
};
