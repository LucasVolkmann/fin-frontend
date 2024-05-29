import ScreenHeader from './header/ScreenHeader';
import Menu from './menu/Menu';
import { ChildrenContainer, ScreenContainer } from './Screen.styles';
import SVGDashboard from './icons/SVGDashboard';
import { PagesEnum } from './shared/PagesEnum';
import SVGHistory from './icons/SVGHistory';
import SVGConfig from './icons/SVGConfig';

interface ScreenProps{
  children: React.ReactNode;
  currentPage: PagesEnum;
}

const Screen = ({children, currentPage, ...props }: ScreenProps) => {
  return (
    <>
      <Menu options={[
        {
          name: 'Dashboard',
          isCurrent: currentPage == PagesEnum.DASHBOARD,
          icon: <SVGDashboard/>,
          navigateTo: '/login',
        },
        {
          name: 'Histórico (indisponível)',
          isCurrent: currentPage == PagesEnum.HISTORY,
          icon: <SVGHistory/>,
        },
        {
          name: 'Configurações (indisponível)',
          isCurrent: currentPage == PagesEnum.CONFIG,
          icon: <SVGConfig/>,
        },
      ]}/>
      <ScreenContainer {...props}>
        <ScreenHeader />
        <ChildrenContainer>
          {children}
        </ChildrenContainer>
      </ScreenContainer>
    </>
  );
};

export default Screen;
