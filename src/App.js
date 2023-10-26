import { useEffect, useState } from "react";
import "./App.css";
import NewElementList from "./components/NewElementList";
import axios from "axios";
import SaveElementsList from "./components/SavedElementsList";

function App() {
  const [items, setItems] = useState([]);
  const [inputItem, setInputItem] = useState("");
  const [savedItems, setSavedItems] = useState([]);

  const handleInputItemChange = (e) => {
    setInputItem(e.target.value);
  };

  const createNewItem=()=>{
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
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewItem()

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
  useEffect(() => {
    getAllNewItems();
    getAllSavedItems();
  }, []);

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

  return (
    <main>
      <aside>
        <h1>Ejercicio Breilyn</h1>
        <h2>Añadir y eliminar elementos de una lista</h2>

        <form onSubmit={handleSubmit} aria-label="Añadir elementos a la lista">
          <label>
            Escribir elemento:
            <input
              name="item"
              required
              type="text"
              placeholder="Videojuegos 🎮"
              onChange={handleInputItemChange}
            />
          </label>
          <button>Añadir elemento a la lista</button>
        </form>
      </aside>

      <section>
        <NewElementList
          items={items}
          handleRemoveItem={handleRemoveItem}
          handleSaveItem={handleSaveItem}
        />
        <SaveElementsList
          savedItems={savedItems}
          handleRemoveSavedItem={handleRemoveSavedItem}
        />
      </section>
    </main>
  );
}

export default App;
