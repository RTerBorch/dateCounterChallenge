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
      <p>---------- What day? ----------</p>
      <Counter />
      <p>-------------------------------</p>
    </div>
  );

  function today() {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + days);
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    return currentDate.toLocaleDateString(undefined, options);
  }

  function Counter() {
    return (
      <>
        <div>
          <button onClick={() => setStep((s) => s - 1)}>-</button>
          <span> {`Step: ${step}`}</span>
          <button onClick={() => setStep((s) => s + 1)}>+</button>

          <button onClick={() => setMultiplier((m) => m - 1)}>-</button>
          <span>{`multiplier: ${multiplier}`}</span>
          <button onClick={() => setMultiplier((m) => m + 1)}>+</button>
        </div>
        <p>
          {days === 0 ? "Today is: " : `${days} days from today: `} {today()}
        </p>
      </>
    );
  }
}

export default App;
