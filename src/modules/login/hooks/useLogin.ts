import { useEffect } from 'react';
import { useUserReducer } from '../../../store/reducers/userReducer/useUserReducer';
import { useNavigate } from 'react-router-dom';
import { MainRoutesEnum } from '../../main/routes';

export const useLogin = () => {
  const { user } = useUserReducer();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(MainRoutesEnum.MAIN);
    }
  });

  return {
    user,
  };
};
