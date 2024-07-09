// import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
// import App from "./App.jsx";
import "./index.css";

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="totel-items">{props.itemTotal}</span>
    </header>
  );
};

const Items = () => {
  return (
    <div className="item">
      <button className="remove-item" />
      <span className="item-name">Apple</span>
      <Counter />
    </div>
  );
};

const Counter = () => {
  return (
    <div className="quantity">
      <span className="qty-label">QTY</span>
      <button className="increment">+</button>
      <button className="decrement">-</button>
      <span className="qty-amount">15</span>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header title = "Grocery List test3310"  itemTotal ={1}/>
      <Items />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
