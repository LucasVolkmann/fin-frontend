import styled from 'styled-components';
import { CommonCard } from '../components/sections/sections.styles';

export const RootContainer = styled.div`
  padding: 0px 36px;
  box-sizing: border-box;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 32px;
`;

export const HistorySection = styled(CommonCard)`
  width: 37.5%;
  min-width: 500px;
`;

export const CategoriesSection = styled(CommonCard)`
  width: 57.5%;
  min-width: 700px;
`;

export const TransactionListSection = styled(CommonCard)`
  width: 100%;
`;