import { useEffect, useRef } from "react";
import { BiSolidSend } from "react-icons/bi";
import { MdDone } from "react-icons/md";
import styled from "styled-components";

const Message = styled.main`
  background-color: #181818;
  grid-area: message;
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100%;
  overflow: hidden;
`;

const MessageList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-height: 85dvh;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 1rem 5rem;
  color: #fff;
  overflow-y: scroll;

  scrollbar-color: #373737 var(--background-color);

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

  & li {
    padding: 2rem;
    background-color: #212121;
    border-radius: 2rem 2rem 2rem 0rem;
    max-width: 60%;
    margin-bottom: 1rem;
    word-break: break-word;

    &:first-child {
      margin-top: 1rem;
    }

    & p {
      font-size: 1.4rem;
      line-height: 1.6;
      overflow-wrap: anywhere;
    }

    & div {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      align-items: center;
      margin-top: 0.5rem;

      & span {
        font-size: 1.2rem;
        color: white;
      }

      & svg {
        height: 1.6rem;
        width: auto;
        color: white;
      }
    }
  }

  & li.sent {
    background-color: var(--foucs-color);
    border-radius: 2rem 2rem 0rem 2rem;
    align-self: flex-end;
  }
`;

const ChatInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: cneter;
  column-gap: 1rem;
  width: 100%;
  padding: 0rem 5rem 1rem 5rem;
`;

const ChatInput = styled.input`
  width: 100%;
  height: 5rem;
  background-color: #212121;
  border: none;
  border-radius: 2rem;
  color: #fff;
  padding: 0 2rem;
  font-size: 1.4rem;
  outline: none;
`;

const SendBtn = styled.button`
  background-color: red;
  padding: 1rem 1rem;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--foucs-color);
  transition: 0.3s ease-out;

  &:hover {
    cursor: pointer;
    transform: rotate(180deg);
  }
  & svg {
    width: 1.5rem;
    height: 1.5rem;
    color: white;
  }
`;

function MessageBox() {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "auto" });
  }, []);

  const messages = [
    {
      text: "Hey, are you coming to the meeting?",
      sent: true,
      read: false,
      date: "23:57 2025/01/30",
    },
    {
      text: "Yeah, I’ll be there in 10 minutes.",
      sent: false,
      read: true,
      date: "12:43 2025/02/14",
    },
    {
      text: "Don't forget to bring the documents.",
      sent: true,
      read: true,
      date: "09:21 2025/03/05",
    },
    {
      text: "Got it! I have everything packed already.",
      sent: true,
      read: false,
      date: "16:09 2025/01/22",
    },
    {
      text: "Awesome. See you soon!",
      sent: false,
      read: true,
      date: "02:17 2025/04/19",
    },
    {
      text: "Let’s grab coffee after the meeting?",
      sent: true,
      read: true,
      date: "18:34 2025/02/08",
    },
    {
      text: "Sounds good to me.",
      sent: false,
      read: false,
      date: "07:48 2025/03/29",
    },
    {
      text: "I know a place nearby we can go to.",
      sent: true,
      read: false,
      date: "13:56 2025/05/11",
    },
    {
      text: "Perfect. Let’s do it!",
      sent: false,
      read: true,
      date: "20:25 2025/06/10",
    },
  ];

  return (
    <Message>
      <MessageList>
        {messages.map((msg, i) => (
          <li key={i} className={msg.sent ? "sent" : ""}>
            <p>{msg.text}</p>
            <div>
              <span>23:57 2025/01/30</span>
              <MdDone />
            </div>
          </li>
        ))}
        <div ref={bottomRef}></div>
      </MessageList>
      <ChatInputContainer>
        <ChatInput placeholder="type here" />
        <SendBtn>
          <BiSolidSend />
        </SendBtn>
      </ChatInputContainer>
    </Message>
  );
}

export default MessageBox;
