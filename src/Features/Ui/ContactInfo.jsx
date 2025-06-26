import { useState } from "react";
import { FaUser } from "react-icons/fa";
import styled from "styled-components";
import ContactDeleteBtn from "./ContactDeleteBtn";
import InputUserData from "./InputUserData";
import RightSideBarHeader from "./RightSideBarHeader";
import RightSideBarContent from "./RightSideBarContent";

const ContactData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  & p {
    font-size: 1.4rem;
  }
`;

const ContactInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

function ContactInfo({ handleTargetUserOpen }) {
  return (
    <>
      <RightSideBarHeader handleTargetUserOpen={handleTargetUserOpen}>
        <span>Contact Info</span>
      </RightSideBarHeader>
      <RightSideBarContent>
        <FaUser />
        <span>Zoomit</span>
        <p>last seen recently</p>
        <ContactData>
          <ContactInfoRow>
            <FaUser />
            <p>name</p>
          </ContactInfoRow>

          <p>last name</p>
          <p>email</p>
          <p>username</p>
        </ContactData>

        <ContactDeleteBtn />
      </RightSideBarContent>
    </>
  );
}

export default ContactInfo;
