import styled from "styled-components";

const StyledHeaderContet = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: start;
  color: white;

  justify-content: space-evenly;

  height: 100%;

  & p {
    font-size: 1.4rem;
  }
`;
function HeaderContent() {
  return (
    <StyledHeaderContet>
      <h2>Zoomit</h2>
      <p>last seen 6/18/2025</p>
    </StyledHeaderContet>
  );
}

export default HeaderContent;
