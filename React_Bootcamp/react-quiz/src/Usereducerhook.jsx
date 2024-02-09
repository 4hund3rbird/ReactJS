import { useReducer, useRef } from "react";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "setstep":
      return { ...state, step: action.payload };
    case "reset":
      return { count: 0, step: 0 };
    case "incstep":
      return { ...state, step: state.step + 1 };
    case "decstep":
      return { ...state, step: state.step - 1 };
    default:
      throw new Error("undefined action");
  }
}

function popup_animation(ele, type) {
  if (type == "inc") {
    ele.current.style.color = "green";
  } else {
    ele.current.style.color = "red";
  }
  ele.current.classList.add("pop");
  setTimeout(() => {
    ele.current.style.color = "white";
    ele.current.classList.remove("pop");
  }, 500);
}

export const Usereducerhook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;
  const ele = useRef(null);
  const ele2 = useRef(null);
  return (
    <div className="border-8 w-fit m-auto rounded-lg md:flex md:flex-wrap">
      <h1 className="text-white underline text-center p-2">Step:{step}</h1>
      <div className="border-b-4 md:border-r-4 md:border-b-0 text-center p-2 flex gap-1">
        <h1
          ref={ele2}
          className="bg-black text-center text-white text-xl w-20 border-2 p-2 rounded"
        >
          {step}
        </h1>
        <div className="flex flex-col gap-1">
          <button
            className="bg-white border-2 rounded px-1"
            onClick={() => {
              popup_animation(ele2, "inc");
              dispatch({ type: "incstep" });
            }}
          >
            +
          </button>
          <button
            className="bg-white border-2 rounded px-1"
            onClick={() => {
              popup_animation(ele2, "dec");
              dispatch({ type: "decstep" });
            }}
          >
            -
          </button>
        </div>
      </div>
      <h1 className="text-white  p-2 text-center underline">
        Count:{count}+{step}
      </h1>
      <h1 className="text-white text-3xl text-center p-2" ref={ele}>
        {count}
      </h1>
      <div className="m-auto gap-4 w-fit border-t-4 md:border-l-4 md:border-t-0 ">
        <button
          className="bg-white border-2 rounded m-3 p-2"
          onClick={() => {
            popup_animation(ele, "inc");

            dispatch({ type: "inc" });
          }}
        >
          +1
        </button>
        <button
          className="bg-white border-2 rounded m-3 p-2"
          onClick={() => {
            popup_animation(ele, "dec");
            dispatch({ type: "dec" });
          }}
        >
          -1
        </button>
      </div>
      <div className="border-t-4 md:border-l-4 text-center p-2 md:border-t-0">
        <button
          className="border-2 text-white p-2 rounded w-20"
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
