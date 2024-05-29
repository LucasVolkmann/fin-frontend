import styled from 'styled-components';
import SVGCircle from '../components/SVGCircle';

const svgSize = '640px';

export const SVGCircleStyled = styled(SVGCircle)`
  width: ${svgSize};
  position: absolute;
`;

export const LoginImage = styled.img`
  position: absolute;
  left: 50%;
  bottom: 30px;
`;

export const TitleStyled = styled.h1`
  font-size: 150px;
  font-family: Fantasy;
  color: #FB971E;

  margin-bottom: -20px;
`;

export const PresentationText = styled.p`
  font-family: poppins;
  font-size: 22px;
  color: white;
  margin-bottom: 30px;
`;

export const PresentationContainer = styled.div`
  position: absolute;
  bottom: 55%;
  left: 15%;
`;