import styled from 'styled-components';
import { WEIGHTS } from '../constants';
import Breadcrumbs from './Breadcrumbs';
import Select from './Select';

export default function Header() {
  return (
    <Wrapper>
      <FirstPart>
        <Breadcrumbs></Breadcrumbs>
        <h2>Running</h2>
      </FirstPart>
      <Selector>
        <Select
          label="Sort"
          value="newest"
        // onChange={(ev) => setSortId(ev.target.value)}
        >
          <option value="newest">Newest Releases</option>
          <option value="price">Price</option>
        </Select>
      </Selector>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  & > h2 {
    /* margin-right: auto; */
    font-weight: ${WEIGHTS.normal};
  }
`;

const FirstPart = styled.div`
  margin-right: auto;
  @media(min-width: 769px) {
    display: flex;
  }
`;

const Selector = styled.div`
@media(max-width: 428px) {
  display: none;
}
`;

