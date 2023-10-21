import { useState } from "react";

export default function App() {
  let itemcount = 4;
  let [list, updateList] = useState([
    { id: 1, item: "soap", qty: 3, packed: false },
    { id: 2, item: "socks", qty: 4, packed: false },
    { id: 3, item: "cola", qty: 9, packed: false },
    { id: 4, item: "brush", qty: 2, packed: false },
  ]);
  function removeitem(id) {
    updateList((list) => {
      itemcount--;
      return list.filter((item) => item.id !== id);
    });
  }
  function additem(i, q) {
    updateList((list) => {
      itemcount++;
      return [
        ...list,
        {
          id: Date.now(),
          item: i,
          qty: q,
          packed: false,
        },
      ];
    });
  }
  function packitem(id) {
    updateList((list) => {
      return list.map((item) => {
        if (item.id === id) {
          item.packed = !item.packed;
        }
        return item;
      });
    });
  }
  return (
    <div className="app">
      <Logo />
      <Form fun3={additem} />
      <Packinglist l={list} fun1={removeitem} fun2={packitem} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away List ✈️</h1>;
}
function Form({ fun3 }) {
  const [description, setdescription] = useState("");
  const [qty, setqty] = useState(1);

  function handlesubmit(e) {
    e.preventDefault();
    console.log(e);
    fun3(description, qty);
  }
  return (
    <form className="add-form" onSubmit={handlesubmit}>
      <p>What do you need for your trip 😍.</p>
      <select value={qty} onChange={(e) => setqty(parseInt(e.target.value))}>
        {Array.from({ length: 20 }, (e, i) => i + 1).map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
        placeholder="item..."
      ></input>
      <button onClick={handlesubmit}>Add</button>
    </form>
  );
}
function Packinglist({ l, fun1, fun2 }) {
  return (
    <div className="list">
      <ul>
        {l.map((e) => {
          return (
            <Item
              key={e.id}
              id={e.id}
              i={e.item}
              q={e.qty}
              ispacked={e.packed}
              handleupdate={fun1}
              handlepack={fun2}
            />
          );
        })}
      </ul>
    </div>
  );
}
function Item({ id, i, q, ispacked, handleupdate, handlepack }) {
  const [ischecked, updatecheck] = useState(false);
  return (
    <li>
      <span>
        <input
          type="checkbox"
          checked={ischecked}
          onChange={(evt) => {
            updatecheck(!ischecked);
            handlepack(id);
          }}
        ></input>
      </span>
      <span className={ischecked ? "packeditem" : " "}>
        {i} - {q}
      </span>
      <span>
        <button
          onClick={() => {
            handleupdate(id);
          }}
        >
          ❌
        </button>
      </span>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have x items on your list, and you already packed X%;</em>
    </footer>
  );
}
