import Button from "./Button";
export default function Friend({ friend, fun1, fun2 }) {
  function handlefriend() {
    fun1();
    fun2(friend);
  }
  return (
    <li>
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
      <Button fun={handlefriend}>Select</Button>
    </li>
  );
}
