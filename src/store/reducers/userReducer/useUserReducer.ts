import { useDispatch } from 'react-redux';

import { UserType } from '../../../shared/types/UserType';
import { useAppSelector } from '../../hooks';
import { setUsersAction } from '.';

export const useUserReducer = () => {
  const dispatch = useDispatch();
  const { user } = useAppSelector((state) => state.userReducer);

  const setUser = (user: UserType) => {
    dispatch(setUsersAction(user));
  };

  return { user, setUser };
};
