import styled from "styled-components";
import PreviewList from "./PreviewList";

const StyledLeftSideBar = styled.div`
  background-color: #212121;
  grid-area: sidebar;
  border-right: 3px solid #646464;
  padding: 0.6rem 0.5rem 0.6rem 1rem;
  display: grid;
  grid-template-rows: 4rem auto 1fr;
  height: 100dvh;
`;

function LeftSideBar() {
  return (
    <StyledLeftSideBar>
      <PreviewList type="chat" />
    </StyledLeftSideBar>
  );
}

export default LeftSideBar;
