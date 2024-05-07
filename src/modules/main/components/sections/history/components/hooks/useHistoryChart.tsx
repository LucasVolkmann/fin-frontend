import { useEffect, useState } from 'react';
import { useRequests } from '../../../../../../../shared/hooks/useRequests';
import { useHistoryReducer } from '../../../../../../../store/reducers/historyReducer/useHistoryReducer';
import { URL_TRANSACTION_HISTORY } from '../../../../../../../shared/constants/Urls';
import { MethodsEnum } from '../../../../../../../shared/enumerations/methods.enum';
import { HistoryElementType } from '../../../../../../../shared/types/HistoryElementType';

export const useHistoryChart = () => {

  const [historyData , setHistoryData] = useState<HistoryElementType[]>([]);
  const {request} = useRequests();
  const {history, setHistory} = useHistoryReducer();

  useEffect(() => {
    request(URL_TRANSACTION_HISTORY, MethodsEnum.GET, setHistory);
  }, []);

  useEffect(() => {
    if (history && history?.length > 0) {
      setHistoryData(history);
    }
  }, [history]);

  return ({
    historyData,
  });

};