import { useEffect, useState } from 'react';
import { connectionAPI_GET } from '../../../../../../../shared/functions/connection/connectionAPI';
import { URL_CATEGORY, URL_TRANSACTION } from '../../../../../../../shared/constants/Urls';
import { CategoryType } from '../../../../../../../shared/types/CategoryType';
import { TransactionType } from '../../../../../../../shared/types/TransactionType';


interface DisplayDataType {
  key: string;
  details: string;
  date: Date;
  amount: number;
  category: CategoryType;
}

export const useTransactionListTable = () => {

  const [displayData, setDisplayData] = useState<DisplayDataType[]>([]);

  useEffect(() => {
    saveData();
  }, []);

  const saveData = async () => {

    const currentMonth = new Date().getMonth();
    const transactionsResponse = await connectionAPI_GET<TransactionType[] | []>(`${URL_TRANSACTION}?month=${currentMonth}`);
    const categoriesResponse = await connectionAPI_GET<CategoryType[]>(URL_CATEGORY);

    try {
      const handledData = transactionsResponse.map((transaction, i) => {

        const category = categoriesResponse.find((cat) => cat.id == transaction.categoryId);
        
        if (!category) {
          throw new Error('Categoria não encontrada.');
        }
        return {
          amount: transaction.amount,
          details: transaction.details,
          date: transaction.date,
          key: String(i),
          category,
        };
      });
      setDisplayData(handledData);
    } catch (error) {
      console.error(error);
    }

  };

  return {
    displayData,
  };

};
