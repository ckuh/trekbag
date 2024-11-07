export default function Button({ type, children }) {
  const isSecondary = type === "secondary";
  return (
    <button className={`btn ${isSecondary ? "btn--secondary" : ""}`}>
      {children}
    </button>
  );
}
