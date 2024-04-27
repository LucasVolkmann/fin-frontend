import styled from 'styled-components';
import { HEADER_HEIGHT, MENU_WIDTH } from '../shared/constants';

export const Container = styled.div`
  width: calc(100% - ${MENU_WIDTH}px);
  height: ${HEADER_HEIGHT}px;
  box-sizing: border-box;

  float: right;
`;