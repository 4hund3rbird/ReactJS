import { useState } from "react";

const Counter = () => {
  const [state, setState] = useState(0);
  return (
    <div>
      <button onClick={() => setState((e) => e + 1)}>+</button>
      <span>{state}</span>
      <button onClick={() => setState((e) => e - 1)}>-</button>
    </div>
  );
};

export default Counter;
