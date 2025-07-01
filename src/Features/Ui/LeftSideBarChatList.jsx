import ChatFilterTab from "./ChatFilterTab";
import ChatsContainer from "./ChatsContainer";
import LeftSideBarChatsHeader from "./LeftSideBarChatsHeader";

function LeftSideBarChatList() {
  return (
    <>
      <LeftSideBarChatsHeader />
      <ChatFilterTab />
      <ChatsContainer />
    </>
  );
}
export default LeftSideBarChatList;
