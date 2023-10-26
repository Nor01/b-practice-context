import { createContext, useState } from "react";
import axios from "axios";

const ItemContext = createContext();
function Provider({ children }) {
  const [items, setItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  const createNewItem = (inputItem) => {
    axios
      .post("http://localhost:3001/new-elements", {
        id: crypto.randomUUID(),
        title: inputItem,
        date: Date.now(),
      })
      .then((response) => {
        const updateItems = [...items, response.data];
        setItems(updateItems);
      })
      .catch((e) => {
        console.log("error al guardar el item", e);
      });
  };

  const getAllNewItems = () => {
    axios
      .get("http://localhost:3001/new-elements")
      .then((response) => {
        setItems(response.data);
      })
      .catch((e) => {
        console.log("error al cargar los items", e);
      });
  };
  const getAllSavedItems = () => {
    axios
      .get("http://localhost:3001/saved-elements")
      .then((response) => {
        setSavedItems(response.data);
      })
      .catch((e) => {
        console.log("error al cargar los items", e);
      });
  };

  const handleRemoveItem = (uuid) => {
    axios
      .delete(`http://localhost:3001/new-elements/${uuid}`)
      .then(() => {
        const updateItems = items.filter((item) => {
          return item.id !== uuid;
        });
        setItems(updateItems);
      })
      .catch((e) => {
        console.log("Error al borrar el item", e);
      });
  };

  const handleSaveItem = (item) => {
    axios
      .post("http://localhost:3001/saved-elements", item)
      .then((response) => {
        const updateSavedItems = [...savedItems, item];

        setSavedItems(updateSavedItems);

        handleRemoveItem(item.id);
        console.log(response.data);
      })
      .catch((e) => {
        console.log("Error al guardar el item", e);
      });
  };

  const handleRemoveSavedItem = (uuid) => {
    axios.delete(`http://localhost:3001/saved-elements/${uuid}`).then(() => {
      const updateItems = savedItems.filter((item) => {
        return item.id !== uuid;
      });
      setSavedItems(updateItems);
    });
  };

  const functionToShare = {
    items,
    savedItems,
    createNewItem,
    getAllNewItems,
    getAllSavedItems,
    handleRemoveItem,
    handleSaveItem,
    handleRemoveSavedItem,
  };
  return (
    <>
      <ItemContext.Provider value={functionToShare}>
        {children}
      </ItemContext.Provider>
    </>
  );
}

export { Provider };
export default ItemContext;
