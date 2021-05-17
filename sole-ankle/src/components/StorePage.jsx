import Header from './Header';
import Sidebar from './Sidebar';
import ShoeGrid from './ShoeGrid';
import styled from 'styled-components';

export default function StorePage() {
  return (
    <Wrapper>
      <Header></Header>
      <Content>
        <SidebarWrapper>
          <Sidebar></Sidebar>
        </SidebarWrapper>
        <ShoeGridWrapper>
          <ShoeGrid></ShoeGrid>
        </ShoeGridWrapper>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 1rem;
`;

const Content = styled.div`
  display: flex;
`;

const SidebarWrapper = styled.div`
  flex: 0 0 216px;
  @media(max-width: 768px) {
    display: none;
  }
`;

const ShoeGridWrapper = styled.div`
  flex: 1;
`;
