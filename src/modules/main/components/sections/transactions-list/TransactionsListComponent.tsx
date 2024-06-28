import { useState } from 'react';
import { CardTitle } from '../sections.styles';
import { Button, Container, HeaderContainerSection, TransactionListContainer } from './TransactionsListComponent.styles';
import TransactionListTable from './components/TransactionListTable';
import Modal from '../../../../../shared/components/modal/Modal';

const TransactionsListComponent = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      <Container>
        <TransactionListContainer>
          <HeaderContainerSection>
            <CardTitle>Transações do mês atual</CardTitle>
            <Button
              type="primary"
              size="large"
              onClick={showModal}
            >
              Adicionar
            </Button>
            <Modal 
              title="Adicionar Transação" 
              open={isModalOpen} 
              onOk={handleOk} 
              onCancel={handleCancel}
            />
          </HeaderContainerSection>
          <TransactionListTable />
        </TransactionListContainer>
      </Container>
    </>
  );
};

export default TransactionsListComponent;
