import { ChartContainer, Container, GridContainer, GridTitle, RightContainer } from './CategoriesComponent.styles';
import CategoryChart from './components/CategoryChart';
import CategoryGrid from './components/CategoryGrid';
import { CardTitle } from '../sections.styles';

const CategoriesComponent = () => {
  return (
    <>
      <Container>
        <div>
          <CardTitle>Gastos do mês por categoria</CardTitle>
          <ChartContainer>
            <CategoryChart />
          </ChartContainer>
        </div>
        <RightContainer>
          <GridTitle>Histórico de gastos por categoria</GridTitle>
          <GridContainer>
            <CategoryGrid />
          </GridContainer>
        </RightContainer>
      </Container>
    </>
  );
};

export default CategoriesComponent;
