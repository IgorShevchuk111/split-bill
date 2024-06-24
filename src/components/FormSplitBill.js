import { useState, useEffect } from "react";
import Button from "./Button";

function FormSplitBill({ onSplitBill, selectedFriend }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  useEffect(() => {
    setBill("");
    setPaidByUser("");
  }, [selectedFriend]);

  return (
    <form onSubmit={handleSubmit} className="form-split-bill">
      <h2>Split bill with {selectedFriend.name}</h2>
      <label>💰 Bill value</label>
      <input
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
        type="text"
      />
      <label>🧍‍♀️ Your expense</label>
      <input
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(+e.target.value > bill ? paidByUser : +e.target.value)
        }
        type="text"
      />
      <label>👫 {selectedFriend.name} expense</label>
      <input value={paidByFriend} type="text" disabled />
      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button type="submit">Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
