import styled from 'styled-components';
import { COLORS } from '../constants';
import Icon from './Icon';

export default function SearchInput({ size, placeholder }) {
  return (
    <Wrapper>
      <IconWrapper><Icon color={COLORS.white} id="search" size={16}></Icon></IconWrapper>
      <Input type="text" placeholder={placeholder} size={size}></Input>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  border: none;
  background: none;
  width: ${props => props.size + 'px'};
  color: ${COLORS.white};
  font-size: ${14 / 16}rem;
  border-bottom: 1px solid ${COLORS.gray[300]};
  padding-left: 1.5rem;
  &::placeholder {
    color: ${COLORS.gray[500]};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  bottom: -2px;
`;
