import styled from 'styled-components';

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 50px;
  /* align-items: center; */
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  display: flex;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 2px solid rgb(189, 185, 185);
  height: 30px;
  margin-left: 20px;
  background-color: transparent;
  flex-grow: 1;
`;

export const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: rgb(255, 219, 99);
  border: none;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
