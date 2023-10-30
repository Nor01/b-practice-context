import { useContext } from "react";
import ItemContext from "../context";
function ElementShow({ item}) {
  const {handleRemoveItem,handleSaveItem}=useContext(ItemContext)
  return (
    <>
      {item.title}
      <span
        onClick={() => {
          handleRemoveItem(item.id);
        }}
      >
        🗑️
      </span>
      <span
        onClick={() => {
          handleSaveItem(item);
        }}
      >
        💾
      </span>
    </>
  );
}

export default ElementShow;
