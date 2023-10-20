import { useState } from "react";

export default function App() {
  let [list, updateList] = useState([
    { item: "soap", qty: 3 },
    { item: "Brush", qty: 1 },
  ]);
  return (
    <div className="app">
      <Logo />
      <Form />
      <Packinglist l={list} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away List ✈️</h1>;
}
function Form() {
  return (
    <form className="add-form">
      <p>What do you need for your trip 😍.</p>
      <input type="text"></input>
      <button>Add</button>
    </form>
  );
}
function Packinglist({ l }) {
  return (
    <ul className="list">
      {l.map((e) => {
        return <Item i={e.item} q={e.qty} />;
      })}
    </ul>
  );
}
function Item({ i, q }) {
  return (
    <li>
      {i} - {q} <input type="checkbox"></input>
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
