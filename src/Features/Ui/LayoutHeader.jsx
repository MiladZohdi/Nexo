import styled from "styled-components";
import LayoutHeaderLogo from "./LayoutHeaderLogo";
import LayoutHeaderContent from "./LayoutHeaderContent";
import LayoutHeaderIconBox from "./LayoutHeaderIconBox";

const StyledHeader = styled.div`
  background-color: #212121;
  grid-area: header;
  display: grid;
  grid-template-columns: 8rem 1fr 10rem;
  align-items: center;
  justify-items: center;

  border-bottom: 3px solid #646464;
`;

function LayoutHeader() {
  return (
    <StyledHeader>
      <LayoutHeaderLogo />
      <LayoutHeaderContent />
      <LayoutHeaderIconBox />
    </StyledHeader>
  );
}

export default LayoutHeader;
