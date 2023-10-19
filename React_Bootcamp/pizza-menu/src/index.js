import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizzaData from "./data";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>Fast React Pizza.co</h1>
    </div>
  );
}
function Menu() {
  const pizzalist = pizzaData.map((pizza) => (
    <Pizza data={pizza} key={pizza.name} />
  ));

  return (
    <div className="menu">
      <h2>OUR MENU</h2>
      {pizzalist}
    </div>
  );
}
function Footer() {
  const openhours = 10;
  const closehours = 18;
  let condition = false;
  if (
    new Date().getHours() <= closehours &&
    new Date().getHours() >= openhours
  ) {
    condition = true;
  }
  return (
    <footer className=".footer">
      {new Date().toLocaleTimeString()} ---
      {condition ? "We are Open." : "We are closed right now"}.
    </footer>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.data.photoName} alt={`${props.data.name} name`}></img>
      <div>
        <h3>{props.data.name}</h3>
        <p>{props.data.ingredients}</p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
