import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({ setItems }) {
  return (
    <div className="sidebar">
      <AddItemForm
        onSubmit={(items) => {
          setItems((prevItems) => [...prevItems, items]);
        }}
      />
      <ButtonGroup />
    </div>
  );
}
