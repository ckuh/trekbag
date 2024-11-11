import Button from "./Button";

export default function ButtonGroup({
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
  handleRemoveAllItems,
  handleResetToInitial,
}) {
  const secondaryButtons = [
    { text: "Mark all as complete", onClick: handleMarkAllAsComplete },
    { text: "Mark all as incomplete", onClick: handleMarkAllAsIncomplete },
    { text: "Reset to initial", onClick: handleResetToInitial },
    { text: "Remove all items", onClick: handleRemoveAllItems },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map(({ text, onClick }) => (
        <Button key={text} onClick={onClick} type="secondary">
          {text}
        </Button>
      ))}
    </section>
  );
}
