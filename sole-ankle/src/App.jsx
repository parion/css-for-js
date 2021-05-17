import styled from 'styled-components';
import Nav from './components/Nav';
import StorePage from './components/StorePage';
import Superheader from './components/Superheader';
import { COLORS } from './constants';
import './styles/GlobalStyles.css';

export default function App() {
  return (
    <Wrapper>
      <Superheader></Superheader>
      <Nav></Nav>
      <StorePage></StorePage>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: ${COLORS.gray[900]};
`;