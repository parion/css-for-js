import styled from 'styled-components'
import { COLORS } from '../constants';

export default function Breadcrumbs() {
  return (
    <Wrapper>
      <Crumb>Home</Crumb>
      <Crumb>Sale</Crumb>
      <Crumb>Shoes</Crumb>
    </Wrapper>
  )
}

const Wrapper = styled.span`
  width: 248px;
  padding-right: 32px;
`;

const Crumb = styled.a`
  cursor: pointer;
  font-weight: 500;
  font-size: ${14 / 16}rem;
  color: ${COLORS.gray[700]};
  &:not(:last-of-type):after {
    content: ' / ';
  }
`;
