import styled from 'styled-components';
import SHOES from '../data';
import ShoeCard from './ShoeCard';

export default function ShoeGrid() {
  const shoeItems = SHOES.map(shoe =>
    <Wrapper><ShoeCard shoe={shoe}></ShoeCard></Wrapper>
  )
  return (
    <Grid>
      {shoeItems}
    </Grid>
  )
}

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  max-width: 332px;
  margin: 24px 18px;
`;
