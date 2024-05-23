import { PieChart } from '@mui/x-charts';

const CustomizedChart = () => {
  return (
    <>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: 'Viagens', color: '#FE981E' },
              { id: 1, value: 15, label: 'Comidas', color: '#6FCB14' },
              { id: 2, value: 20, label: 'Outros', color: '#8B8999' },
            ],
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