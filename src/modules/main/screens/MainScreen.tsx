import { useEffect, useState } from 'react';
import { useUserReducer } from '../../../store/reducers/userReducer/useUserReducer';
import { useRequests } from '../../../shared/hooks/useRequests';
import { URL_USER } from '../../../shared/constants/Urls';
import { MethodsEnum } from '../../../shared/enumerations/methods.enum';
import Screen from '../../../shared/components/screen/Screen';
import { PagesEnum } from '../../../shared/components/screen/shared/PagesEnum';
import { CategoriesSection, HistorySection, RootContainer, TransactionListSection } from '../styles/MainScreen.styles';
import HistoryComponent from '../components/sections/history/HistoryComponent';
import CategoriesComponent from '../components/sections/categories/CategoriesComponent';
import TransactionsListComponent from '../components/sections/transactions-list/TransactionsListComponent';

const MainScreen = () => {
  const {user, setUser} = useUserReducer();
  const {request} = useRequests();
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if(!user) {
      request(URL_USER, MethodsEnum.GET, setUser);
    }
  });

  return (
    <Screen
      currentPage={PagesEnum.DASHBOARD}
    >
      <RootContainer style={windowDimensions.width < 1500? {justifyContent: 'center'}:{}}>
        <HistorySection style={windowDimensions.width < 1500? {width: '80%'} : {}}>
          <HistoryComponent />
        </HistorySection>
        <CategoriesSection style={windowDimensions.width < 1500? {width: '80%'} : {}}>
          <CategoriesComponent />
        </CategoriesSection>
        <TransactionListSection style={windowDimensions.width < 1500? {width: '80%'} : {}}>
          <TransactionsListComponent />
        </TransactionListSection>
      </RootContainer>
    </Screen>
  );
};

export default MainScreen;
