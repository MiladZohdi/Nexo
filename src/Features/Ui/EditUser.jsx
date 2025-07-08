import InputUserData from "./InputUserData";
import styled from "styled-components";
import ListHeader from "./ListHeader";
import { useState } from "react";

const EditUserForm = styled.form`
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

const Button = styled.button`
  width: 30%;
  border-radius: 0.8rem;
  height: 5rem;
  background-color: #976fff;
  color: white;
  border: none;

  align-self: end;
`;

function EditUser() {
  const [value, setValue] = useState("");
  return (
    <>
      <ListHeader type="edit">
        <h2>Edit</h2>
      </ListHeader>
      <EditUserForm>
        <InputUserData
          id={"Email"}
          placeHolder={"Email"}
          maxLength={30}
          pattern={"^[a-zA-Zs]+$"}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          labelBackground={"#212121"}
        />
        <InputUserData
          id={"firstName"}
          placeHolder={"First Name"}
          maxLength={30}
          pattern={"^[a-zA-Zs]+$"}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          labelBackground={"#212121"}
        />
        <InputUserData
          id={"lastName "}
          placeHolder={"Last Name"}
          maxLength={30}
          pattern={"^[a-zA-Zs]+$"}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          labelBackground={"#212121"}
        />

        <Button>Save</Button>
      </EditUserForm>
    </>
  );
}

export default EditUser;
