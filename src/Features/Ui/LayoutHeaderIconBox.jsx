import { HiDotsVertical } from "react-icons/hi";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import styled from "styled-components";

const StyledLayoutHeaderIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  & svg {
    color: white;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    cursor: pointer;
    transition: color 0.1s ease-out;

    &:hover {
      color: var(--foucs-color);
    }
  }
`;

function LayoutHeaderIconBox() {
  return (
    <StyledLayoutHeaderIconBox>
      <PiMagnifyingGlassBold />
      <HiDotsVertical />
    </StyledLayoutHeaderIconBox>
  );
}

export default LayoutHeaderIconBox;
