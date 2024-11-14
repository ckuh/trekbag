import Counter from "./Counter";
import Logo from "./Logo";
import { useItemsStore } from "../stores/itemsStore";

export default function Header() {
  const items = useItemsStore((state) => state.items);

  return (
    <header>
      <Logo />
      <Counter
        completedCount={items.filter((item) => item.checked).length}
        totalCount={items.length}
      />
    </header>
  );
}
