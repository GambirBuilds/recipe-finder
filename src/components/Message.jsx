export default function Message({ title, text, isError = false }) {
  return (
    <div className={isError ? "message error" : "message"} role={isError ? "alert" : undefined}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
