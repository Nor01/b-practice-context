function SavedElementShow({ item,handleRemoveSavedItem }) {
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
