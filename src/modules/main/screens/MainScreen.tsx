import { useEffect } from 'react';
import { useUserReducer } from '../../../store/reducers/userReducer/useUserReducer';
import { useRequests } from '../../../shared/hooks/useRequests';
import { URL_USER } from '../../../shared/constants/Urls';
import { MethodsEnum } from '../../../shared/enumerations/methods.enum';
import Screen from '../../../shared/components/screen/Screen';
import { PagesEnum } from '../../../shared/components/screen/shared/PagesEnum';

const MainScreen = () => {
  const {user, setUser} = useUserReducer();
  const {request} = useRequests();

  useEffect(() => {
    if(!user) {
      request(URL_USER, MethodsEnum.GET, setUser);
    }
  });

  return (
    <Screen
      currentPage={PagesEnum.DASHBOARD}
    >
      <a>MAIN CONTENT</a>
    </Screen>
  );
};

export default MainScreen;
