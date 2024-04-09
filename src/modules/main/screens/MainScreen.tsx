import { useEffect } from 'react';
import { useUserReducer } from '../../../store/reducers/userReducer/useUserReducer';
import { LoginRoutesEnum } from '../../login/routes';
import { useNavigate } from 'react-router-dom';

const MainScreen = () => {
  const {user} = useUserReducer();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(LoginRoutesEnum.LOGIN);
    }
  });

  return <a>Olá, {user?.username}</a>;
};

export default MainScreen;
