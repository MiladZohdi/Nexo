import { useState } from "react";
import { FaUser } from "react-icons/fa";
import styled from "styled-components";
import ContactDeleteBtn from "./ContactDeleteBtn";
import InputUserData from "./InputUserData";
import RightSideBarContent from "./RightSideBarContent";

const EditContactDataForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

function EditContact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <>
      <RightSideBarContent>
        <FaUser />
        <span>Zoomit</span>
        <EditContactDataForm>
          <InputUserData
            id="firstName"
            placeHolder="First Name"
            maxLength={30}
            pattern="^[a-zA-Z\s]+$"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            labelBackground="#212121"
          />
          <InputUserData
            id="lastName"
            placeHolder="Last Name"
            maxLength={30}
            pattern="^[a-zA-Z\s]+$"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            labelBackground="#212121"
          />
        </EditContactDataForm>
        <ContactDeleteBtn />
      </RightSideBarContent>
    </>
  );
}

export default EditContact;
