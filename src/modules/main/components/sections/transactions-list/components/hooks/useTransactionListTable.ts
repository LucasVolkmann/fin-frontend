import { useEffect, useState } from 'react';
import { connectionAPI_GET } from '../../../../../../../shared/functions/connection/connectionAPI';
import { URL_TRANSACTION } from '../../../../../../../shared/constants/Urls';
import { CategoryType } from '../../../../../../../shared/types/CategoryType';
import { TransactionType } from '../../../../../../../shared/types/TransactionType';


interface DisplayDataType {
  key: string;
  details: string;
  date: Date;
  amount: number;
  categoryName: string;
}

export const useTransactionListTable = () => {

  const [displayData, setDisplayData] = useState<DisplayDataType[]>([]);

  const cat: CategoryType[] = [
    {
      id: 1,
      name: 'eating',
    },
    {
      id: 3,
      name: 'user 1 new category',
    },
    {
      id: 4,
      name: 'test category numbers',
    },
    {
      id: 5,
      name: 'traveling',
    },
    {
      id: 6,
      name: 'learning',
    },
  ];

  useEffect(() => {
    saveData();
  }, []);

  const saveData = async () => {

    const currentMonth = new Date().getMonth();
    const response = await connectionAPI_GET<TransactionType[] | []>(`${URL_TRANSACTION}?month=${currentMonth}`);
    
    const handledData = response.map((transaction, i) => {

      const categoryName = cat.find((cat) => cat.id == transaction.categoryId)?.name;
      
      return {
        ...transaction,
        key: String(i),
        categoryName: categoryName || '',
      };
    });

    setDisplayData(handledData);
  };

  return {
    displayData,
  };

};