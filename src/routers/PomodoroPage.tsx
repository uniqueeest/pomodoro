import React from "react";
import {Link} from "react-router-dom";

import Pomodoro from "../components/Pomodoro";
import LifeQuote from "../components/LifeQuote";

const PomodoroPage = () => {
  return (
    <div>
      <Pomodoro />
      <LifeQuote />
      <Link to="/" style={{
        textDecoration: "none",
        cursor: "pointer",
        fontSize: "1.3rem",
        fontFamily: "양진체",
        fontStyle: "italic",
        fontWeight: "500",
        color: "#121E30"
      }}>홈-으로</Link>
    </div>
  )
};

export default PomodoroPage;