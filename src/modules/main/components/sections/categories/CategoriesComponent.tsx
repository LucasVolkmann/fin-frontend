import { CardTitle } from '../sections.styles';
import { ChartContainer, DataContainer, NumbersContainer } from './CategoriesComponent.styles';
import CategoryChart from './components/CategoryChart';
import CategoryGrid from './components/CategoryGrid';

const CategoriesComponent = () => {
  return (
    <>
      <CardTitle>Gastos do mês por categoria</CardTitle>
      <DataContainer>
        <ChartContainer>
          <CategoryChart />
        </ChartContainer>
        <NumbersContainer>
          <CategoryGrid />
        </NumbersContainer>
      </DataContainer>
    </>
  );
};

export default CategoriesComponent;
