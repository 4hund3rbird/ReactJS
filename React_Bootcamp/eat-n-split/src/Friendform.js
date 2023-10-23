import Button from "./Button";
import { useState } from "react";

export default function Friendform({ update, fun }) {
  const [data, updateData] = useState({ name: "", image: "" });
  function handlesubmit() {
    update(data);
    // fun();
    updateData({ name: "", image: "" });
  }

  return (
    <form
      className="form-add-friend"
      onSubmit={(e) => {
        e.preventDefault();
        handlesubmit();
      }}
    >
      <label>🤗Friend's name</label>
      <input
        type="text"
        value={data.name}
        onChange={(e) =>
          updateData((i) => {
            return {
              name: e.target.value,
              image: `https://i.pravatar.cc/48?u=${Math.floor(
                Math.random() * 100000
              )}`,
            };
          })
        }
      />
      <label>🖼️ Image URL</label>
      <input
        type="text"
        value={`https://i.pravatar.cc/48?u=${Math.floor(
          Math.random() * 100000
        )}`}
        onChange={(e) =>
          updateData((i) => {
            return {
              name: i.name,
              image: e.target.value,
            };
          })
        }
      />
      <Button>Add</Button>
    </form>
  );
}
