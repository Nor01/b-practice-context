import ElementShow from "./ElementShow";
import { useContext } from "react";
import ItemContext from "../context";

function NewElementList() {
  const { items } = useContext(ItemContext);

  const renderedNewItems = items.map((item) => {
    return (
      <li key={item.id}>
        <ElementShow item={item} />
      </li>
    );
  });
  return (
    <>
      <h2>Lista de elementos Agregados</h2>
      {items.length === 0 ? (
        <p>
          <strong>No hay elementos en la lista</strong>
        </p>
      ) : (
        <ul>{renderedNewItems}</ul>
      )}
    </>
  );
}

export default NewElementList;
