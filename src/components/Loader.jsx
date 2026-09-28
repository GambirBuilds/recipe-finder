export default function Loader({ text = "Loading…" }) {
  return (
    <div className="loader" role="status">
      <span className="spinner" aria-hidden="true" />
      {text}
    </div>
  );
}
