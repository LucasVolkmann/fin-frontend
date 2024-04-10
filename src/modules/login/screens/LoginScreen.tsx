import { useLogin } from '../hooks/useLogin';
import { Container, LoginForm } from '../styles/LoginScreen.styles';

const LoginScreen = () => {
  const {
    disableButton,
    credentials,
    handleOnChangeLoginInput,
    handleOnClickLoginButton, 
    wrongCredentials,
  } = useLogin();

  return (
    <Container>
      <LoginForm style={wrongCredentials? {border: '2px solid red'} : {}}>
        <input type="email" placeholder="E-mail" value={credentials.email} onChange={(e) => handleOnChangeLoginInput(e, 'email')}/>
        <input type="password" placeholder="Senha" value={credentials.password} onChange={(e) => handleOnChangeLoginInput(e, 'password')}/>
        <input disabled={disableButton} type="button" value="Entrar" onClick={handleOnClickLoginButton}/>
      </LoginForm>
    </Container>
  );
};

export default LoginScreen;
