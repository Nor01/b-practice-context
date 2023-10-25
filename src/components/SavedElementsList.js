import SavedElementShow from "./SavedElementShow";
import { useContext } from "react";
import ItemContext from "../context";

function SaveElementsList() {
  const {savedItems}=useContext(ItemContext)

    const renderedSavedItems= savedItems.map((item)=>{
return <li key={item.id}><SavedElementShow item={item}/></li>
    })
  return (
    <>
      <h2>Lista de elementos Guardados</h2>
      {savedItems.length === 0 ? (
        <p>
          <strong>No hay elementos en la lista</strong>
        </p>
      ) : (
        <ul>
              {renderedSavedItems}
        </ul>
      )}
    </>
  );
}

export default SaveElementsList;
