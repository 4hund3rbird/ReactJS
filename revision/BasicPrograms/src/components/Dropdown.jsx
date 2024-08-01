import { useState } from "react";

const Dropdown = () => {
  const [show, setshow] = useState(false);
  const [current, setcurrent] = useState("");
  const options = ["start", "end", "next", "please"];
  return (
    <div className="dropdown">
      <h1>Dropdown Menu</h1>

      {current ? (
        <h1>
          👉 {current}
          <span
            onClick={() => {
              setcurrent("");
            }}
          >
            <t /> ❌
          </span>
        </h1>
      ) : !show ? (
        <h1
          onClick={() => {
            setshow((show) => !show);
          }}
        >
          👇
        </h1>
      ) : (
        <h1
          onClick={() => {
            setshow((show) => !show);
          }}
        >
          👆
        </h1>
      )}

      {show && (
        <ul>
          {options.map((e) => (
            <SelectLi
              key={e}
              option={e}
              fun={(i) => {
                setcurrent(i);
              }}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

const SelectLi = ({ option, fun }) => {
  return (
    <li
      onClick={() => {
        fun(option);
      }}
    >
      {option}
    </li>
  );
};

export default Dropdown;
