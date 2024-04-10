import { useUserReducer } from '../../../store/reducers/userReducer/useUserReducer';

const MainScreen = () => {
  const {user} = useUserReducer();

  return <a>Olá, {user?.username}</a>;
};

export default MainScreen;
