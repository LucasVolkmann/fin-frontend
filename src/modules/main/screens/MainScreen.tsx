import { useEffect } from 'react';
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

  useEffect(() => {
    if(!user) {
      request(URL_USER, MethodsEnum.GET, setUser);
    }
  });

  return (
    <Screen
      currentPage={PagesEnum.DASHBOARD}
    >
      <RootContainer>
        <HistorySection>
          <HistoryComponent />
        </HistorySection>
        <CategoriesSection>
          <CategoriesComponent />
        </CategoriesSection>
        <TransactionListSection>
          <TransactionsListComponent />
        </TransactionListSection>
      </RootContainer>
    </Screen>
  );
};

export default MainScreen;
