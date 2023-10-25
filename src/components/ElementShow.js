function ElementShow({ item,handleRemoveItem, handleSaveItem}) {
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
