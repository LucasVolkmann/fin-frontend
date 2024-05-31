import { useNavigate } from 'react-router-dom';
import { logout } from '../../../../../functions/connection/auth';
import { Container } from './LogoutButton.styles';
import { Tooltip } from 'antd';

export const LogoutButton = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    logout(navigate);
  };
  
  return (
    <>
      <Tooltip
        placement="left"
        title={'Sair'}
      >
        <Container onClick={handleOnClick}>
          <svg style={{display: 'flex'}} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M18 8L22 12M22 12L18 16M22 12H9M15 4.20404C13.7252 3.43827 12.2452 3 10.6667 3C5.8802 3 2 7.02944 2 12C2 16.9706 5.8802 21 10.6667 21C12.2452 21 13.7252 20.5617 15 19.796" stroke="#ce3b3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Container>
      </Tooltip>
    </>
  );
};