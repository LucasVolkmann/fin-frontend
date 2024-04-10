import { useEffect, useState } from 'react';
import { useUserReducer } from '../../../store/reducers/userReducer/useUserReducer';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../shared/functions/connection/auth';

type InputAttribute = 'email' | 'password'; 

export const useLogin = () => {
  const [credentials, setCredentials] = useState({
    //FIXME:
    // email: 'lucas@email.com',
    // password: 'test123',
    email: '',
    password: '',
  });
  const [disableButton, setDisableButton] = useState(true);
  const {user, setUser} = useUserReducer();
  const navigate = useNavigate();

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
    credentials,
    handleOnChangeLoginInput,
    handleOnClickLoginButton,
    user,
  };
};
