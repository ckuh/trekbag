import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
  handleAddItem,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
  handleRemoveAllItems,
  handleResetToInitial,
}) {
  return (
    <div className="sidebar">
      <AddItemForm onSubmit={handleAddItem} />
      <ButtonGroup
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        handleRemoveAllItems={handleRemoveAllItems}
        handleResetToInitial={handleResetToInitial}
      />
    </div>
  );
}
