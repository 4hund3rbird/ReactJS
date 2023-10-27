import Button from "./Button";
import Friend from "./Friend";
import { useState } from "react";
import Friendform from "./Friendform";

export default function Friendslist({
  funfriend,
  funtoggle,
  splitfriend,
  friends,
  updatefriend,
}) {
  const [activefriend, updateactivefriend] = useState(1);
  const [friendformisopen, togglefriendform] = useState(false);
  function toggle() {
    togglefriendform(!friendformisopen);
  }

  return (
    <ul>
      {friends.map((e) => {
        return (
          <Friend
            key={e.id}
            activefriend={activefriend}
            updateactivefriend={(e) => updateactivefriend(e)}
            friend={e}
            fun1={funtoggle}
            fun2={funfriend}
          />
        );
      })}

      {friendformisopen && <Friendform fun={toggle} update={updatefriend} />}

      <li>
        <Button fun={toggle}>
          {friendformisopen ? "Close" : "Add Friend"}
        </Button>
      </li>
    </ul>
  );
}
