import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ completedCount, totalCount }) {
  return (
    <header>
      <Logo />
      <Counter completedCount={completedCount} totalCount={totalCount} />
    </header>
  );
}
