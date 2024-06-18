import styled from 'styled-components';
import SVGLine from './SVGLine';

export const FakeChartContainer = styled.div`
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const Column = styled.div`
  width: 20px;
  height: 200px;

  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const OverSVG = styled(SVGLine)`
  position: absolute;
  transform: translateY(-20px);
`;