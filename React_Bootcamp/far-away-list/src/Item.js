export default function Item({
  id,
  i,
  q,
  ispacked,
  handleupdate,
  handlepack,
  updatepack,
}) {
  return (
    <li>
      <span>
        <input
          type="checkbox"
          checked={ispacked}
          onChange={(evt) => {
            handlepack(id);
          }}
        ></input>
      </span>
      <span className={ispacked ? "packeditem" : " "}>
        {i} - {q}
      </span>
      <span>
        <button
          onClick={() => {
            handleupdate(id);
          }}
        >
          ❌
        </button>
      </span>
    </li>
  );
}
