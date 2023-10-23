import { useState } from "react";
import { v4 as uuid } from "uuid";
import Splitbillform from "./Splitbillform";
import Friendslist from "./Friendslist";

export default function Eatnsplit() {
  const [splitfriend, updatesplitfriend] = useState({});
  const [splitisopen, togglesplit] = useState(false);
  const [friends, addfriend] = useState([
    {
      id: uuid(),
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: uuid(),
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: uuid(),
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=1",
      balance: 0,
    },
  ]);

  function updatefriend(friend) {
    addfriend((list) => {
      return [
        ...list,
        { id: uuid(), name: friend.name, image: friend.image, balance: 0 },
      ];
    });
  }

  function updatebalance(friend) {
    addfriend((list) =>
      list.map((i) => {
        if (i.id === friend.id) {
          return { ...i, balance: i.balance + friend.balance };
        } else {
          return { ...i };
        }
      })
    );
  }

  function handlesplitisopen() {
    togglesplit(!splitisopen);
  }
  function handlesplitfriend(e) {
    updatesplitfriend(e);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <Friendslist
          funfriend={handlesplitfriend}
          funtoggle={handlesplitisopen}
          split={splitfriend}
          friends={friends}
          updatefriend={updatefriend}
        />
      </div>
      {splitisopen && (
        <Splitbillform
          friend={splitfriend}
          fun={updatesplitfriend}
          updatebalance={updatebalance}
          handlesplitisopen={handlesplitisopen}
        />
      )}
    </div>
  );
}
