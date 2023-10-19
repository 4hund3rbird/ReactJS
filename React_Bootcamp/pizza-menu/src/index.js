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
      <ul className="pizzas">{pizzalist}</ul>
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
      {new Date().toLocaleTimeString()}.
      {condition ? (
        <div className="order">
          <p>We are Open right now !! Come and order some food 🌝</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>"We are closed right now"</p>
      )}
      .
    </footer>
  );
}

function Pizza(props) {
  const pizzaSoldout = props.data.soldOut;
  return (
    <div className={`${pizzaSoldout ? "pizza sold-out" : "pizza"}`}>
      <img src={props.data.photoName} alt={`${props.data.name} name`}></img>
      <div>
        <h3>{props.data.name}</h3>
        <p>{props.data.ingredients}</p>
        {pizzaSoldout ? <span>SOLD OUT</span> : <h3>{props.data.price}</h3>}
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
