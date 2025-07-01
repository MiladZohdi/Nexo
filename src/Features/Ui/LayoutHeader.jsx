import styled from "styled-components";
import ChatPreviewLogo from "./PreviewImage";
import HeaderLogo from "./HeaderLogo";
import HeaderContent from "./HeaderContent";
import HeaderIconBox from "./HeaderIconBox";

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
      <HeaderLogo />
      <HeaderContent />
      <HeaderIconBox />
    </StyledHeader>
  );
}

export default LayoutHeader;
