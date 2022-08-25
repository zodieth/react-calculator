import "./App.css";
import Button from "./Components/Button";
import { useState } from "react";
import Screen from "./Components/Screen";
import Clear from "./Components/Clear";
import { evaluate } from "mathjs";

function App() {
  const [state, setState] = useState("");

  const eventHandler = (val) => {
    setState(state + val);
  };

  const evaluateHandler = () => {
    setState(evaluate(state));
  };

  return (
    <div className="App">
      <img className="freeCodeCamp-Logo" src="./src/img/logo.png" />
      <Screen input={state} />
      <Clear handleOnClick={() => setState("")}>CE</Clear>

      <div className="calculator-Container">
        <div className="fila 1">
          <Button handleOnClick={eventHandler}>1</Button>
          <Button handleOnClick={eventHandler}>4</Button>
          <Button handleOnClick={eventHandler}>7</Button>
          <Button handleOnClick={evaluateHandler}>=</Button>
        </div>
        <div className="fila 2">
          <Button handleOnClick={eventHandler}>2</Button>
          <Button handleOnClick={eventHandler}>5</Button>
          <Button handleOnClick={eventHandler}>8</Button>
          <Button handleOnClick={eventHandler}>0</Button>
        </div>
        <div className="fila 3">
          <Button handleOnClick={eventHandler}>3</Button>
          <Button handleOnClick={eventHandler}>6</Button>
          <Button handleOnClick={eventHandler}>9</Button>
          <Button handleOnClick={eventHandler}>.</Button>
        </div>
        <div className="fila 4">
          <Button handleOnClick={eventHandler}>+</Button>
          <Button handleOnClick={eventHandler}>-</Button>
          <Button handleOnClick={eventHandler}>*</Button>
          <Button handleOnClick={eventHandler}>/</Button>
        </div>
      </div>
    </div>
  );
}
export default App;
