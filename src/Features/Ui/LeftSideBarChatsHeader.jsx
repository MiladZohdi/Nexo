import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import SearchBox from "./SearchBox";

const StyledLeftSideBarHeader = styled.div`
  display: flex;
  column-gap: 2.5rem;
  align-items: center;

  & svg {
    width: 2.3rem;
    height: 2.3rem;
    color: #646464;
  }
`;

function LeftSideBarChatsHeader() {
  return (
    <StyledLeftSideBarHeader>
      <GiHamburgerMenu />
      {/* <SettingsDropDown /> */}
      <SearchBox />
    </StyledLeftSideBarHeader>
  );
}

export default LeftSideBarChatsHeader;
