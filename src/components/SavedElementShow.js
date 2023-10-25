import { useContext } from "react";
import ItemContext from "../context";
function SavedElementShow({ item }) {
  const {handleRemoveSavedItem}=useContext(ItemContext)
  return (
    <>
      {item.title}
      <span
        onClick={() => {
          handleRemoveSavedItem(item.id);
        }}
      >
        🗑️
      </span>
    </>
  );
}

export default SavedElementShow;
