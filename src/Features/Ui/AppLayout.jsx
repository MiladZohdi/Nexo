import styled from "styled-components";
import SideBar from "./SideBar";
import LayoutHeader from "./LayoutHeader";
import { useState } from "react";
import RightSideBar from "./RightSideBar.jsx";

const StyledAppLayout = styled.div`
  height: 100vh;
  background-color: #212121;
  display: grid;
  grid-template-columns: 38rem 1fr 0rem;
  grid-template-rows: 6rem 1fr;
  grid-template-areas:
    "sidebar header targetUser"
    "sidebar message targetUser";
  transition: all 0.3s ease-in-out;

  &.openUser {
    grid-template-columns: 38rem 1fr 38rem !important;
  }
`;

const Message = styled.div`
  background-color: yellow;
  grid-area: message;
`;

function AppLayout() {
  const [targetUserOpen, setTargetUserOpen] = useState(true);

  const handleTargetUserOpen = () => setTargetUserOpen(!targetUserOpen);

  return (
    <>
      <StyledAppLayout className={targetUserOpen ? "openUser" : ""}>
        <SideBar />
        <LayoutHeader />
        <Message />
        {targetUserOpen && (
          <RightSideBar handleTargetUserOpen={handleTargetUserOpen} />
        )}
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
