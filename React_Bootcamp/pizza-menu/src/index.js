import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
  return (
    <div className="menu">
      <h2>OUR MENU</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
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

function Pizza() {
  return (
    <div className="pizza">
      <img src="pizzas/focaccia.jpg" alt="pizza image"></img>
      <h3>Focaccia</h3>
      <p>Tomato and mozarella</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
