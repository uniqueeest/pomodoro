import React, {useState, useEffect} from 'react';
import "./Timer.css";
import {Container, Grid} from "@mui/material";

type valueType = {minute: number, second: number};

const Timer = () => {
  const [time, setTime] = useState<number>(0);
  const [minutes, setMinutes] = useState<string|number>(0);
  const [seconds, setSeconds] = useState<string|number>(0);
  const [value, setValue] = useState<valueType>({
    minute: 0,
    second: 0,
  })

  //시간 감소
  useEffect(() => {
    const timeStart = setInterval(() => {
      setTime(() => {
        return time - 1;
      });
    }, 1000);

    if (time === 0) {
      clearInterval(timeStart);
    }

    return(() => {
      clearInterval(timeStart);
    })
  }, [time]);

  //분 단위 관리
  useEffect(() => {
    const minutes = Math.floor(time / 60);
    if (minutes < 10) {
      return setMinutes(`0${minutes}`);
    }
    setMinutes(minutes);
  }, [time]);

  //초 단위 관리
  useEffect(() => {
    const seconds = (time - Math.floor(time / 60) * 60) % 60;
    if (seconds < 10) {
      return setSeconds(`0${seconds}`);
    }
    setSeconds(seconds);
  }, [time]);

  //input 관리
  interface TimerObj {
    minute: number;
    second: number;
  }

  const inputHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setValue((current) => {
      const newObj = {...current};
      if(Number(value) > 60 && name === "minute") {
        newObj[name as keyof TimerObj] = Number(60);
        return newObj;
      }
      if(Number(value) > 60 && name === "second") {
        newObj[name as keyof TimerObj] = Number(59);
        return newObj;
      }
      newObj[name as keyof TimerObj] = Number(value);
      return newObj;
    })
  } 

  //start button 관리
  const clickHandler = () => {
    setTime(() => {
      const minute = value.minute * 60;
      const second = value.second;
      return minute + second;
    });

    setValue((current) => {
      const newObj = {...current, minute:0, second:0}
      return newObj;
    })
  }

  //reset button 관리
  const resetHandler = () => {
    setTime(0);
  }

  return (
    <Container>
      <div className='time-container'>
        <div className='timer-input-container'>
          <input type="number" min={0} max={60} name="minute" value={value.minute} onChange={inputHandler}/>분
          <input type="number" min={0} max={59} name="second" value={value.second} onChange={inputHandler}/>초
        </div>
        <div className='timer-button-container'>
          <button onClick={clickHandler}>start</button>
          <button onClick={resetHandler}>reset</button>
        </div>
        <div className='text-container'>
          <h2>{minutes}:{seconds}</h2>
        </div>
      </div>
    </Container>
  )
};

export default Timer;