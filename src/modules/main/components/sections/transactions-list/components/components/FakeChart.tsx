import { Column, FakeChartContainer, OverSVG } from './FakeChart.styles';

const FakeChart = () => {
  return (
    <FakeChartContainer>
      <OverSVG />
      <Column style={{backgroundImage: 'linear-gradient(to top, #6FCB14 0% 50%, #D9D9D9 50% 100%)'}}/>
      <Column style={{backgroundImage: 'linear-gradient(to top, #6FCB14 0% 70%, #D9D9D9 70% 100%)'}}/>
      <Column style={{backgroundImage: 'linear-gradient(to top, #6FCB14 0% 80%, #D9D9D9 80% 100%)'}}/>
      <Column style={{backgroundImage: 'linear-gradient(to top, #6FCB14 0% 10%, #D9D9D9 10% 100%)'}}/>
      <Column style={{backgroundImage: 'linear-gradient(to top, #6FCB14 0% 30%, #D9D9D9 30% 100%)'}}/>
      <Column style={{backgroundImage: 'linear-gradient(to top, #6FCB14 0% 60%, #D9D9D9 60% 100%)'}}/>
    </FakeChartContainer>
  );
};

export default FakeChart;
