import { ChevronDown, Search, ShoppingBag } from 'react-feather';
import styled from 'styled-components';

export default function Icon({ id, size, color, ...delegated }) {
  const icons = {
    search: Search,
    shoppingBag: ShoppingBag,
    'chevron-down': ChevronDown
  }
  const Component = icons[id];
  return (
    <Wrapper {...delegated}>
      <Component color={color} size={size}></Component></Wrapper>
  )
}

const Wrapper = styled.div`
  & > svg {
    display: block;
    stroke-width: ${(p) => p.strokeWidth}px;
  }
`;
