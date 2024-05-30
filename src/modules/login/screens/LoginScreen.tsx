import React, { ChangeEvent, useEffect } from 'react';
import { useLogin } from '../hooks/useLogin';
import { Container, FormContainer, ImageContainer, InputBox, LoginForm } from '../styles/LoginScreen.styles';
import { LockFilled, UserOutlined } from '@ant-design/icons';
import LoginInputEmail from '../components/LoginInputEmail';
import LoginInputPassword from '../components/LoginInputPassword';
import LoginButton from '../components/LoginButton';
import HelloCard from '../components/HelloCard';
import MainContent from '../components/MainContent';
import { getAuthorizationToken, unsetAuthorizationToken } from '../../../shared/functions/connection/auth';
import { URL_USER } from '../../../shared/constants/Urls';
import { connectionAPI_GET } from '../../../shared/functions/connection/connectionAPI';
import { UserType } from '../../../shared/types/UserType';
import { useNavigate } from 'react-router-dom';
import { MainRoutesEnum } from '../../main/routes';

const LoginScreen = () => {
  const {
    loading,
    credentials,
    contextHolder,
    emailStatus,
    passwordStatus,
    handleOnChangeLoginInput,
    handleOnClickLoginButton,
  } = useLogin();
  const navigate = useNavigate();

  const handleFormKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key == 'Enter') {
      handleOnClickLoginButton();
    }
  };

  useEffect(() => {
    if (getAuthorizationToken()) {
      connectionAPI_GET<UserType>(URL_USER)
        .then((res) => {
          if (res && res.id > 0) {
            return navigate(MainRoutesEnum.MAIN);
          }
        }).catch(() => {
          unsetAuthorizationToken();
        });
    }
  }, []);

  return (
    <>
      {contextHolder}
      <Container>
        <ImageContainer>
          <MainContent />
        </ImageContainer>
        <FormContainer>
          <LoginForm onKeyDown={handleFormKeyDown}>
            <HelloCard />
            <InputBox>
              <LoginInputEmail 
                type="email" 
                status={emailStatus}
                placeholder="E-mail" 
                prefix={<UserOutlined style={{width: '24px', color: 'gray'}}/>}
                value={credentials.email} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChangeLoginInput(e, 'email')}
              />
            </InputBox>
            <InputBox>
              <LoginInputPassword
                type="password" 
                status={passwordStatus}
                placeholder="Senha" 
                prefix={<LockFilled style={{width: '24px', color: 'gray'}}/>}
                value={credentials.password} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChangeLoginInput(e, 'password')}
              />
            </InputBox>
            <InputBox>
              <LoginButton
                loading={loading}
                onClick={handleOnClickLoginButton}
                style={{border: 'none'}}
              />
            </InputBox>
          </LoginForm>
        </FormContainer>
      </Container>
    </>
  );
};

export default LoginScreen;
