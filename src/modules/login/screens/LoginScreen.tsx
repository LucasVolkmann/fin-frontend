import { Container, LoginForm } from '../styles/LoginScreen.styles';

const LoginScreen = () => {


  return <Container>
    <LoginForm>
      <input type="email" placeholder="E-mail"/>
      <input type="password" placeholder="Senha"/>
      <input type="button" value="Entrar"/>
    </LoginForm>
  </Container>;
};

export default LoginScreen;
