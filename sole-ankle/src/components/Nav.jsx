import styled from 'styled-components'
import { COLORS } from '../constants';

export default function Nav() {
  return (
    <Navigation>
      <NavItems>
        <li aria-current="page" className="link">Sale</li>
        <li className="link">New Releases</li>
        <li className="link">Men</li>
        <li className="link">Women</li>
        <li className="link">Kids</li>
        <li className="link">Collections</li>
      </NavItems>
    </Navigation>
  )
}

const Navigation = styled.nav`
  height: 72px;
  border: 1px solid ${COLORS.gray[300]};
  @media(max-width: 768px) {
    display: none;
  }
`;
const NavItems = styled.ul`
  height: 100%;
  margin: 0;
  display: flex;
  gap: 48px;
  list-style: none;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;

  &>li {
    font-weight: 600;
    &[aria-current] {
      color: ${COLORS.secondary};
    }
  }
`;
