import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ onSubmit }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemText) {
      alert("Please enter an item");
      inputRef.current.focus();
      return;
    }

    onSubmit(itemText);
    setItemText("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        autoFocus
        ref={inputRef}
      />
      <Button>Add to list</Button>
    </form>
  );
}
