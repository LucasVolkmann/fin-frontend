import { Tooltip } from 'antd';
import { Container, IconContainer, LogoutButtonContainer, SideMenuOptionsContainer, SpanStyle, StyledLogoutButton } from './Menu.styles';
import SVGIcon from '../icons/SVGIcon';
import { useNavigate } from 'react-router-dom';

interface MenuProps {
  options: OptionProps[];
}

interface OptionProps {
  name: string,
  isCurrent: boolean,
  icon: React.ReactNode,
  navigateTo?: string,
}

const currentPageSpanStyle: React.CSSProperties = {
  backgroundColor: '#6FCB14',
  boxShadow: '0px 12px 10px rgba(0,0,0,0.6)',
};

const Menu = ({ options, ...props }: MenuProps) => {

  const navigate = useNavigate();

  return (
    <Container {...props}>
      <IconContainer>
        <SVGIcon />
      </IconContainer>
      <SideMenuOptionsContainer>
        {options.map((option, i) => {
          return  (
            <Tooltip
              key={i}
              placement="left"
              title={option.name}
            >
              {option.navigateTo? (
                <SpanStyle
                  style={option.isCurrent? currentPageSpanStyle : {}}
                  onClick={() => (navigate(String(option.navigateTo)))}
                >
                  {option.icon}
                </SpanStyle>
              ) : (
                <SpanStyle
                  style={{opacity: '0.2', cursor: 'default'}}>
                  {option.icon}
                </SpanStyle>
              )}
            </Tooltip>
          );
        })}
      </SideMenuOptionsContainer>
      <LogoutButtonContainer>
        <StyledLogoutButton />
      </LogoutButtonContainer>
    </Container>
  );
};


export default Menu;
