import ChatsListFilter from "./ChatsListFilter";
import ListContainer from "./ListContainer";
import ListHeader from "./ListHeader";

function PreviewList({ type }) {
  return (
    <>
      <ListHeader type={type} />
      {type === "chat" ? <ChatsListFilter /> : ""}
      <ListContainer type={type} />
    </>
  );
}
export default PreviewList;
