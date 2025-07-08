import styled from "styled-components";
import LeftSideBar from "./LeftSideBar";
import LayoutHeader from "./LayoutHeader";
import { useState } from "react";
import RightSideBar from "./RightSideBar.jsx";
import MessageBox from "./MessageBox.jsx";
import AddContact from "./AddContact.jsx";

const StyledAppLayout = styled.div`
  height: 100dvh;
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

function AppLayout() {
  const [targetUserOpen, setTargetUserOpen] = useState(true);

  const handleTargetUserOpen = () => setTargetUserOpen(!targetUserOpen);

  return (
    <>
      <StyledAppLayout className={targetUserOpen ? "openUser" : ""}>
        <LeftSideBar />
        <LayoutHeader />
        <MessageBox />
        {targetUserOpen && (
          <RightSideBar handleTargetUserOpen={handleTargetUserOpen} />
        )}
        {/* <AddContact /> */}
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
