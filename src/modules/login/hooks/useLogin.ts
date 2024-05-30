import { useEffect, useState } from 'react';
import { useUserReducer } from '../../../store/reducers/userReducer/useUserReducer';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../shared/functions/connection/auth';
import { message } from 'antd';

type InputAttribute = 'email' | 'password'; 

export const useLogin = () => {
  const [credentials, setCredentials] = useState({
    // FIXME
    email: 'lucas@email.com',
    password: 'test123',
    // email: '',
    // password: '',
  });
  const [messageApi, contextHolder] = message.useMessage();
  const [emailStatus, setEmailStatus] = useState<'error' | ''>('');
  const [passwordStatus, setPasswordStatus] = useState<'error' | ''>('');
  const [loading, setLoading] = useState(false);
  const {user, setUser} = useUserReducer();
  const navigate = useNavigate();

  useEffect(() => {
    if (credentials.email) {
      setEmailStatus('');
    }
    if (credentials.password) {
      setPasswordStatus('');
    }
  }, [credentials]);

  const handleOnClickLoginButton = async () => {
    setLoading(true);
    if (!credentials.email) {
      setEmailStatus('error');
      setLoading(false);
      return;
    }
    if (!credentials.password) {
      setPasswordStatus('error');
      setLoading(false);
      return;
    }
    const user = await auth(credentials);
    if (user) {
      setUser(user);
      navigate('/');
    } else {
      error('E-mail ou senha inválidos.');
    }
    setLoading(false);
  };

  const error = (message: string) => {
    messageApi.open({
      type: 'error',
      content: message,
    });
  };

  const handleOnChangeLoginInput = (event: React.ChangeEvent<HTMLInputElement>, inputName: InputAttribute) => {
    const { value } = event.target;
    setCredentials({
      ...credentials,
      [inputName]: value,
    });
  };

  return {
    loading,
    contextHolder,
    emailStatus,
    passwordStatus,
    credentials,
    handleOnChangeLoginInput,
    handleOnClickLoginButton,
    user,
  };
};
