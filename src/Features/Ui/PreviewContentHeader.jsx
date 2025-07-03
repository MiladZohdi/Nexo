import styled from "styled-components";
import Header from "./Header";

const StyledPreviewContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &p {
    font-size: 1.4rem;
  }
`;

function PreviewContentHeader({ type }) {
  return (
    <StyledPreviewContentHeader>
      <h3>Zoomit</h3>
      {type === "contact" ? "" : <p>4:22 PM</p>}
    </StyledPreviewContentHeader>
  );
}

export default PreviewContentHeader;
