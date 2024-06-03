import { CardTitle } from '../sections.styles';
import { BannerContainer, Container, HeaderContainerSection, TransactionListContainer } from './TransactionsListComponent.styles';
import BannerComponent from './components/BannerComponent';
import TransactionListTable from './components/TransactionListTable';

const TransactionsListComponent = () => {
  return (
    <>
      <Container>
        <TransactionListContainer>
          <HeaderContainerSection>
            <CardTitle>Transações do mês atual</CardTitle>
            <select>
              <option>Sort by</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </HeaderContainerSection>
          <TransactionListTable />
        </TransactionListContainer>
        <BannerContainer>
          <BannerComponent />
        </BannerContainer>
      </Container>
    </>
  );
};

export default TransactionsListComponent;
