import styled from 'styled-components';
import { HEADER_HEIGHT } from '../shared/constants';

export const Container = styled.div`
  height: ${HEADER_HEIGHT}px;
  box-sizing: border-box;
`;

export const GreetingContainer = styled.div`
  width: fit-content;
  height: 100%;

  display: flex;
  align-items: center;
`;

export const Greeting = styled.span`
  font-family: Inter;
  font-weight: 500;
  font-size: 23px;
`;