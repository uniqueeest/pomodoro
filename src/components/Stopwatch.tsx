import React, { useState, useRef } from "react";
import "./Stopwatch.css";

type Time = {
  minutes: number;
  seconds: number;
  centiseconds: number;
};

const StopWatch = () => {
  const [time, setTime] = useState<Time>({
    minutes: 0,
    seconds: 0,
    centiseconds: 0,
  });
  const [isActive, setIsActive] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout>();

  const handleStart = () => {
    setIsActive(true);
    intervalRef.current = setInterval(() => {
      setTime((prevState) => {
        let centiseconds = prevState.centiseconds + 1;
        let seconds = prevState.seconds;
        let minutes = prevState.minutes;

        if (centiseconds === 100) {
          seconds++;
          centiseconds = 0;
        }
        if (seconds === 60) {
          minutes++;
          seconds = 0;
        }

        return { minutes, seconds, centiseconds };
      });
    }, 10);
  };

  const handleStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setIsActive(false);
  };

  const handleReset = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTime({ minutes: 0, seconds: 0, centiseconds: 0 });
    setIsActive(false);
  };

  return (
    <div>
      <div className="stopwatch-container">
        {`${time.minutes
          .toString()
          .padStart(2, "0")}:${time.seconds
          .toString()
          .padStart(2, "0")}:${time.centiseconds.toString().padStart(2, "0")}`}
      </div>
      <div className="stopwatch-button-container">
        <button onClick={handleStart} disabled={isActive}>
          Start
        </button>
        <button onClick={handleStop} disabled={!isActive}>
          Stop
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default StopWatch;
