import SavedElementShow from "./SavedElementShow";

function SaveElementsList({savedItems,handleRemoveSavedItem}) {
    const renderedSavedItems= savedItems.map((item)=>{
return <li key={item.id}><SavedElementShow item={item} handleRemoveSavedItem={handleRemoveSavedItem}/></li>
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
