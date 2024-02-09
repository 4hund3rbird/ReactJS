import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import Progressbar from "./components/Progressbar";
import Questionarea from "./components/Questionarea";
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:8000/questions";

function reducer(state, action) {
  switch (action.type) {
    case "setquestions":
      return { ...state, questions: action.payload };
    case "nextquestion":
      if (state.currquestion <= 13) {
        return { ...state, currquestion: state.currquestion + 1 };
      } else {
        return { ...state, complete: true };
      }
    case "addpoints":
      return { ...state, points: state.points + action.payload };
    default:
      return new Error("invalid type of action");
  }
}

const initialState = {
  currquestion: 0,
  points: 0,
  questions: [],
  complete: false,
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const questions = useFetch(url);
  const countPoints = (e) => {
    dispatch({ type: "addpoints", payload: e });
  };
  useEffect(() => {
    dispatch({ type: "setquestions", payload: questions });
  }, [questions]);

  function handleNextQuestion() {
    dispatch({ type: "nextquestion" });
  }

  return (
    <div className="w-full h-screen flex flex-col justify-start md:bg-slate-200 md:justify-center">
      <div className="text-slate-600  w-fit p-6 mx-auto my-10 md:my-auto bg-white rounded-3xl">
        <Header />
        <Progressbar
          size={state.currquestion}
          points={state.points}
          totalpoints={state.questions.reduce((e, i) => e + i.points, 0)}
          totalques={state.questions.length}
        />
        <Questionarea
          currquestion={state.currquestion}
          countPoints={countPoints}
          question={state.questions[state.currquestion]}
          nextquestion={handleNextQuestion}
          complete={state.complete}
        />
      </div>
    </div>
  );
};

export default App;
