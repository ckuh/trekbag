import Button from "./Button";

export default function ButtonGroup() {
  const secondaryButtonsText = [
    "Mark all as complete",
    "Mark all as incomplete",
    "Reset to initial",
    "Remove all items",
  ];

  return (
    <section className="button-group">
      {secondaryButtonsText.map((text) => (
        <Button key={text} type="secondary">
          {text}
        </Button>
      ))}
    </section>
  );
}
