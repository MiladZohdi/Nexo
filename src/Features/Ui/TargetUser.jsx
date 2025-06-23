import { FaArrowLeft, FaUser } from "react-icons/fa";
import styled from "styled-components";
import InputUserData from "./InputUserData";
import { useState } from "react";

const StyledTargetUser = styled.div`
  background-color: #212121;
  grid-area: targetUser;
  height: 100%;
  border-left: 3px solid #646464;
  padding: 1.5rem 1rem 0.6rem 2rem;
  display: grid;
  grid-template-rows: 3rem 1fr 30rem;
`;

const TargetUserHeader = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  & svg {
    width: 2.3rem;
    height: 2.3rem;
    color: white;
  }

  & span {
    color: white;
    font-size: 1.6rem;
    font-weight: 500;
  }

  & svg:hover {
    cursor: pointer;
    color: var(--foucs-color);
  }
`;

const TargetUserInfo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;

  gap: 2rem;

  & svg {
    width: 6rem;
    height: 6rem;
    color: white;
  }

  & span {
    color: white;
    font-size: 1.8rem;
    font-weight: 500;
  }
`;

const TargetUserDataForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

function TargetUser({ handleTargetUserOpen }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <StyledTargetUser>
      <TargetUserHeader>
        <FaArrowLeft onClick={handleTargetUserOpen} />
        <span>Edit</span>
      </TargetUserHeader>
      <TargetUserInfo>
        <FaUser />
        <span>Zoomit</span>
        <TargetUserDataForm>
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
        </TargetUserDataForm>
      </TargetUserInfo>
    </StyledTargetUser>
  );
}

export default TargetUser;
