import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
  handleMarkAllAsComplete,
  handleAddItem,
  handleRemoveAllItems,
  handleResetToInitial,
}) {
  return (
    <div className="sidebar">
      <AddItemForm onSubmit={handleAddItem} />
      <ButtonGroup
        handleRemoveAllItems={handleRemoveAllItems}
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleResetToInitial={handleResetToInitial}
      />
    </div>
  );
}
