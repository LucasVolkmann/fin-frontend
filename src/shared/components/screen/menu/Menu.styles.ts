import styled from 'styled-components';
import { MENU_WIDTH } from '../shared/constants';

export const Container = styled.div`
  height: 100vh;
  width: ${MENU_WIDTH}px;
  box-sizing: border-box;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  
  position: fixed;
  `;

export const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  
  margin-top: calc((100% - 60px)/2);
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  border-radius: 30px;
  
  background-color: #8B8999;
  `;

export const SideMenuContainer = styled.div`
  width: 60px;
  min-height: 120px;
  box-sizing: border-box;
  
  margin-top: calc((100% - 60px)/2);
  padding-top: 10px;
  padding-bottom: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  
  border-radius: 30px;
  
  background-color: #8B8999;
`;

export const SpanStyle = styled.span`
  width: 45px; 
  height: 45px; 

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 22.5px;

  cursor: pointer;

  svg {
    width: 50%;
  }
`;