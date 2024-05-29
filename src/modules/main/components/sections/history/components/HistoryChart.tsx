import { BarChart } from '@mui/x-charts';
import { useEffect, useState } from 'react';
import { useHistoryChart } from './hooks/useHistoryChart';
import { valueFormatter } from '../../../../../../shared/functions/formatters';

const monthsArray = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

interface HistoryChartProps {
  historyLength: number
}
interface DatasetHistoryIndexType {
  [key: string]: number | string;
}
interface DatasetHistory extends DatasetHistoryIndexType {
  incomes: number,
  expenses: number,
  year: number,
  month: string,
}

const HistoryChart = ({historyLength}: HistoryChartProps) => {

  const { historyData } = useHistoryChart();
  const [displayData, setDisplayData] = useState<DatasetHistory[]>([]);

  useEffect(() => {
    const subHistory = historyData.slice(12 - historyLength, 12);
    const formatDisplayData: DatasetHistory[] = subHistory.map((m, i) => {
      return {
        ...m,
        key: String(i),
        month: monthsArray[m.month - 1],
      };
    });
    setDisplayData(formatDisplayData);
  }, [historyLength, historyData]);

  return (
    <div style={{width: '100%', marginTop: '15px'}}>
      <BarChart
        dataset={displayData}
        xAxis={[{
          scaleType: 'band',
          dataKey: 'month',
        }]}
        series={[
          { 
            dataKey: 'incomes', 
            label: 'Receitas', 
            color: '#6FCB14', 
            valueFormatter: valueFormatter,
          },
          { 
            dataKey: 'expenses', 
            label: 'Despesas', 
            color: '#8B8999', 
            valueFormatter: valueFormatter,
          },
        ]}
        grid={{ 
          horizontal: true,
        }}
        slotProps={{
          bar: {
            clipPath: 'inset(0px round 50px 50px 0px 0px)',
          },
          legend: {
            labelStyle: {
              fontSize: 18,
            },
            itemMarkWidth: 20,
            itemMarkHeight: 10,
            markGap: 10,
            itemGap: 30,
          },
        }}
        bottomAxis={{
          disableLine: true,
          disableTicks: true,
          tickLabelStyle: {
            fontSize: 14,
          },
        }}
        leftAxis={{
          disableLine: true,
          disableTicks: true,
          tickLabelStyle: {
            fontSize: 14,
          },
        }}
        height={300}
      />
    </div>
  );
};

export default HistoryChart;
