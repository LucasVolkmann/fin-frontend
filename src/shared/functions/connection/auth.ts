import axios from 'axios';
import { URL_AUTH } from '../../constants/Urls';
import { getItemStorage, setItemStorage, unsetItemStorage } from './storageProxy';
import { AUTHORIZATION_KEY } from '../../constants/authConstants';
import { UserType } from '../../types/UserType';

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