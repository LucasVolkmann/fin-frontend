import styled from 'styled-components';



export const OutsideContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SideContainer = styled.div`
  padding: 15px 0px;
`;

export const LeftContainer = styled(SideContainer)`
  width: 60%;
`;

export const RightContainer = styled(SideContainer)`
  width: 40%;

  display: flex;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 60%;

  margin: 0px auto 20px;
  padding: 20px;

  border-radius: 15px;
  
  background-color: rgba(111, 203, 20, 0.2);
  
  box-shadow: 0px 3px 5px rgba(0,0,0,0.3);
`;

export const FakeChartContainer = styled.div`
  width: 327px;
  height: 250px;

  margin: 0px auto;
`;

export const DialogBox = styled.div`
  width: 60%;
  
  position: relative;

  padding: 7px 20px;

  border-radius: 20px;
  
  background-color: orange;

  font-size: 14px;
  line-height: 16px;
  
  &:after {
    content: "";

    box-sizing: border-box;

    z-index: 1;
    position: absolute;
    right: 60px;
    bottom: -15px;

    border-top: 15px solid orange;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }
`;

export const BannerImage = styled.img`
  width: 85%;
  margin-top: 20px;
`;