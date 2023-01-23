import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  gap: 30px;
`;

export const NavigationLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  &.active {
    font-weight: 700;
    color: rgb(255, 219, 99);
  }
`;
