import styled from 'styled-components';
import { COLORS } from '../constants';
import Icon from './Icon';
import SearchInput from './SearchInput';

export default function Superheader() {
  return (
    <Super>
      <Message>Free shipping on domestic orders over $75!</Message>
      <SuperAside>
        <SearchInput placeholder="Search..." size="175"></SearchInput>
        <Help>Help</Help>
        <Icon id="shoppingBag" size="20" color={COLORS.white}></Icon>
      </SuperAside>
    </Super>
  )
}

const Super = styled.div`
  height: 40px;
  background-color: ${COLORS.gray[900]};
  color: ${COLORS.white};
  padding: 0 2rem;
  display: flex;
  align-items: center;
  
  @media(max-width: 768px) {
    display: none;
  }
`;

const SuperAside = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Message = styled.span`
  font-size: ${14 / 16}rem;
  margin-right: auto;
`;

const Help = styled.span`
  font-size: ${14 / 16}rem;
  color: ${COLORS.gray[300]};
`;
