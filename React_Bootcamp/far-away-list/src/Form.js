import { useState } from "react";

export default function Form({ fun3 }) {
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
