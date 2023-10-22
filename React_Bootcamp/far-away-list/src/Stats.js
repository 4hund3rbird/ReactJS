export default function Stats({ l, i, p }) {
  return (
    <footer className="stats">
      <em>
        {Math.floor((p / i) * 100) === 100
          ? "You are packed up and ready to go. 🚀"
          : `👜 You have ${i === 0 ? "no" : i} ${
              i === 1 ? "item" : "items"
            } on your
              list,
              ${
                i === 0
                  ? " start considering adding some itmes. 👆"
                  : `and you already packed
              ${Math.floor((p / i) * 100) ? Math.floor((p / i) * 100) : 0}%`
              }`}
      </em>
    </footer>
  );
}
