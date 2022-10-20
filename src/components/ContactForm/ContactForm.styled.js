import styled from 'styled-components';

export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  border: 2px solid #000;
  border-radius: 10px;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: block;
  text-align: center;
  font-weight: 700;
`;
export const Input = styled.input`
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 3px;
  width: 150px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  min-width: 100px;

  border: 1px solid #000;
  border-radius: 6px;
  text-transform: capitalize;

  cursor: pointer;
  :hover,
  :focus {
    background-color: pink;
    color: white;
  }
`;
