import { useEffect, useState } from 'react';
import { useUserReducer } from '../../../store/reducers/userReducer/useUserReducer';
import { useNavigate } from 'react-router-dom';
import { MainRoutesEnum } from '../../main/routes';
import { auth } from '../../../shared/functions/connection/auth';

type InputAttribute = 'email' | 'password'; 

export const useLogin = () => {
  const [credentials, setCredentials] = useState({
    //FIXME:
    email: 'lucas@email.com',
    password: 'test123',
  });
  const [disableButton, setDisableButton] = useState(true);
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const {user, setUser} = useUserReducer();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(MainRoutesEnum.MAIN);
    }
  });

  useEffect(() => {
    if (credentials.email && credentials.password) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [credentials]);

  const handleOnClickLoginButton = async () => {
    const user = await auth(credentials);
    if (user) {
      setUser(user);
      navigate('/');
    } else {
      setWrongCredentials(true);
    }
  };

  const handleOnChangeLoginInput = (event: React.ChangeEvent<HTMLInputElement>, inputName: InputAttribute) => {
    const { value } = event.target;
    setCredentials({
      ...credentials,
      [inputName]: value,
    });
  };

  return {
    disableButton,
    wrongCredentials,
    credentials,
    handleOnChangeLoginInput,
    handleOnClickLoginButton,
    user,
  };
};
