import styled from "styled-components";

const StyledLayoutHeaderLogo = styled.img`
  height: 4.5rem;
  width: auto;
  border-radius: 50%;
`;

function LayoutHeaderLogo() {
  return <StyledLayoutHeaderLogo src="/Zoomit.jpg" />;
}

export default LayoutHeaderLogo;
