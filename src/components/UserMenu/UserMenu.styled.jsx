import styled from 'styled-components';

export const WelcomeWrap = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: baseline;
`;

export const Welcome = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const Logout = styled.button`
  width: 100px;
  padding: 10px;
  background-color: rgb(255, 219, 99);
  border: none;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
  margin-left: auto;
`;
