import Button from "./Button";

export default function ButtonGroup({ handleRemoveAllItems }) {
  return (
    <section className="button-group">
      <Button type="secondary">Mark all as complete</Button>
      <Button type="secondary">Mark all as incomplete</Button>
      <Button type="secondary">Reset to initial</Button>
      <Button onClick={handleRemoveAllItems} type="secondary">
        Remove all items
      </Button>
    </section>
  );
}
