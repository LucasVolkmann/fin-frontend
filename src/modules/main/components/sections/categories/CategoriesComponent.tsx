import { useEffect } from 'react';
import { ChartContainer, ChartTitle, Container, GridContainer, GridTitle, LeftContainer, RightContainer } from './CategoriesComponent.styles';
import CategoryChart from './components/CategoryChart';
import CategoryGrid from './components/CategoryGrid';
import { useRequests } from '../../../../../shared/hooks/useRequests';
import { URL_CATEGORY_NUMBERS } from '../../../../../shared/constants/Urls';
import { MethodsEnum } from '../../../../../shared/enumerations/methods.enum';
import { useCategoryNumberReducer } from '../../../../../store/reducers/categoryNumberReducer/useCategoryNumberReducer';

const CategoriesComponent = () => {

  const { request } = useRequests();
  const { setCategoryNumbers } = useCategoryNumberReducer();

  useEffect(() => {
    request(URL_CATEGORY_NUMBERS, MethodsEnum.GET, setCategoryNumbers);
  }, []);

  return (
    <>
      <Container>
        <LeftContainer>
          <ChartTitle>Gastos do mês por categoria</ChartTitle>
          <ChartContainer>
            <CategoryChart />
          </ChartContainer>
        </LeftContainer>
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
