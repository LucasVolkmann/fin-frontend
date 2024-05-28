import { Table, TableColumnsType } from 'antd';
import { CategoryNumbersType } from '../../../../../../shared/types/CategoryNumbersType';

const columns: TableColumnsType = [
  {
    title: 'Nome',
    dataIndex: 'name',
  },
  {
    title: 'Saldo',
    dataIndex: 'amount',
  },
];

const data: CategoryNumbersType[] = [
  {
    name: 'Viagens',
    amount: 3200,
  },
  {
    name: 'Comidas',
    amount: 4200,
  },
  {
    name: 'Outros',
    amount: 1100,
  },
  {
    name: 'Viagens',
    amount: 3200,
  },
  {
    name: 'Comidas',
    amount: 4200,
  },
  {
    name: 'Outros',
    amount: 1100,
  },
  {
    name: 'Viagens',
    amount: 3200,
  },
  {
    name: 'Comidas',
    amount: 4200,
  },
  {
    name: 'Outros',
    amount: 1100,
  },
  {
    name: 'Viagens',
    amount: 3200,
  },
  {
    name: 'Comidas',
    amount: 4200,
  },
  {
    name: 'Outros',
    amount: 1100,
  },
  {
    name: 'Viagens',
    amount: 3200,
  },
  {
    name: 'Comidas',
    amount: 4200,
  },
  {
    name: 'Outros',
    amount: 1100,
  },
];

const CategoryGrid = () => {
  return (
    <>
      <Table 
        columns={columns} 
        dataSource={data} 
        size="large" 
        pagination={false}
      />
    </>
  );
};

export default CategoryGrid;
