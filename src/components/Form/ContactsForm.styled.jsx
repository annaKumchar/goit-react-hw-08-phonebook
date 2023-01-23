import styled from 'styled-components';

export const FormEl = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const InputEl = styled.input`
  border-radius: 4px;
  border: 2px solid rgb(189, 185, 185);
  height: 30px;
  margin-left: 20px;
  background-color: transparent;
  flex-grow: 1;
`;

export const ButtonEl = styled.button`
  width: 100px;
  padding: 10px;
  background-color: rgb(255, 219, 99);
  border: none;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
`;
