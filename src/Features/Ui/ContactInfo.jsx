import { FaUser } from "react-icons/fa";
import styled from "styled-components";
import ContactDeleteBtn from "./ContactDeleteBtn";
import RightSideBarContent from "./RightSideBarContent";
import { IoIosAt } from "react-icons/io";

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
  justify-content: start;
  align-items: center;
  width: 100%;
  background-color: transparent;
  border: none;
  border-radius: 1rem;
  padding: 1rem 0.5rem;
  font-size: 1.4rem;

  gap: 1rem;

  & svg {
    width: 2.5rem;
    height: auto;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`;

function ContactInfo() {
  return (
    <>
      <RightSideBarContent>
        <FaUser />
        <span>Zoomit</span>
        <p>last seen recently</p>
        <ContactData>
          <ContactInfoRow>
            <IoIosAt />
            <p>email</p>
          </ContactInfoRow>
          <ContactInfoRow>
            <FaUser />
            <p>username</p>
          </ContactInfoRow>
        </ContactData>

        <ContactDeleteBtn />
      </RightSideBarContent>
    </>
  );
}

export default ContactInfo;
