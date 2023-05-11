import React from "react";
import {Link} from "react-router-dom";   
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1>엠-제트는 타이머도 모아서 써</h1>
      <div className="link-container">
        <div>
          <Link to="/pomodoro">뽀모도로</Link>
        </div>
        <div>
          <Link to="/timer">타이머</Link>
        </div>
        <div>
          <Link to="/stopwatch">스탑-워치</Link>
        </div>    
      </div>    
    </div>
  )
};

export default HomePage;