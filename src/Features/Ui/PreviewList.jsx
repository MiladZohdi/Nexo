import ChatsListFilter from "./ChatsListFilter";
import ListContainer from "./ListContainer";
import ListHeader from "./ListHeader";
import SearchBox from "./SearchBox";

function PreviewList({ type }) {
  return (
    <>
      <ListHeader HeaderIcon={type === "chat" ? "Hamburger" : "ArrowLeft"}>
        <SearchBox />
      </ListHeader>
      {type === "chat" ? <ChatsListFilter /> : ""}
      <ListContainer type={type} />
    </>
  );
}
export default PreviewList;
