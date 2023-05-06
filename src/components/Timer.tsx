import React, {useState, useEffect} from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [minutes, setMinutes] = useState<string|number>(0);
  const [seconds, setSeconds] = useState<string|number>(0);
  const [workBtn, setWorkBtn] = useState(true);
  const [restBtn, setRestBtn] = useState(false);

  useEffect(() => {
    const timeStart = setInterval(() => {
      setTime(() => {
        return time - 1;
      });
    }, 1000);

    if(time === 0) {
      clearInterval(timeStart);
    }
    return (() => {
      clearInterval(timeStart);
    });
  }, [time]);

  //분 단위 관리
  useEffect(() => {
    const minutes = Math.floor(time / 60);
    if (minutes < 10) {
      return setMinutes(`0${minutes}`)
    }
    setMinutes(minutes);
  }, [time]);

  //초 단위 관리
  useEffect(() => {
    const seconds = (time - Math.floor(time / 60) * 60) % 60;
    if (seconds < 10) {
      return setSeconds(`0${seconds}`)
    }
    setSeconds(seconds);
  }, [time]);

  //work 버튼 관리
  useEffect(() => {
    if (time === 1 && !restBtn) {
      setWorkBtn(false);
      setRestBtn(true);
    }
    
  }, [time]);

  //rest 버튼 관리
  useEffect(() => {
    if (time === 1 && !workBtn) {
      setRestBtn(false);
      setWorkBtn(true);
    }
    
  }, [time]);

  //reset 버튼 핸들러
  const timeHandler = () => {
    setTime(0);
    setWorkBtn(true);
    setRestBtn(false);
  };

  //work 버튼 핸들러
  const workHandler = () => {
    setTime(1800);
  }

  //rest 버튼 핸들러
  const restHandler = () => {
    setTime(300);
  }

  return (
    <div>
      <h1>Pomodoro</h1>
      <h3>{minutes}:{seconds}</h3>
      {workBtn && <button onClick={workHandler}>작업 시작</button>}
      {restBtn && <button onClick={restHandler}>휴식 시작</button>}
      <button onClick={timeHandler}>종료</button>
    </div>
  )
};

export default Timer;