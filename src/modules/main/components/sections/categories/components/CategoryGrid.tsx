import { Table, TableColumnsType } from 'antd';
import { useEffect } from 'react';
import { useRequests } from '../../../../../../shared/hooks/useRequests';
import { URL_CATEGORY_NUMBERS } from '../../../../../../shared/constants/Urls';
import { MethodsEnum } from '../../../../../../shared/enumerations/methods.enum';
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

  const {request} = useRequests();
  const { categoryNumbers, setCategoryNumbers } = useCategoryNumberReducer();

  useEffect(() => {
    request(URL_CATEGORY_NUMBERS, MethodsEnum.GET, setCategoryNumbers);
  }, []);

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
