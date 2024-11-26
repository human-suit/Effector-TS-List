import { useState } from "react";
// import Counter from "./components/Counter";
// import User from "./components/User";
import { useUnit } from "effector-react";
import {
  addItem,
  counter,
  itemStore,
  plus,
  removeItem,
  reloadItem,
  fetchItems,
  setCounter,
} from "./stores/list";
import "./App.css";
function App() {
  const [inputName, setInputName] = useState("");
  const [items, addListItem, removeListItem, reloadItems] = useUnit([
    itemStore,
    addItem,
    removeItem,
    reloadItem,
  ]);
  const [count, onPlus, setCount] = useUnit([counter, plus, setCounter]);
  return (
    <>
      <div>
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <button
          className="add"
          onClick={() => {
            addListItem({ id: count, name: inputName });
            setInputName("");
            onPlus();
          }}
        >
          Добавить
        </button>
        <button
          className="reload"
          onClick={async () => {
            reloadItems(await fetchItems());
            setCount(4);
          }}
        >
          Стандарт
        </button>
        {items.map((item) => (
          <div className="list" key={item.id!}>
            {item.id!} | {item.name}
            <button className="del" onClick={() => removeListItem(item.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      {/* <Counter />
      <User userID={1} /> */}
    </>
  );
}

export default App;
