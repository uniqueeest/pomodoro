import React from "react";
import {Link, useNavigate} from "react-router-dom";   
import "./HomePage.css";

const HomePage = () => {
  const nav = useNavigate();

  const pomodoroHandler = () => {
    nav("/pomodoro")
  };

  const timerHandler = () => {
    nav("/timer")
  };

  const stopwatchHandler = () => {
    nav("/stopwatch")
  }

  return (
    <div className="homepage-container">
      <h1>엠-제트는 타이머도 모아서 써</h1>
      <div className="link-container">
        <div onClick={pomodoroHandler}>
          <p>뽀모도로</p>
        </div>
        <div onClick={timerHandler}>
          <p>타이머</p>
        </div>
        <div onClick={stopwatchHandler}>
          <p>스탑-워치</p>
        </div>    
      </div>    
    </div>
  )
};

export default HomePage;