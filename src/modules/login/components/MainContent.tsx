import { Button } from 'antd';
import { LoginImage, PresentationContainer, PresentationText, SVGCircleStyled, TitleStyled } from '../styles/MainContent.styles';


const MainContent = () => {
  return (
    <>
      <PresentationContainer>
        <TitleStyled>FIN</TitleStyled>
        <PresentationText>Acompanhe sua vida financeira de maneira descomplicada!</PresentationText>
        <Button type="primary" style={{backgroundColor: '#FE981E', borderRadius:'20px'}}>Saiba Mais!</Button>
      </PresentationContainer>
      <SVGCircleStyled style={{left:'-300px', bottom: '-200px'}}/>
      <SVGCircleStyled style={{left:'-200px', bottom: '-225px'}}/>
      <LoginImage src="./login-image.png" />
    </>
  );
};

export default MainContent;
