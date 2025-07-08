import styled from "styled-components";
import InputUserData from "./InputUserData";
import { FaUser } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  backdrop-filter: blur(1px);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  color: white;
  margin-bottom: 2rem;

  & svg {
    width: 2.5rem;
    height: auto;
    color: white;
  }

  & svg:hover {
    cursor: pointer;
    color: #976fff;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25%;
  border-radius: 0.8rem;

  background-color: #212121;

  padding: 2rem;
`;

const AddContactForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;

  & svg {
    width: 10rem;
    height: auto;
    color: white;
  }
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

const Button = styled.button`
  width: 40%;
  border-radius: 0.8rem;
  height: 5rem;
  background-color: #976fff;
  color: white;
  border: none;
  align-self: end;

  &:hover {
    cursor: pointer;
    background-color: #975ff0;
  }
`;

function AddContact() {
  return (
    <Overlay>
      <Container>
        <Header>
          <h2>New Contact</h2>
          <IoClose />
        </Header>
        <AddContactForm>
          <FaUser />
          <InputsContainer>
            <InputUserData
              id={"Email"}
              placeHolder={"Email"}
              maxLength={30}
              pattern={"^[a-zA-Zs]+$"}
              onChange={() => {}}
              value={""}
              labelBackground={"#212121"}
            />

            <InputUserData
              id={"firstName"}
              placeHolder={"First Name"}
              maxLength={30}
              pattern={"^[a-zA-Zs]+$"}
              onChange={() => {}}
              value={""}
              labelBackground={"#212121"}
            />

            <InputUserData
              id={"lastName"}
              placeHolder={"Last Name"}
              maxLength={30}
              pattern={"^[a-zA-Zs]+$"}
              onChange={() => {}}
              value={""}
              labelBackground={"#212121"}
            />
            <Button>Add Contact</Button>
          </InputsContainer>
        </AddContactForm>
      </Container>
    </Overlay>
  );
}

export default AddContact;
