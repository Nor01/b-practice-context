import { useEffect, useContext } from "react";
import "./App.css";
import NewElementList from "./components/NewElementList";
import SaveElementsList from "./components/SavedElementsList";
import ItemContext from "./context";

function App() {
  const { getAllItems, getAllSavedItems,handleSubmit,handleInputItemChange } = useContext(ItemContext);
  useEffect(() => {
    getAllItems();
    getAllSavedItems();
  }, []);

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
        <NewElementList/>
        <SaveElementsList/>
      </section>
    </main>
  );
}

export default App;
