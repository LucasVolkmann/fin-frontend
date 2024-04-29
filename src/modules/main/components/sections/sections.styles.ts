import { Card } from 'antd';
import styled from 'styled-components';

export const CardTitle = styled.span`
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
`;

export const CommonCard = styled(Card)`
  box-sizing: border-box;

  padding: 12px;
  
  border-radius: 48px;

  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.13);
`;
