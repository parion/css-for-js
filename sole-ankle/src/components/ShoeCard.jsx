import styled from 'styled-components'
import { COLORS } from '../constants';

export default function ShoeCard({ shoe }) {
  let tag;
  if (shoe.salePrice) {
    tag = <Tag bg={COLORS.primary}>Sale</Tag>
  } else if (shoe.releaseDate > Date.now() - 1000 * 60 * 60 * 24) {
    tag = <Tag bg={COLORS.secondary}>Just Released!</Tag>
  }
  return (
    <Card>
      <ImageWrapper>
        <img src={shoe.imageSrc} alt={shoe.name} /></ImageWrapper>
      {tag}
      <Details>
        <span className="shoe-name">{shoe.name}</span>
        <span className="price">${shoe.price / 100}.00</span>
      </Details>
      <span className="colors">{shoe.numOfColors} Color{shoe.numOfColors > 1 ? 's' : ''}</span>
    </Card>
  )
}

const Card = styled.div`
  position: relative;
  cursor: pointer;
`;
const ImageWrapper = styled.div`
  height: 312px;
  background-color: ${COLORS.gray[100]};
  border-radius: 16px 16px 4px 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  &:hover {
    img {
      transform: scale(1.2);
    }
  }
  &>img {
    transition: transform 1s;
  }
`;
const Tag = styled.div`
  position: absolute;
  right: -4px;
  top: 12px;
  padding: 9px;
  background-color: ${props => props.bg};
  color: ${COLORS.white};
  border-radius: 2px;
`;
const Details = styled.div`
  display: flex;
  &>.shoe-name {
    margin-right: auto;
    font-weight: 600;
  }
  & .price, & .colors {
    font-weight: 500;
  }
  & .colors {
    color: ${COLORS.gray[700]};
  }
`;
