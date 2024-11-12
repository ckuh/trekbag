export default function Counter({ completedCount, totalCount }) {
  return (
    <p>
      <b>
        {completedCount} / {totalCount}
      </b>{" "}
      items packed
    </p>
  );
}
