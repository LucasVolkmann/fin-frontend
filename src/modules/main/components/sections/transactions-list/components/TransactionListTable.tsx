import { Table, TableProps, Tag } from 'antd';
import { valueFormatter } from '../../../../../../shared/functions/formatters';

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

const data: DisplayDataType[] = [
  {
    key: '1',
    details: 'John Brown',
    date: new Date(),
    amount: 11111,
    categoryName: 'admaslk',
  },
];

const TransactionListTable = () => {
  return (
    <>
      <Table 
        pagination={false}
        size="small"
        columns={columns}
        dataSource={data}
        style={{
          width: '700px',
          margin: '26px',
        }}
      />
    </>
  );
};

export default TransactionListTable;
