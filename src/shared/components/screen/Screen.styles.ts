import styled from 'styled-components';
import { HEADER_HEIGHT, MENU_WIDTH } from './shared/constants';

export const ScreenContainer = styled.div`
  min-height: 100vh;

  padding-left: ${MENU_WIDTH}px;

  background-color: #EEEDEB;
`;

export const ChildrenContainer = styled.div`
  box-sizing: border-box;
  min-height: calc(100% - ${HEADER_HEIGHT}px);
`;