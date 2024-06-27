import { CardTitle } from '../sections.styles';
import { Container, HeaderContainerSection, TransactionListContainer } from './TransactionsListComponent.styles';
import TransactionListTable from './components/TransactionListTable';

const TransactionsListComponent = () => {
  return (
    <>
      <Container>
        <TransactionListContainer>
          <HeaderContainerSection>
            <CardTitle>Transações do mês atual</CardTitle>
          </HeaderContainerSection>
          <TransactionListTable />
        </TransactionListContainer>
      </Container>
    </>
  );
};

export default TransactionsListComponent;
