import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginRoutesEnum } from '../../login/routes';
import { useUserReducer } from '../../../store/reducers/userReducer/useUserReducer';

const MainScreen = () => {
  const navigate = useNavigate();
  const {user} = useUserReducer();

  useEffect(() => {
    if (!user) {
      navigate(LoginRoutesEnum.LOGIN);
    }
  }, []);

  return <a>Olá, {user?.name}</a>;
};

export default MainScreen;
