import Button from "./Button";
import { useState } from "react";

export default function Splitbillform({
  friend,
  fun,
  updatebalance,
  handlesplitisopen,
}) {
  const [form, handleform] = useState({
    bill: 0,
    u_expense: 0,
    f_expense: 0,
    who: "You",
  });
  function handlesubmit() {
    fun({
      id: friend.id,
      balance: form.who === "You" ? form.f_expense : -form.u_expense,
    });
    updatebalance({
      id: friend.id,
      balance: form.who === "You" ? form.f_expense : -form.u_expense,
    });
    handlesplitisopen();
  }
  return (
    <form
      className="form-split-bill"
      onSubmit={(e) => {
        handlesubmit();
        e.preventDefault();
      }}
    >
      <h2>Split a bill with {friend.name}</h2>

      <label>💵 Bill Value</label>
      <input
        type="number"
        // value={form.bill}
        onChange={(e) => {
          handleform({
            bill: e.target.value,
            u_expense: form.u_expense,
            f_expense: e.target.value - form.u_expense,
            who: form.who,
          });
        }}
      />
      <label>🕴️Your expense</label>
      <input
        type="number"
        // value={form.u_expense}
        onChange={(e) => {
          handleform({
            bill: form.bill,
            u_expense: e.target.value,
            f_expense: form.bill - e.target.value,
            who: form.who,
          });
        }}
      />
      <label>🧑🏽‍🤝‍👩🏻{friend.name}'s expense</label>
      <input
        type="number"
        disabled
        value={form.f_expense >= 0 && form.f_expense}
      />
      <label>🤑 Who is paying the bill? </label>
      <select
        value={form.who}
        onChange={(e) => {
          handleform((i) => {
            return { ...i, who: e.target.value };
          });
        }}
      >
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
