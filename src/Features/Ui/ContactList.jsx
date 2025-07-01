import { FaArrowLeft } from "react-icons/fa";
import styled from "styled-components";
import SearchBox from "./SearchBox";
import ChatPreview from "./ChatPreview";

const StyledContactListHeader = styled.div`
  padding: 0rem 1rem;
  display: flex;
  gap: 2.5rem;
  align-items: center;

  & svg {
    width: 2.3rem;
    height: 2.3rem;
    color: white;
  }

  & svg:hover {
    cursor: pointer;
    color: var(--foucs-color);
  }
`;

const ContactListContainer = styled.div`
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

function ContactList() {
  return (
    <>
      <StyledContactListHeader>
        <FaArrowLeft />
        <SearchBox />
      </StyledContactListHeader>
      <ContactListContainer>
        <ChatPreview />
      </ContactListContainer>
    </>
  );
}
export default ContactList;
