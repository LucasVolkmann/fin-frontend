import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const LoginForm = styled.div`
  min-width: 300px;
  width: 45%;
  
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-bottom: 100px;
`;

export const InputBox = styled.div`
  width: 75%;
  margin-bottom: 16px;
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  
  left: 0px;
  position: absolute;

  z-index: -1;

  background-image: linear-gradient(0deg, rgba(77,137,17,1), rgba(129,232,27,1), rgba(121,219,24,0.77), rgba(111,203,20,0.5));
`;

export const FormContainer = styled.div`
  @media (max-width: 700px) {
    width: 100%;
  }

  width: 50%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  right: 0px;
  position: absolute;

  background-color: white;
`;

