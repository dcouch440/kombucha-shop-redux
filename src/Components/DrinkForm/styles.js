import styled from 'styled-components';

export const FormPage = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .dancer-title {
    font-size: 30px;
  }
`;

export const Form = styled.form`
  font-family: monospace;
  display: flex;
  color: white;
  & > * {
    padding: 2px;
    margin: 0 2px;
  }
  @media (max-width: 1200px)
  {
    flex-direction: column;
  }
`;

export const Dancer = styled.div`
  font-size: 500px;
  background-color: black;
  padding: 0px 20px;
  margin-bottom: 30px;
  @media (max-width: 1000px)
  {
    font-size: 250px;
  }
`;

export const Input = styled.input``;