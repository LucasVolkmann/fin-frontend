import { BannerImage, Card, DialogBox, FakeChartContainer, LeftContainer, OutsideContainer, RightContainer } from './BannerComponent.styles';
import FakeChart from './components/FakeChart';

const BannerComponent = () => {
  return (
    <OutsideContainer>
      <LeftContainer>
        <Card>
          <p>Saldo:</p>
          <h1>R$ 9123,00</h1>
        </Card>
        <FakeChartContainer>
          <FakeChart />
        </FakeChartContainer>
      </LeftContainer>
      <RightContainer>
        <DialogBox>
        Parabéns, você está na sua média de gastos nos últimos 6 meses!
        </DialogBox>
        <BannerImage src="./woman-shopping.png"/>
      </RightContainer>
    </OutsideContainer>
  );
};

export default BannerComponent;
