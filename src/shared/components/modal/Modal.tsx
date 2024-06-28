import { Modal as AntdModal, DatePicker, Form, FormProps, InputNumber, ModalProps, Select } from 'antd';
import Input from '../input/Input';
import { ModalContainer } from './Modal.style';
import { useEffect, useState } from 'react';
import { CategoryType } from '../../types/CategoryType';
import { connectionAPI_GET, connectionAPI_POST } from '../../functions/connection/connectionAPI';
import { URL_CATEGORY, URL_TRANSACTION } from '../../constants/Urls';
import { TransactionType } from '../../types/TransactionType';
import { Button } from '../../../modules/main/components/sections/transactions-list/TransactionsListComponent.styles';

const Modal = ({...props} : ModalProps) => {

  const [availableCategories, setAvailableCategories] = useState<CategoryType[]>([]);
  const [currentTransaction, setCurrentTransaction] = useState<TransactionType>({
    id: 0,
    amount: 0,
    date: new Date(),
    details: 'details must be visible',
    categoryId: 0,
  });

  useEffect(() => {
    console.clear();
    console.log(`currentTransaction.id: ${currentTransaction.id}`);
    console.log(`currentTransaction.amount: ${currentTransaction.amount}`);
    console.log(`currentTransaction.date: ${currentTransaction.date}`);
    console.log(`currentTransaction.details: ${currentTransaction.details}`);
    console.log(`currentTransaction.categoryId: ${currentTransaction.categoryId}`);
  }, [currentTransaction]);

  useEffect(() => {
    getCategories();
  }), [];

  const getCategories = async () => {
    const categoriesResponse = await connectionAPI_GET<CategoryType[]>(URL_CATEGORY);
    setAvailableCategories(categoriesResponse);
  };

  const selectBefore = (
    <Select defaultValue="add" style={{ width: 60 }}>
      <Select.Option value="add">+</Select.Option>
      <Select.Option value="minus">-</Select.Option>
    </Select>
  );

  type FieldType = {
    amount?: string;
    date?: string;
    details?: string;
    categoryId?: string;
  };
  
  const onFinish: FormProps<FieldType>['onFinish'] = () => {
    createTransaction(currentTransaction);
  };
  
  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  const createTransaction = async (values: Omit<TransactionType, 'id'>) => {
    await connectionAPI_POST(URL_TRANSACTION, values)
      .then(() => handleSuccessCreate())
      .catch((err) => console.log(err));
  };

  const handleSuccessCreate = () => {
    resetFields();

  };

  const resetFields = () => {
    setCurrentTransaction({
      id: 0,
      amount: 0,
      date: new Date(),
      details: '',
      categoryId: 0,
    });
  };

  type TransactionAttributes = 'amount' | 'details' | 'date' | 'categoryId'
  type ValueType = number | string | Date | null
  const genericHandleOnChange = (value: ValueType, field: TransactionAttributes) => {
    setCurrentTransaction({
      ...currentTransaction,
      [field]: value,
    });
  };

  return (
    <>
      <AntdModal
        footer={[]}
        {...props}
      >
        <ModalContainer>
          <Form
            name="transaction-form"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="Valor"
              name="amount"
              rules={[{ required: true, message: 'O valor deve ser diferente de zero!' }]}
            >
              <InputNumber 
                addonBefore={selectBefore} 
                addonAfter="$"
                value={currentTransaction.amount}
                onChange={(value) => genericHandleOnChange(value, 'amount')}
                style={{width:'100%'}}
              />
            </Form.Item>

            <Form.Item<FieldType>
              label="Data"
              name="date"
              rules={[{ required: true, message: 'Insira uma data válida!' }]}
            >
              <DatePicker
                style={{width:'100%'}}
                value={currentTransaction.date}
                onChange={(value: Date) => genericHandleOnChange(value, 'date')}
              />
            </Form.Item>

            <Form.Item<FieldType>
              label="Detalhes"
              name="details"
            >
              <Input
                value={currentTransaction.details}
                onChange={(value) => genericHandleOnChange(value.target.value, 'details')} 
              />
            </Form.Item>

            <Form.Item<FieldType>
              label="Categoria"
              name="categoryId"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Select
                style={{width:'100%'}}
                onChange={(value) => genericHandleOnChange(value, 'categoryId')}
              >
                {availableCategories.map((cat) => {
                  return (
                    <Select.Option 
                      key={String(cat.id)} 
                      value={cat.id}
                    >
                      {cat.name}
                    </Select.Option>);
                })}
              </Select>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 10 }}>
              <Button type="primary" htmlType="submit">
                Adicionar
              </Button>
            </Form.Item>
          </Form>
        </ModalContainer>
      </AntdModal>
    </>
  );
};

export default Modal;
