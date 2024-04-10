import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';

const mainTitleStyle: React.CSSProperties = {
  fontWeight: 'bold',
  marginBottom: '0px',
  width: '80%',
  fontFamily: 'poppins',
};

const pStyle: React.CSSProperties = {
  fontSize: '22px',
  marginBottom: '40px',
  width: '80%',
  fontFamily: 'poppins',
};

const HelloCard = () => {
  return (
    <>
      <Title level={1} style={mainTitleStyle}>Olá!</Title>
      <Paragraph style={pStyle}>Faça o login para acessar a sua conta.</Paragraph>
    </>
  );
};

export default HelloCard;
