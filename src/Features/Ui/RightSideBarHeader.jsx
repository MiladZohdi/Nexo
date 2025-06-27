import { FaArrowLeft } from "react-icons/fa";
import styled from "styled-components";

const StyledRightSideBarHeader = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  & svg {
    width: 2.3rem;
    height: 2.3rem;
    color: white;
  }

  & span {
    color: white;
    font-size: 1.6rem;
    font-weight: 500;
  }

  & svg:hover {
    cursor: pointer;
    color: var(--foucs-color);
  }
`;

function RightSideBarHeader({ title, handleTargetUserOpen }) {
  return (
    <StyledRightSideBarHeader>
      <FaArrowLeft onClick={handleTargetUserOpen} />
      <span>{title}</span>
    </StyledRightSideBarHeader>
  );
}

export default RightSideBarHeader;
