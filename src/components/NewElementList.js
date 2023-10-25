import ElementShow from "./ElementShow";

function NewElementList({items,handleRemoveItem,handleSaveItem}) {

    const renderedNewItems= items.map((item)=>{
return <li key={item.id}><ElementShow item={item} handleRemoveItem={handleRemoveItem} handleSaveItem={handleSaveItem}/></li>
    })
  return (
    <>
      <h2>Lista de elementos Agregados</h2>
      {items.length === 0 ? (
        <p>
          <strong>No hay elementos en la lista</strong>
        </p>
      ) : (
        <ul>
             {renderedNewItems}
        </ul>
      )}
    </>
  );
}

export default NewElementList;
