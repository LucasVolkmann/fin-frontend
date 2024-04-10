import axios from 'axios';
import { URL_AUTH, URL_USER } from '../../constants/Urls';
import { getItemStorage, setItemStorage, unsetItemStorage } from './storageProxy';
import { AUTHORIZATION_KEY } from '../../constants/authConstants';
import { UserType } from '../../types/UserType';
import { UserTokenType } from '../../types/UserTokenType';
import { NavigateFunction, redirect } from 'react-router-dom';
import { LoginRoutesEnum } from '../../../modules/login/routes';
import { connectionAPI_GET } from './connectionAPI';

export const setAuthorizationToken = (token: string) => setItemStorage(AUTHORIZATION_KEY, token);
export const unsetAuthorizationToken = () => unsetItemStorage(AUTHORIZATION_KEY);
export const getAuthorizationToken = () => getItemStorage(AUTHORIZATION_KEY);

export const auth = async (credentials: {email: string, password:string}): Promise<UserType | null> => {
  const response = await axios.post(URL_AUTH, credentials)
    .then((res) => {
      if (res.data.accessToken && res.data.user) {
        setAuthorizationToken(res.data.accessToken);
        return res.data.user;
      }
      return null;
    })
    .catch(() => {
      return null;
    });
  return response;
};

export const getTokenUserData = (): UserTokenType | undefined => {
  const token = getAuthorizationToken();
  if (token) {
    const splitToken = token.split('.');
    if (splitToken.length > 1) {
      return JSON.parse(window.atob(splitToken[1]));
    }
  }
  return undefined;
};

export const verifyLoggedIn = async () => {
  if (!getAuthorizationToken()) {
    return redirect(LoginRoutesEnum.LOGIN);
  }
  await connectionAPI_GET<UserType>(URL_USER)
    .catch(() => {
      unsetAuthorizationToken();
      return redirect(LoginRoutesEnum.LOGIN);
    });
  return null;
};

export const logout = (navigate: NavigateFunction) => {
  unsetAuthorizationToken();
  navigate(LoginRoutesEnum.LOGIN);
};
