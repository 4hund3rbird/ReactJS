import { useState } from "react";
import Option from "./Option";
import Timer from "./Timer";
import PropTypes from "prop-types";

const Questionarea = ({
  question,
  nextquestion,
  countPoints,
  complete,
  currquestion,
}) => {
  console.log(question);
  const [selected, setselected] = useState(false);

  function handleselectoption(k) {
    if (!selected) {
      setselected(true);

      if (k === question.correctOption) {
        countPoints(question.points);
      }
    }
  }

  if (question) {
    return (
      <div className="flex flex-col justify-between gap-7 ">
        <div>
          <div className="text-lg md:text-3xl m-auto text-center w-[300px] md:w-[400px] h-[3em]  font-semibold text-slate-700">
            {question.question}
          </div>
        </div>
        <div className="grid gap-2 m-auto">
          {question.options.map((option, i) => {
            return (
              <Option
                key={i}
                value={i}
                selected={selected}
                currSelected={selected && question.correctOption === i}
                optionName={option}
                handleClick={handleselectoption}
                currquestion={currquestion}
              />
            );
          })}
        </div>
        <div className="flex justify-between w-[300px] md:w-[500px] m-auto">
          <Timer />
          <button
            className="py-2 px-4 text-md md:text-lg border-2 border-slate-200 hover:bg-slate-200 rounded-full"
            onClick={() => {
              if (!complete) {
                setselected(false);
                nextquestion();
              }
            }}
          >
            Next
          </button>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

Questionarea.propTypes = {
  question: PropTypes.object,
  nextquestion: PropTypes.func,
  countPoints: PropTypes.func,
  complete: PropTypes.bool,
  currquestion: PropTypes.number,
};

export default Questionarea;
