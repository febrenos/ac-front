import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display:flex;
  flex-direction:column;
`

export const HeaderNav = styled.header`
  display:flex;
  padding:10px;
  align-items:center;
  justify-content: space-between;
  background-color: var(--bg-color);
`

export const ImgLogoInline = styled.img`
  width: 150px;
  height: 100%;
`

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  gap:50px;
`

export const Li = styled.li`
  color: var(--text-header-color);
  font-size: 20px;
  margin-right: 10px;
  cursor: pointer;

  &.active {
    background-color: var(--secondary-color);
    color: var(--primary-color);
    border-radius: 5px;

    a {
      font-weight: 700;
    }
  }
`;

export const NavLinkItem = styled(NavLink)`
  color: var(--text-header-color);
  font-size: 20px;
  margin-right: 10px;
  text-decoration: none;
  cursor: pointer;

  &.active {
    font-weight: 700;
  }
`;

export const A = styled.a`
  color: var(--text-header-color);
  font-size: 20px;
  margin-right: 10px;
  text-decoration: none;
  cursor: pointer;
`;
