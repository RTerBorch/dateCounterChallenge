import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [multiplier, setMultiplier] = useState(0);
  const [step, setStep] = useState(1);

  function handleReset() {
    setMultiplier(0);
    setStep(1);
  }

  const calculateDate = () => {
    const baseDate = new Date();
    baseDate.setDate(baseDate.getDate() + multiplier);
    return baseDate.toDateString();
  };

  return (
    <>
      <p>---------- What day? ----------</p>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>

      <div>
        <button onClick={() => setMultiplier((m) => m - step)}>-</button>
        <input
          type="text"
          value={multiplier}
          onChange={(e) => setMultiplier(Number(e.target.value))}
        />
        <button onClick={() => setMultiplier((m) => m + step)}>+</button>
      </div>

      <p>
        <span>
          {multiplier === 0
            ? "Today is "
            : multiplier > 0
            ? `${multiplier} days from today is `
            : `${Math.abs(multiplier)} days ago was `}
        </span>
        <span>{calculateDate()}</span>
      </p>

      {(multiplier !== 0 || step !== 1) && (
        <button onClick={handleReset}>Reset</button>
      )}
    </>
  );
}

export default App;
