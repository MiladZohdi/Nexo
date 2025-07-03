import styled from "styled-components";

const StyledChatsListFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid black;

  & button {
    margin-top: 1rem;
    background-color: transparent;
    font-size: 1.8rem;
    color: white;
    border: none;
    border-radius: 5px 5px 0 0;
    width: 100%;

    padding: 1rem 2rem;

    &:hover {
      background-color: #373737;
      cursor: pointer;
    }
  }
`;

function ChatsListFilter() {
  return (
    <StyledChatsListFilter>
      <button>All</button>
      <button>Private</button>
      <button>Unread</button>
    </StyledChatsListFilter>
  );
}

export default ChatsListFilter;
