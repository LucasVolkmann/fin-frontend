import { HistoryLengthEnum } from './HistoryLengthEnum';
import { Select } from './SelectHistoryLength.styles';

const SelectHistoryLength = ({...props}) => {

  return (
    <Select {...props}>
      <option value={HistoryLengthEnum.THREE_MONTHS} >Últimos três meses</option>
      <option value={HistoryLengthEnum.SIX_MONTHS} >Últimos seis meses</option>
      <option value={HistoryLengthEnum.ONE_YEAR} >Este ano</option>
    </Select>
  );
};

export default SelectHistoryLength;
