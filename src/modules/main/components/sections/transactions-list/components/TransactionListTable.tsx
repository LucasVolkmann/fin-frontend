import { Table, TableProps, Tag } from 'antd';
import { valueFormatter } from '../../../../../../shared/functions/formatters';
import { useTransactionListTable } from './hooks/useTransactionListTable';

interface DisplayDataType {
  key: string;
  details: string;
  date: Date;
  amount: number;
  categoryName: string;
}

const columns: TableProps<DisplayDataType>['columns'] = [
  {
    title: 'Detalhes',
    dataIndex: 'details',
    key: 'details',
    width: '100px',
  },
  {
    title: 'Data',
    dataIndex: 'date',
    key: 'date',
    width: '100px',
    render: (value: Date) => value.toString().slice(0, 21),
  },
  {
    title: 'Valor',
    dataIndex: 'amount',
    key: 'amount',
    width: '100px',
    render: (value) => valueFormatter(value),
  },
  {
    title: 'Categoria',
    dataIndex: 'categoryName',
    key: 'category',
    width: '100px',
    render: (value) => (
      <>
        <Tag color={'blue'}>
          {value}
        </Tag>
      </>
    ),
  },
];

const TransactionListTable = () => {

  const {displayData} = useTransactionListTable();

  return (
    <>
      <Table 
        pagination={false}
        size="large"
        columns={columns}
        dataSource={displayData}
        style={{
          margin: '26px',
        }}
      />
    </>
  );
};

export default TransactionListTable;
