import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import SearchBox from "./SearchBox";
import ChatFilterTab from "./ChatFilterTab";
import ChatsContainer from "./ChatsContainer";

const StyledSideBar = styled.div`
  background-color: #212121;
  grid-area: sidebar;
  border-right: 3px solid #646464;
  padding: 0.6rem 0.5rem 0.6rem 1rem;
  display: grid;
  grid-template-rows: 4rem auto 1fr;
  height: 100dvh;
`;
const SideBarHeader = styled.div`
  display: flex;
  column-gap: 2.5rem;
  align-items: center;

  & svg {
    width: 2.3rem;
    height: 2.3rem;
    color: #646464;
  }
`;

function SideBar() {
  return (
    <StyledSideBar>
      <SideBarHeader>
        <GiHamburgerMenu />
        {/* <SettingsDropDown /> */}
        <SearchBox />
      </SideBarHeader>
      <ChatFilterTab />
      <ChatsContainer />
    </StyledSideBar>
  );
}

export default SideBar;
