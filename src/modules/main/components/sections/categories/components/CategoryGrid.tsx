import { Table, TableColumnsType } from 'antd';
import { useCategoryNumberReducer } from '../../../../../../store/reducers/categoryNumberReducer/useCategoryNumberReducer';

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

const CategoryGrid = () => {
  const { categoryNumbers } = useCategoryNumberReducer();

  return (
    <>
      <Table 
        columns={columns} 
        dataSource={categoryNumbers} 
        size="large" 
        pagination={false}
      />
    </>
  );
};

export default CategoryGrid;
