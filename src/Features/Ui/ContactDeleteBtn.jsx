import { MdOutlineDeleteOutline } from "react-icons/md";
import styled from "styled-components";

const DeleteButtonContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  background-color: transparent;
  border: none;
  border-radius: 1rem;
  color: red;
  padding: 1rem 0.5rem;
  font-size: 1.4rem;

  gap: 1rem;

  &:hover {
    background-color: rgba(255, 0, 0, 0.1);
    cursor: pointer;
  }
`;

function ContactDeleteBtn() {
  return (
    <DeleteButtonContainer>
      <MdOutlineDeleteOutline
        style={{ width: "2.5rem", height: "auto", color: "red" }}
      />
      <p>Delete Contact</p>
    </DeleteButtonContainer>
  );
}

export default ContactDeleteBtn;
