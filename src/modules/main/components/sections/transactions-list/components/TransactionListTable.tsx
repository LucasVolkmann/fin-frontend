import { Table, TableProps, Tag } from 'antd';
import { valueFormatter } from '../../../../../../shared/functions/formatters';
import { useTransactionListTable } from './hooks/useTransactionListTable';
import { CategoryType } from '../../../../../../shared/types/CategoryType';

interface DisplayDataType {
  key: string;
  details: string;
  date: Date;
  amount: number;
  category: CategoryType;
}

const categoryColors = [
  '#FE981E',
  '#6FCB14',
  '#8B8999' ,
  '#771FFF' ,
  '#1FB6FF' ,
  '#B614CC' ,
  '#CC143C' ,
];

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
    dataIndex: 'category',
    key: 'category',
    width: '100px',
    render: (value: CategoryType) => {
      const indexByCategoryId = value.id % categoryColors.length;
      const selectTagColor = categoryColors[indexByCategoryId];
      return (
        <>
          <Tag 
            color={selectTagColor} 
            style={{
              padding: '3px 7px',
              fontSize: '14px',
              borderRadius: '10px',
            }}
          >
            {value.name.toUpperCase()}
          </Tag>
        </>
      );
    },
  },
];

const TransactionListTable = () => {

  const {displayData} = useTransactionListTable();

  return (
    <>
      <Table 
        pagination={false}
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
