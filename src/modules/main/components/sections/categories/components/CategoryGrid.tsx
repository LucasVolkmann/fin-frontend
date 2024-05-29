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
        dataSource={categoryNumbers?.map((cat, i) => ({...cat, key: i}))}
        size="large" 
        pagination={false}
      />
    </>
  );
};

export default CategoryGrid;
