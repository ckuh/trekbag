import Counter from "./Counter";
import Logo from "./Logo";
import useItemsContext from "../lib/hooks/useItemsContext";

export default function Header() {
  const { items } = useItemsContext();

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
