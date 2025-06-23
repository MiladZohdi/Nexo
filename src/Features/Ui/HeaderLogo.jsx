import styled from "styled-components";

const StyledHeaderLogo = styled.img`
  height: 4.5rem;
  width: auto;
  border-radius: 50%;
`;

function HeaderLogo() {
  return <StyledHeaderLogo src="/Zoomit.jpg" />;
}

export default HeaderLogo;
