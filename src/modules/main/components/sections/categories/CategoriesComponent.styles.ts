import styled from 'styled-components';
import { CardTitle } from '../sections.styles';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ChartContainer = styled.div`
  min-width: 400px;
  border-right: 1px solid rgba(0,0,0,0.1);
`;

export const GridContainer = styled.div`
  width: 80%;
  min-width: 160px;
  max-height: 250px;
  margin: auto 0px;
  overflow: scroll;
  overflow-x: hidden;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
`;

export const GridTitle = styled(CardTitle)`
    width: 85%;
    text-align: center;
`;

