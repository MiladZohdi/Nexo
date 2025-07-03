import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import SearchBox from "./SearchBox";
import { FaArrowLeft } from "react-icons/fa";

const StyledListHeader = styled.div`
  display: flex;
  column-gap: 2.5rem;
  align-items: center;

  & svg {
    width: 2.3rem;
    height: 2.3rem;
    color: #646464;
  }
`;

function ListHeader({ type }) {
  return (
    <StyledListHeader>
      {type === "chat" ? <GiHamburgerMenu /> : <FaArrowLeft />}
      <SearchBox />
    </StyledListHeader>
  );
}

export default ListHeader;
