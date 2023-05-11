import React from "react";
import {Link} from "react-router-dom";

import StopWatch from "../components/Stopwatch";

const StopwatchPage = () => {
  return (
    <div>
      <StopWatch />
      <Link to="/" style={{
        textDecoration: "none",
        cursor: "pointer",
        fontSize: "1.3rem",
        fontFamily: "양진체",
        fontStyle: "italic",
        fontWeight: "bold",
        color: "#121E30"
      }}>홈-으로</Link>
    </div>
  )
};

export default StopwatchPage;