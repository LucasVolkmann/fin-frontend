import { ChangeEvent } from 'react';
import { useLogin } from '../hooks/useLogin';
import { Container, FormContainer, ImageContainer, InputBox, LoginForm } from '../styles/LoginScreen.styles';
import { LockFilled, UserOutlined } from '@ant-design/icons';
import LoginInputEmail from '../components/LoginInputEmail';
import LoginInputPassword from '../components/LoginInputPassword';
import LoginButton from '../components/LoginButton';
import HelloCard from '../components/HelloCard';
import MainContent from '../components/MainContent';

const LoginScreen = () => {
  const {
    credentials,
    handleOnChangeLoginInput,
    handleOnClickLoginButton,
  } = useLogin();

  return (
    <Container>

      <ImageContainer>
        <MainContent />
      </ImageContainer>
      <FormContainer>
        <LoginForm >
          <HelloCard />
          <InputBox>
            <LoginInputEmail 
              type="email" 
              placeholder="E-mail" 
              prefix={<UserOutlined style={{width: '24px', color: 'gray'}}/>}
              value={credentials.email} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChangeLoginInput(e, 'email')}
            />
          </InputBox>
          <InputBox>
            <LoginInputPassword
              type="password" 
              placeholder="Senha" 
              prefix={<LockFilled style={{width: '24px', color: 'gray'}}/>}
              value={credentials.password} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChangeLoginInput(e, 'password')}
            />
          </InputBox>
          <InputBox>
            <LoginButton
              onClick={handleOnClickLoginButton}
              style={{border: 'none'}}
            />
          </InputBox>
        </LoginForm>
      </FormContainer>
    </Container>
  );
};

export default LoginScreen;
