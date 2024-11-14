import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

import useItemsContext from "../lib/hooks/useItemsContext";

export default function Sidebar() {
  const { handleAddItem } = useItemsContext();

  return (
    <div className="sidebar">
      <AddItemForm onSubmit={handleAddItem} />
      <ButtonGroup />
    </div>
  );
}
