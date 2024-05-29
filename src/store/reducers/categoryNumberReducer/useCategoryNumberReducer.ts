import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../hooks';
import { setCategoryNumbersAction } from '.';
import { CategorySummaryType } from '../../../shared/types/CategorySummaryType';

export const useCategoryNumberReducer = () => {
  const dispatch = useDispatch();
  const { categoryNumbers } = useAppSelector((state) => state.categoryNumberReducer);

  const setCategoryNumbers = (categoryNumbers: CategorySummaryType) => {
    categoryNumbers.generalCategoryNumbers.sort((cat1, cat2) => cat2.amount - cat1.amount);
    dispatch(setCategoryNumbersAction(categoryNumbers.generalCategoryNumbers));
  };

  return { categoryNumbers, setCategoryNumbers };
};
