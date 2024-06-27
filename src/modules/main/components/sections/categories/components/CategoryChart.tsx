import { PieChart } from '@mui/x-charts';
import { useCategoryNumberReducer } from '../../../../../../store/reducers/categoryNumberReducer/useCategoryNumberReducer';
import { firstUpperCase } from '../../../../../../shared/functions/formatters';
import { useEffect, useState } from 'react';


interface DatasetHistoryIndexType {
  [key: string]: number | string;
}
interface DisplayChartDataType extends DatasetHistoryIndexType {
  id: number,
  value: number,
  label: string,
  color: string,
}

const CustomizedChart = () => {
  const { categoryNumbers } = useCategoryNumberReducer();
  const [ displayChartData, setDisplayChartData ] = useState<DisplayChartDataType[]>([]);

  useEffect(() => {
    if (categoryNumbers) {
      const handledData = categoryNumbers.filter((cat) => cat.amount > 0)
        .slice(0, 2)
        .map((cat, id) => {
          return {
            id,
            value: cat.amount,
            label: firstUpperCase(cat.name),
            color: colorArray.shift() || '#8B8999',
          };
        }).concat(
          [
            {
              id: 4,
              label: 'Outros',
              value: categoryNumbers?.slice(2, categoryNumbers.length + 1)
                .map((cat) => cat.amount)
                .reduce((prev, curr) => prev + curr, 0),
              color: '#8B8999',
            },
          ],
        );
      setDisplayChartData(handledData);
    }
  }, [categoryNumbers]);

  const colorArray = [
    '#FE981E',
    '#6FCB14',
    '#8B8999' ,
  ];

  return (
    <>
      <PieChart
        series={[
          {
            data: displayChartData,
            innerRadius: 60,
            outerRadius: 110,
            paddingAngle: 6,
            cornerRadius: 3,
            startAngle: -90,
            endAngle: 270,
            cx: 110,
            cy: 150,
          },
        ]}
        slotProps={{
          legend: {
            position: {
              vertical: 'middle',
              horizontal: 'right',
            },
            padding: 100,
            labelStyle: {
              fontSize: 18,
            },
            itemMarkWidth: 15,
            itemMarkHeight: 15,
            markGap: 8,
            itemGap: 15,
          },
        }}
        height={300}
      />
    </>
  );
};

export default CustomizedChart;