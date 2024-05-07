import { HistoryLengthEnum } from './HistoryLengthEnum';

const SelectHistoryLength = ({...props}) => {

  return (
    <select {...props}>
      <option value={HistoryLengthEnum.THREE_MONTHS} >Últimos três meses</option>
      <option value={HistoryLengthEnum.SIX_MONTHS} >Últimos seis meses</option>
      <option value={HistoryLengthEnum.ONE_YEAR} >Este ano</option>
    </select>
  );
};

export default SelectHistoryLength;
