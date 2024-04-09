import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: lightgray;
`;

export const LoginForm = styled.div`
  width: 350px;

  box-sizing: border-box;

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid gray;
    margin-bottom: 30px;

    box-sizing: border-box;
  }
`;