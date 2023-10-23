export default function Button({ children, fun }) {
  return (
    <button className="button" onClick={fun}>
      {children}
    </button>
  );
}
