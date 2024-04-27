import { useUserReducer } from '../../../../store/reducers/userReducer/useUserReducer';
import { Container, Greeting, GreetingContainer } from './ScreenHeader.styles';
import UsernameGreeting from './UsernameGreeting';

const ScreenHeader = () => {
  const {user} = useUserReducer();

  return (
    <>
      <Container>
        <GreetingContainer>
          <Greeting>
            Bem-vindo, <UsernameGreeting username={user?.username || ''} />
          </Greeting>
        </GreetingContainer>
      </Container>
    </>
  );
};

export default ScreenHeader;
