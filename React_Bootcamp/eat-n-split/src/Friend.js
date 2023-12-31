import Button from "./Button";
import { useState } from "react";
export default function Friend({
  friend,
  fun1,
  fun2,
  activefriend,
  updateactivefriend,
  key,
}) {
  const [open, updateopen] = useState(false);
  function handlefriend() {
    fun1();
    fun2(friend);
    updateopen(!open);
    updateactivefriend(key);
  }
  return (
    <li style={open ? { backgroundColor: "#fff4e6" } : {}}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p
        className={
          (friend.balance > 0 && "green") ||
          (friend.balance < 0 && "red") ||
          " "
        }
      >
        {friend.balance > 0
          ? `${friend.name} owes you ${friend.balance}$`
          : friend.balance === 0
          ? `You and ${friend.name} are even`
          : `You owe ${friend.name} ${-friend.balance}$`}
      </p>
      <Button fun={handlefriend}>
        {open && key === activefriend ? "close" : "select"}
      </Button>
    </li>
  );
}
