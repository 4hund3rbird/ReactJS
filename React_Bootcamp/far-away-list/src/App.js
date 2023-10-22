import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Packinglist from "./PackingList";
import Stats from "./Stats";
export default function App() {
  const [list, updateList] = useState([
    { id: 1, item: "soap", qty: 3, packed: true },
    { id: 2, item: "socks", qty: 4, packed: false },
    { id: 3, item: "cola", qty: 9, packed: false },
    { id: 4, item: "brush", qty: 2, packed: false },
  ]);
  function clearList() {
    updateList((list) => []);
  }
  function removeitem(id) {
    updateList((list) => {
      return list.filter((item) => item.id !== id);
    });
  }
  function additem(i, q) {
    updateList((list) => {
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
          return { ...item, packed: !item.packed };
        }
        return item;
      });
    });
  }
  return (
    <div className="app">
      <Logo />
      <Form fun3={additem} />
      <Packinglist l={list} fun1={removeitem} fun2={packitem} clr={clearList} />
      <Stats l={list} i={list.length} p={list.filter((e) => e.packed).length} />
    </div>
  );
}
