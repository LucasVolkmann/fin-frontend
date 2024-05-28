import { CategoryNumbersType } from './CategoryNumbersType';

export interface CategorySummaryType {
  generalCategoryNumbers: CategoryNumbersType[],
  byMonth: {
    month: number,
    categoryNumbers: CategoryNumbersType[]
  }
}