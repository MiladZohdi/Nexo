import styled from "styled-components";
import Preview from "./Preview";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 1rem;
  overflow-y: auto;

  scrollbar-color: #373737 var(--background-color);
  /* For Webkit browsers */
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #373737;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: var(--background-color);
  }
`;

function ListContainer({ type }) {
  return (
    <Container>
      <Preview type={type} />
      <Preview type={type} />
      <Preview type={type} />
      <Preview type={type} />
      <Preview type={type} />
      <Preview type={type} />
      <Preview type={type} />
      <Preview type={type} />
      <Preview type={type} />
      <Preview type={type} />
      <Preview type={type} />
      <Preview type={type} />
      <Preview type={type} />
    </Container>
  );
}

export default ListContainer;
