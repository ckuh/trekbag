import { secondaryButtonsText } from "../lib/constants";
import Button from "./Button";

export default function ButtonGroup({ setItems }) {
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
