import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [inputItem, setInputItem] = useState("");
  const [savedItems, setSavedItems] = useState([]);

  const handleInputItemChange = (e) => {
    setInputItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateItems = [
      ...items,
      { id: crypto.randomUUID(), title: inputItem, date: Date.now() },
    ];
    setItems(updateItems);
  };

  const handleRemoveItem = (uuid) => {
    const updateItems = items.filter((item) => {
      return item.id !== uuid;
    });

    setItems(updateItems);
  };

  const handleSaveItem = (item) => {
    const updateSavedItems = [...savedItems, item];

    setSavedItems(updateSavedItems);

    handleRemoveItem(item.id);
  };

  const handleRemoveSavedItem = (uuid) => {
    const updateItems = savedItems.filter((item) => {
      return item.id !== uuid;
    });

    setSavedItems(updateItems);
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
        <h2>Lista de elementos Agregados</h2>
        {items.length === 0 ? (
          <p>
            <strong>No hay elementos en la lista</strong>
          </p>
        ) : (
          <ul>
            {items.map((item, index) => {
              return (
                <li key={index}>
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
                </li>
              );
            })}
          </ul>
        )}

        <h2>Lista de elementos Guardados</h2>

        {savedItems.length === 0 ? (
          <p>
            <strong>No hay elementos en la lista</strong>
          </p>
        ) : (
          <ul>
            {savedItems.map((item, index) => {
              return (
                <li key={index}>
                  {item.title}
                  <span
                    onClick={() => {
                      handleRemoveSavedItem(item.id);
                    }}
                  >
                    🗑️
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
}

export default App;
