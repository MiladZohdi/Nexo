import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import SearchBox from "./SearchBox";
import { FaArrowLeft } from "react-icons/fa";

const StyledListHeader = styled.div`
  display: flex;
  column-gap: 2.5rem;
  align-items: center;
  color: white;

  & svg {
    width: 2.3rem;
    height: 2.3rem;
    color: #646464;
  }

  & span {
    font-size: 1.8rem;
    font-weight: 500;
  }
`;

function ListHeader({ HeaderIcon, children }) {
  return (
    <StyledListHeader>
      {HeaderIcon === "Hamburger" ? <GiHamburgerMenu /> : <FaArrowLeft />}
      {children}
    </StyledListHeader>
  );
}

export default ListHeader;
