import { useState } from 'react';
import { CardTitle } from '../sections.styles';
import HistoryChart from './components/HistoryChart';
import SelectHistoryLength from './components/select-history-length/SelectHistoryLength';
import { HistoryLengthEnum } from './components/select-history-length/HistoryLengthEnum';
import { HeaderContainer } from './HistoryComponent.styles';

const HistoryComponent = () => {
  const [historyLength, setHistoryLength] = useState<HistoryLengthEnum>(HistoryLengthEnum.THREE_MONTHS);
  
  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setHistoryLength(Number(event.target.value));
  };

  return (
    <>
      <HeaderContainer>
        <CardTitle>Histórico recente</CardTitle>
        <SelectHistoryLength onChange={handleOnChange} />
      </HeaderContainer>
      <HistoryChart historyLength={historyLength}/>
    </>
  );
};

export default HistoryComponent;
