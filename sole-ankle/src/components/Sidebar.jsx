import styled from 'styled-components';
import { COLORS } from '../constants';

export default function Sidebar() {
  return (
    <List role="tablist">
      <li>Lifestyle</li>
      <li>Jordan</li>
      <li role="tab" aria-selected="true">Running</li>
      <li>Basketball</li>
      <li>Training & Gym</li>
      <li>Football</li>
      <li>Skateboarding</li>
      <li>American Football</li>
      <li>Baseball</li>
      <li>Golf</li>
      <li>Tennis</li>
      <li>Athletics</li>
      <li>Walking</li>
    </List>
  )
}

const List = styled.div`
  list-style: none;
  & > li {
    line-height: 2;
    cursor: pointer;
    &[aria-selected] {
      color: ${COLORS.primary}
    }
  }
`;
