import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [multiplier, setMultiplier] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    setDays(step * multiplier);
  }, [step, multiplier]);

  return (
    <div className="App">
      <Counter />
    </div>
  );

  function addStep() {
    setStep(step + 1);
  }
  function removeStep() {
    setStep(step - 1);
  }
  function addMultiplier() {
    setMultiplier(multiplier + 1);
  }
  function removeMultiplier() {
    setMultiplier(multiplier - 1);
  }

  function today() {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + days);
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return currentDate.toLocaleDateString(undefined, options);
  }

  function Counter() {
    return (
      <div>
        <div>
          <button onClick={removeStep}>-</button>
          {`Step: ${step}`}
          <button onClick={addStep}>+</button>
          <button onClick={removeMultiplier}>-</button>
          {`multiplier: ${multiplier}`}
          <button onClick={addMultiplier}>+</button>
        </div>
        <p>{`${days} days from today: ${today()}`}</p>
      </div>
    );
  }
}

export default App;
