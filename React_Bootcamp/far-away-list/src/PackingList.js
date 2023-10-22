import { useState } from "react";
import Item from "./Item";
export default function Packinglist({ l, fun1, fun2, fun3, clr }) {
  const [sort, sortby] = useState("input");
  let list = [];
  if (sort === "input") {
    list = l;
  } else if (sort === "qty") {
    list = l.slice().sort((a, b) => b.qty - a.qty);
  } else if (sort === "description") {
    list = l.slice().sort();
  }
  return (
    <div className="list">
      <ul>
        {list.map((e) => {
          return (
            <Item
              key={e.id}
              id={e.id}
              i={e.item}
              q={e.qty}
              ispacked={e.packed}
              handleupdate={fun1}
              handlepack={fun2}
              updatepack={fun3}
            />
          );
        })}
      </ul>
      <div>
        <span>
          <select
            className="actions"
            value={sort}
            onChange={(e) => {
              sortby(e.target.value);
            }}
          >
            <option value={"input"}>Sort by input order.</option>
            <option value={"qty"}>Sort by quantity.</option>
            <option value={"description"}>Sort by description.</option>
          </select>
        </span>
        <span className="actions">
          <button onClick={clr}>Clear List</button>
        </span>
      </div>
    </div>
  );
}
