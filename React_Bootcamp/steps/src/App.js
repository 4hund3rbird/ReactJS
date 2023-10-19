// import useState from "react";
import { useState } from "react";

export default function App() {
  return (
    <div className="sheet">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

function Card() {
  const messages = [
    "1. Learn React 🤘",
    "2. Apply for JOBS 👜",
    "3. Invest Your New Income 💸",
    "4. Create a new Career 📈",
  ];
  // const step = 4;

  // const [step, setstep] = useState(1);
  const [step, setstep] = useState(1);
  const [time, settime] = useState(new Date().toLocaleTimeString());
  const [remove, setremove] = useState(false);
  function handlePrevious() {
    step > 1 && setstep(step - 1);
  }
  function handleNext() {
    step < 4 && setstep(step + 1);
  }
  setTimeout(() => {
    settime(new Date().toLocaleTimeString());
  }, 1000);
  return (
    <div className="steps">
      <button className="close" onClick={() => setremove(!remove)}>
        &times;
      </button>
      {remove ? (
        " "
      ) : (
        <>
          {" "}
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : " "}`}>1</div>
            <div className={`${step >= 2 ? "active" : " "}`}>2</div>
            <div className={`${step >= 3 ? "active" : " "}`}>3</div>
            <div className={`${step >= 4 ? "active" : " "}`}>4</div>
          </div>
          <Message msg={messages[step - 1]} />
          <Time t={time} />
          <div className="buttons">
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </>
      )}
    </div>
  );
}

function Message({ msg }) {
  return <p className="message">Step {msg}</p>;
}

function Time({ t }) {
  return <p className="message">{t}</p>;
}
