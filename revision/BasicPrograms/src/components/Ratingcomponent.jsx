import { useState } from "react";

const Ratingcomponent = () => {
  const rating = 10;
  const [rateingno, setrating] = useState(0);
  const [clicked, setclicked] = useState(false);
  function makerating(e) {
    setrating(e);
  }
  return (
    <div>
      <h1>Rating Component</h1>
      <div className="flex gap-3">
        <div className="text-sm">
          {Array(rating)
            .fill(0)
            .map((e, i) => {
              return (
                <span
                  className="cursor-pointer  hover:text-xl"
                  onMouseEnter={() => {
                    //   setclicked(false);
                  }}
                  onMouseLeave={() => {
                    if (!clicked) {
                      setrating(0);
                    }
                  }}
                  onClick={() => {
                    setclicked(true);
                    setrating(i + 1);
                  }}
                  key={i + 1}
                >
                  {i + 1 <= rateingno ? "❤️" : "🤍"}
                </span>
              );
            })}
        </div>
        <div>
          <h1>{rateingno}</h1>
        </div>
        <div className="cursor-pointer" onClick={() => setrating(0)}>
          🔁
        </div>
      </div>
    </div>
  );
};

export default Ratingcomponent;
