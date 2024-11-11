export default function Button({ type, children, onClick }) {
  const isSecondary = type === "secondary";
  return (
    <button
      className={`btn ${isSecondary ? "btn--secondary" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
