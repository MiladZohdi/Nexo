import styled from "styled-components";
import EditContact from "./EditContact";
import RightSideBarHeader from "./RightSideBarHeader";
import ContactInfo from "./ContactInfo";

const StyledRightSideBar = styled.div`
  background-color: #212121;
  grid-area: targetUser;
  height: 100%;
  border-left: 3px solid #646464;
  padding: 1.5rem 1rem 0.6rem 2rem;
  display: grid;
  grid-template-rows: 3rem 1fr;
`;

function RightSideBar({ handleTargetUserOpen }) {
  return (
    <StyledRightSideBar>
      <RightSideBarHeader
        handleTargetUserOpen={handleTargetUserOpen}
        title={"Contact Info"}
        // title={"Edit"}
      />

      <div style={{ height: "100%", overflowY: "auto" }}>
        {/* <EditContact handleTargetUserOpen={handleTargetUserOpen} /> */}
        <ContactInfo handleTargetUserOpen={handleTargetUserOpen} />
      </div>
    </StyledRightSideBar>
  );
}

export default RightSideBar;
