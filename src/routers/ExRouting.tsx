import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from "./HomePage";
import PomodoroPage from "./PomodoroPage";
import TimerPage from "./TimerPage";
import StopwatchPage from "./StopwatchPage";

const ExRouting = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/pomodoro" element={<PomodoroPage />} />
        <Route path="/timer" element={<TimerPage />} />
        <Route path="/stopwatch" element={<StopwatchPage />} />
      </Routes>
    </Router>
  )
};

export default ExRouting;