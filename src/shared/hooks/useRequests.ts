import { useState } from 'react';
import { NavigateFunction } from 'react-router-dom';

import { URL_AUTH } from '../constants/Urls';
import { MethodsEnum } from '../enumerations/methods.enum';
import { setAuthorizationToken } from '../functions/connection/auth';
import ConnectionAPI, { connectionAPI_POST } from '../functions/connection/connectionAPI';
import { AuthType } from '../types/AuthType';
import { useUserReducer } from '../../store/reducers/userReducer/useUserReducer';
import { MainRoutesEnum } from '../../modules/main/routes';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const {setUser} = useUserReducer();
  // const navigate = useNavigate();

  const request = async <T>(
    url: string,
    method: MethodsEnum,
    saveGlobal?: (object: T) => void,
    body?: unknown,
  ): Promise<T | undefined> => {
    setLoading(true);

    const response: T | undefined = await ConnectionAPI.connect<T>(url, method, body)
      .then((res) => {
        if (saveGlobal) {
          saveGlobal(res);
        }
        return res;
      })
      .catch(() => {
        //FIXME: handle this
        return undefined;
      });

    setLoading(false);
    return response;
  };

  const authRequest = async (navigate: NavigateFunction, body: any): Promise<void> => {
    setLoading(true);
    await connectionAPI_POST<AuthType>(URL_AUTH, body)
      .then((result) => {
        if (result.accessToken) {
          setUser(result.user);
          setAuthorizationToken(result.accessToken);
        } else {
          throw new Error('Server error.');
        }
        navigate(MainRoutesEnum.MAIN);
        return;
      })
      .catch(() => {
        //FIXME: handle this
        return;
      });
    setLoading(false);
  };

  return {
    loading,
    request,
    authRequest,
  };
};
