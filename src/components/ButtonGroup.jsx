import Button from "./Button";

export default function ButtonGroup({
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
  handleRemoveAllItems,
  handleResetToInitial,
}) {
  return (
    <section className="button-group">
      <Button onClick={handleMarkAllAsComplete} type="secondary">
        Mark all as complete
      </Button>
      <Button onClick={handleMarkAllAsIncomplete} type="secondary">
        Mark all as incomplete
      </Button>
      <Button onClick={handleResetToInitial} type="secondary">
        Reset to initial
      </Button>
      <Button onClick={handleRemoveAllItems} type="secondary">
        Remove all items
      </Button>
    </section>
  );
}
