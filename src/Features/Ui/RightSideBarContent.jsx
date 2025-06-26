import styled from "styled-components";

const StyledRightSideBarContent = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;

  gap: 2rem;
  color: white;

  & svg {
    width: 6rem;
    height: 6rem;
    color: white;
  }

  & span {
    font-size: 1.8rem;
    font-weight: 500;
  }
`;
function RightSideBarContent({ children }) {
  return <StyledRightSideBarContent>{children}</StyledRightSideBarContent>;
}

export default RightSideBarContent;
