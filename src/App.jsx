import React, { useEffect, useState } from "react";
import Timer from "./components/Timer/Timer";
import style from "./WatchStop.module.scss"

function App() {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    const newIntervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1);
    setIntervalId(newIntervalId);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
      <div className="app">
        <Timer time={time}/>
        <div>
          <button className={style} onClick={startTimer}>Start</button>
          <button onClick={stopTimer}>Stop</button>
          <button onClick={resetTimer}>Reset</button>
        </div>
      </div>
  );
}

export default App;
